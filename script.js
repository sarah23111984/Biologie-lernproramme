// =====================================================
//  Genetik-Quiz – Programmlogik
// =====================================================
const MAX_ERGEBNISSE = 20;              // so viele Ergebnisse werden gespeichert
const SPEICHER_SCHLUESSEL = "genetikQuizErgebnisse";
const FRAGEN_MISCHEN = true;            // false = Fragen immer in gleicher Reihenfolge

// --- Elemente ---
const $ = (id) => document.getElementById(id);
const screens = {
  start: $("start-screen"),
  quiz: $("quiz-screen"),
  result: $("result-screen"),
  klasse: $("class-screen"),
};

// --- Zustand ---
let fragen = [];
let index = 0;
let punkte = 0;
let beantwortet = false;
let spielerName = "";
let falscheFragen = [];

// --- Hilfsfunktionen ---
function zeige(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mischen(liste) {
  const kopie = [...liste];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

function ladeErgebnisse() {
  try {
    return JSON.parse(localStorage.getItem(SPEICHER_SCHLUESSEL)) || [];
  } catch (e) {
    return [];
  }
}

function speichereErgebnis(eintrag) {
  try {
    const liste = ladeErgebnisse();
    liste.unshift(eintrag);
    localStorage.setItem(SPEICHER_SCHLUESSEL, JSON.stringify(liste.slice(0, MAX_ERGEBNISSE)));
  } catch (e) {
    /* Speichern nicht möglich (z. B. privater Modus) – Quiz funktioniert trotzdem */
  }
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// --- Quiz starten ---
function starteQuiz() {
  const name = $("name-input").value.trim();
  if (!name) {
    $("name-hint").classList.remove("hidden");
    $("name-input").focus();
    return;
  }
  $("name-hint").classList.add("hidden");
  spielerName = name;
  fragen = FRAGEN_MISCHEN ? mischen(FRAGEN) : [...FRAGEN];
  index = 0;
  punkte = 0;
  falscheFragen = [];
  zeige("quiz");
  zeigeFrage();
}

// --- Frage anzeigen ---
function zeigeFrage() {
  const f = fragen[index];
  beantwortet = false;

  $("question-text").textContent = f.frage;
  $("progress-text").textContent = `Frage ${index + 1} von ${fragen.length}`;
  $("score-live").textContent = `Punkte: ${punkte}`;
  aktualisiereFortschritt(index);

  $("yes-btn").disabled = false;
  $("no-btn").disabled = false;
  $("yes-btn").classList.remove("chosen");
  $("no-btn").classList.remove("chosen");
  $("feedback").className = "feedback hidden";
  $("next-btn").classList.add("hidden");
}

function aktualisiereFortschritt(erledigt) {
  const prozent = (erledigt / fragen.length) * 100;
  $("progress-fill").style.width = prozent + "%";
  document.querySelector(".progress-bar").setAttribute("aria-valuenow", erledigt);
}

// --- Antwort prüfen ---
function antworte(antwortJa) {
  if (beantwortet) return;
  beantwortet = true;

  const f = fragen[index];
  const richtig = antwortJa === f.antwort;
  if (richtig) punkte++;
  else falscheFragen.push(f);

  $("yes-btn").disabled = true;
  $("no-btn").disabled = true;
  (antwortJa ? $("yes-btn") : $("no-btn")).classList.add("chosen");

  const fb = $("feedback");
  fb.className = "feedback " + (richtig ? "correct" : "wrong");
  $("feedback-title").textContent = richtig
    ? "✅ Richtig!"
    : `❌ Leider falsch. Richtig ist: ${f.antwort ? "Ja" : "Nein"}`;
  $("feedback-text").textContent = f.erklaerung;

  $("score-live").textContent = `Punkte: ${punkte}`;
  aktualisiereFortschritt(index + 1);

  const btn = $("next-btn");
  btn.textContent = index === fragen.length - 1 ? "Ergebnis anzeigen 🏆" : "Nächste Frage →";
  btn.classList.remove("hidden");
  btn.focus();
}

function naechsteFrage() {
  if (!beantwortet) return;
  index++;
  if (index < fragen.length) zeigeFrage();
  else zeigeErgebnis();
}

// --- Ergebnis ---
function zeigeErgebnis() {
  const gesamt = fragen.length;
  const prozent = Math.round((punkte / gesamt) * 100);

  let emoji, titel, text;
  if (prozent >= 90)      { emoji = "🏆"; titel = "Hervorragend";  text = "Du bist ein echter Genetik-Profi – Mendel wäre stolz auf dich!"; }
  else if (prozent >= 75) { emoji = "🌟"; titel = "Sehr gut";      text = "Du kennst dich schon richtig gut aus."; }
  else if (prozent >= 50) { emoji = "👍"; titel = "Gut gemacht";   text = "Ein solides Ergebnis. Wiederhole die Fragen unten noch einmal."; }
  else                    { emoji = "🌱"; titel = "Weiter üben";   text = "Lies dir die Erklärungen unten durch und versuche es dann noch einmal."; }

  $("result-emoji").textContent = emoji;
  $("result-title").textContent = `${titel}, ${spielerName}!`;
  $("result-score").textContent = `Du hast ${punkte} von ${gesamt} Punkten erreicht.`;
  $("result-percent").textContent = prozent + " %";
  document.querySelector(".result-circle").style.setProperty("--p", prozent);
  $("result-message").textContent = text;

  const liste = $("wrong-list");
  liste.innerHTML = "";
  $("wrong-heading").classList.toggle("hidden", falscheFragen.length === 0);
  falscheFragen.forEach((f) => {
    const li = document.createElement("li");
    li.innerHTML = `${escapeHtml(f.frage)}<br><strong>Richtig: ${f.antwort ? "Ja" : "Nein"}</strong> – ${escapeHtml(f.erklaerung)}`;
    liste.appendChild(li);
  });

  speichereErgebnis({
    name: spielerName,
    punkte,
    gesamt,
    datum: new Date().toLocaleString("de-DE", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }),
  });

  zeige("result");
}

// --- Klassenergebnisse ---
function zeigeKlasse() {
  const liste = ladeErgebnisse();
  const body = $("results-body");
  body.innerHTML = "";
  $("no-results").classList.toggle("hidden", liste.length > 0);
  document.querySelector(".results-table").classList.toggle("hidden", liste.length === 0);

  liste.forEach((e, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${i + 1}</td><td>${escapeHtml(e.name)}</td><td>${e.punkte} / ${e.gesamt}</td><td>${escapeHtml(e.datum)}</td>`;
    body.appendChild(tr);
  });
  zeige("klasse");
}

function loescheKlasse() {
  if (!confirm("Wirklich alle gespeicherten Ergebnisse löschen?")) return;
  try { localStorage.removeItem(SPEICHER_SCHLUESSEL); } catch (e) {}
  zeigeKlasse();
}

function zurueckZumStart() {
  $("name-input").value = "";
  zeige("start");
  $("name-input").focus();
}

// --- Ereignisse ---
$("start-btn").addEventListener("click", starteQuiz);
$("name-input").addEventListener("keydown", (e) => { if (e.key === "Enter") starteQuiz(); });
$("yes-btn").addEventListener("click", () => antworte(true));
$("no-btn").addEventListener("click", () => antworte(false));
$("next-btn").addEventListener("click", naechsteFrage);
$("restart-btn").addEventListener("click", zurueckZumStart);
$("show-results-btn").addEventListener("click", zeigeKlasse);
$("results-from-end-btn").addEventListener("click", zeigeKlasse);
$("back-btn").addEventListener("click", zurueckZumStart);
$("clear-btn").addEventListener("click", loescheKlasse);

// Tastatursteuerung im Quiz
document.addEventListener("keydown", (e) => {
  if (!screens.quiz.classList.contains("active")) return;
  const taste = e.key.toLowerCase();
  if (taste === "j") antworte(true);
  else if (taste === "n") antworte(false);
  else if (e.key === "Enter" && beantwortet) { e.preventDefault(); naechsteFrage(); }
});
