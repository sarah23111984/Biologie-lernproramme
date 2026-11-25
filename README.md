# 🫛 Genetik-Quiz – Mendels Erbsen

Lernprogramm für den Biologieunterricht (Klasse 9, Realschule NRW) zum Thema
**Genetik und Mendelsche Regeln**. Läuft direkt im Browser – ohne Installation, ohne Internet.

## Funktionen
- 50 einfache Ja/Nein-Aussagen (DNA, Gene, Allele, Mendel, 1.–3. Mendelsche Regel, Kreuzungen, Geschlecht, Mutation)
- Sofortige Rückmeldung *richtig/falsch* mit kurzer Erklärung
- Fortschrittsbalken und Punktanzeige
- Ergebnis mit Prozentkreis und Liste der falsch beantworteten Fragen
- Klassenergebnisse: die letzten 20 Ergebnisse werden auf dem Gerät gespeichert
- Fragen werden in zufälliger Reihenfolge gestellt (verhindert Abschreiben)
- Bedienung per Maus, Touch oder Tastatur (`J` = Ja, `N` = Nein, `Enter` = weiter)

## Dateien
| Datei | Inhalt |
|---|---|
| `index.html` | Startdatei – diese öffnen |
| `style.css` | Gestaltung |
| `fragen.js` | Die 50 Fragen mit Lösungen und Erklärungen |
| `script.js` | Programmlogik |

## Starten
1. Alle vier Dateien gemeinsam in **einen Ordner** legen (z. B. per USB-Stick oder Download als ZIP).
2. Doppelklick auf **`index.html`** – das Quiz öffnet sich im Browser (Chrome, Edge, Firefox, Safari).
3. Für iPads/Tablets: Ordner z. B. über die Schulcloud/LogineoNRW bereitstellen oder online stellen (siehe unten).

## Verwenden
1. Schüler/in gibt den Vornamen ein und klickt auf **Quiz starten**.
2. Bei jeder Aussage **Ja** oder **Nein** wählen → Rückmeldung lesen → **Nächste Frage**.
3. Am Ende erscheint die Punktzahl. Mit **Nächste Person** ist das Quiz für die nächste Person bereit.
4. Über **Klassenergebnisse** sieht die Lehrkraft die letzten 20 Ergebnisse dieses Geräts.
   Mit **Liste löschen** wird die Liste geleert (z. B. vor einer neuen Klasse).

## Anpassen
- Fragen ändern: `fragen.js` mit einem Texteditor öffnen. `antwort: true` = Ja ist richtig, `false` = Nein.
- Feste Reihenfolge: in `script.js` `FRAGEN_MISCHEN = false` setzen.
- Anzahl gespeicherter Ergebnisse: `MAX_ERGEBNISSE` in `script.js`.

## Online bereitstellen (optional)
Über GitHub Pages: Repository → *Settings* → *Pages* → Branch auswählen → *Save*.
Danach ist das Quiz unter einer Internetadresse für alle Geräte erreichbar.
