// =====================================================
//  Fragenkatalog: Genetik & Mendelsche Regeln (Klasse 9)
//  antwort: true = "Ja" ist richtig, false = "Nein" ist richtig
//  Fragen können hier einfach geändert oder ergänzt werden.
// =====================================================
const FRAGEN = [
  // --- Grundlagen: DNA, Gene, Chromosomen ---
  { frage: "Gene sind Abschnitte auf der DNA.", antwort: true,
    erklaerung: "Ein Gen ist ein bestimmter Abschnitt der DNA und enthält die Information für ein Merkmal." },
  { frage: "Beim Menschen befindet sich die DNA hauptsächlich in der Zellmembran.", antwort: false,
    erklaerung: "Die DNA liegt hauptsächlich im Zellkern." },
  { frage: "Eine menschliche Körperzelle hat 23 Chromosomen.", antwort: false,
    erklaerung: "Körperzellen haben 46 Chromosomen (23 Paare)." },
  { frage: "Eine menschliche Eizelle hat 46 Chromosomen.", antwort: false,
    erklaerung: "Keimzellen (Ei- und Spermienzellen) haben nur 23 Chromosomen – einen einfachen Chromosomensatz." },
  { frage: "Ein Gen enthält die Bauanleitung für ein Merkmal.", antwort: true,
    erklaerung: "Gene sind wie Baupläne, z. B. für Blütenfarbe oder Augenfarbe." },
  { frage: "Bei der Meiose wird die Chromosomenzahl verdoppelt.", antwort: false,
    erklaerung: "Bei der Meiose (Reifeteilung) wird die Chromosomenzahl halbiert. So entstehen Keimzellen." },
  { frage: "Bei der Befruchtung verschmelzen Eizelle und Spermienzelle.", antwort: true,
    erklaerung: "Dabei entsteht wieder eine Zelle mit 46 Chromosomen." },

  // --- Gregor Mendel ---
  { frage: "Gregor Mendel war ein Mönch, der Kreuzungsversuche mit Erbsen machte.", antwort: true,
    erklaerung: "Mendel lebte im 19. Jahrhundert im Kloster in Brünn und gilt als Begründer der Vererbungslehre." },
  { frage: "Mendel führte seine Vererbungsversuche mit Hunden durch.", antwort: false,
    erklaerung: "Mendel arbeitete mit Erbsenpflanzen." },
  { frage: "Mendel wählte Erbsen, weil sie sehr langsam wachsen und nur wenige Nachkommen haben.", antwort: false,
    erklaerung: "Im Gegenteil: Erbsen wachsen schnell, haben viele Samen und gut erkennbare Merkmale." },
  { frage: "Bei Erbsen ist die weiße Blütenfarbe dominant über die violette.", antwort: false,
    erklaerung: "Violett ist dominant, Weiß ist rezessiv." },

  // --- Fachbegriffe ---
  { frage: "Ein Allel ist eine Ausprägungsform eines Gens.", antwort: true,
    erklaerung: "Zum Beispiel gibt es für die Blütenfarbe ein Allel für 'violett' und eines für 'weiß'." },
  { frage: "Für die meisten Merkmale besitzt man zwei Allele – eins von der Mutter und eins vom Vater.", antwort: true,
    erklaerung: "Chromosomen liegen paarweise vor, daher gibt es meist zwei Allele pro Gen." },
  { frage: "Ein dominantes Allel wird von einem rezessiven Allel überdeckt.", antwort: false,
    erklaerung: "Umgekehrt: Das dominante Allel setzt sich durch und überdeckt das rezessive." },
  { frage: "Ein rezessives Merkmal ist nur sichtbar, wenn zwei rezessive Allele vorhanden sind.", antwort: true,
    erklaerung: "Nur beim Genotyp aa zeigt sich das rezessive Merkmal." },
  { frage: "Der Genotyp beschreibt das äußere Erscheinungsbild eines Lebewesens.", antwort: false,
    erklaerung: "Das äußere Erscheinungsbild heißt Phänotyp. Der Genotyp ist die Kombination der Allele." },
  { frage: "Der Phänotyp ist das sichtbare Erscheinungsbild, z. B. die Blütenfarbe.", antwort: true,
    erklaerung: "Phänotyp = wie ein Lebewesen aussieht." },
  { frage: "Ein Lebewesen mit dem Genotyp AA ist reinerbig.", antwort: true,
    erklaerung: "Reinerbig (homozygot) bedeutet: beide Allele sind gleich." },
  { frage: "Mischerbig bedeutet, dass beide Allele gleich sind.", antwort: false,
    erklaerung: "Mischerbig (heterozygot) bedeutet: zwei verschiedene Allele, z. B. Aa." },
  { frage: "Dominante Allele schreibt man meistens mit einem Großbuchstaben.", antwort: true,
    erklaerung: "Großbuchstabe = dominant (A), Kleinbuchstabe = rezessiv (a)." },
  { frage: "Der Genotyp aa ist mischerbig.", antwort: false,
    erklaerung: "aa besteht aus zwei gleichen Allelen und ist daher reinerbig." },
  { frage: "Der Genotyp Aa ist mischerbig.", antwort: true,
    erklaerung: "Aa hat zwei verschiedene Allele – also mischerbig." },
  { frage: "Ein Lebewesen mit dem Genotyp Aa zeigt das dominante Merkmal.", antwort: true,
    erklaerung: "Das dominante Allel A überdeckt das rezessive Allel a." },

  // --- Generationen ---
  { frage: "Die Elterngeneration wird mit F1 abgekürzt.", antwort: false,
    erklaerung: "Die Elterngeneration heißt P (Parentalgeneration). F1 ist die erste Tochtergeneration." },
  { frage: "Die Kinder der Elterngeneration nennt man F2-Generation.", antwort: false,
    erklaerung: "Die Kinder sind die F1-Generation. Die Enkel sind die F2-Generation." },

  // --- 1. Mendelsche Regel ---
  { frage: "Die 1. Mendelsche Regel heißt Uniformitätsregel.", antwort: true,
    erklaerung: "Uniform bedeutet 'einheitlich' – alle F1-Nachkommen sind gleich." },
  { frage: "Kreuzt man zwei reinerbige Eltern, die sich in einem Merkmal unterscheiden, sind alle Nachkommen der F1 gleich.", antwort: true,
    erklaerung: "Das ist genau die Uniformitätsregel." },
  { frage: "Nach der Uniformitätsregel sehen die F1-Nachkommen alle unterschiedlich aus.", antwort: false,
    erklaerung: "Nach der Uniformitätsregel sehen alle F1-Nachkommen gleich aus." },
  { frage: "Bei der Kreuzung RR × rr haben alle Nachkommen den Genotyp Rr.", antwort: true,
    erklaerung: "Jedes Kind bekommt ein R vom einen und ein r vom anderen Elternteil." },

  // --- 2. Mendelsche Regel ---
  { frage: "Die 2. Mendelsche Regel heißt Spaltungsregel.", antwort: true,
    erklaerung: "In der F2 'spalten' sich die Merkmale wieder auf." },
  { frage: "Nach der Spaltungsregel verschwinden die Merkmale der Großeltern in der F2 für immer.", antwort: false,
    erklaerung: "In der F2 tauchen die Merkmale der Großeltern (P-Generation) wieder auf." },
  { frage: "Bei einem dominant-rezessiven Erbgang ist das Verhältnis der Phänotypen in der F2 etwa 3 : 1.", antwort: true,
    erklaerung: "3 Teile zeigen das dominante, 1 Teil das rezessive Merkmal." },
  { frage: "Bei einem dominant-rezessiven Erbgang ist das Verhältnis in der F2 immer 1 : 1.", antwort: false,
    erklaerung: "Das Verhältnis der Phänotypen ist 3 : 1." },
  { frage: "Bei der Kreuzung Rr × Rr haben etwa 25 % der Nachkommen den Genotyp rr.", antwort: true,
    erklaerung: "RR : Rr : rr = 1 : 2 : 1, also ist rr eins von vier = 25 %." },
  { frage: "Bei der Kreuzung Rr × Rr haben alle Nachkommen den Genotyp Rr.", antwort: false,
    erklaerung: "Es entstehen RR, Rr und rr im Verhältnis 1 : 2 : 1." },
  { frage: "Bei der Kreuzung Rr × Rr zeigen etwa 3 von 4 Nachkommen das dominante Merkmal.", antwort: true,
    erklaerung: "RR, Rr und Rr zeigen das dominante Merkmal – das sind 3 von 4." },

  // --- 3. Mendelsche Regel ---
  { frage: "Die 3. Mendelsche Regel heißt Unabhängigkeitsregel (Neukombinationsregel).", antwort: true,
    erklaerung: "Verschiedene Merkmale werden unabhängig voneinander vererbt." },
  { frage: "Nach der 3. Mendelschen Regel werden verschiedene Merkmale immer gemeinsam vererbt.", antwort: false,
    erklaerung: "Sie werden unabhängig voneinander vererbt und können neu kombiniert werden." },

  // --- Kreuzungsschema ---
  { frage: "Ein Kreuzungsschema in Tabellenform nennt man Kombinationsquadrat (Punnett-Quadrat).", antwort: true,
    erklaerung: "Damit kann man alle möglichen Allel-Kombinationen der Nachkommen übersichtlich darstellen." },
  { frage: "Bei der Kreuzung AA × Aa können Nachkommen mit dem Genotyp aa entstehen.", antwort: false,
    erklaerung: "Der Elternteil AA gibt immer ein A weiter. Es entstehen nur AA und Aa." },
  { frage: "Bei der Kreuzung Aa × aa hat etwa die Hälfte der Nachkommen den Genotyp aa.", antwort: true,
    erklaerung: "Es entstehen Aa und aa im Verhältnis 1 : 1." },

  // --- Intermediärer Erbgang ---
  { frage: "Beim intermediären Erbgang liegt das Merkmal der Mischerbigen zwischen den Merkmalen der Eltern.", antwort: true,
    erklaerung: "Beispiel Wunderblume: rot × weiß ergibt rosa Blüten." },
  { frage: "Beim intermediären Erbgang ist das Verhältnis in der F2 1 : 2 : 1.", antwort: true,
    erklaerung: "Beispiel: 1 rot : 2 rosa : 1 weiß." },

  // --- Mensch, Geschlecht, Mutation ---
  { frage: "Frauen haben die Geschlechtschromosomen XY.", antwort: false,
    erklaerung: "Frauen haben XX, Männer haben XY." },
  { frage: "Männer haben zwei X-Chromosomen.", antwort: false,
    erklaerung: "Männer haben ein X- und ein Y-Chromosom (XY)." },
  { frage: "Das Geschlecht eines Kindes wird durch die Spermienzelle bestimmt.", antwort: true,
    erklaerung: "Die Eizelle hat immer ein X. Die Spermienzelle bringt entweder X (Mädchen) oder Y (Junge) mit." },
  { frage: "Eine Mutation ist eine Veränderung der Erbinformation.", antwort: true,
    erklaerung: "Mutationen können zufällig oder z. B. durch UV-Strahlung entstehen." },
  { frage: "Mutationen sind immer schädlich.", antwort: false,
    erklaerung: "Mutationen können schädlich, neutral oder sogar nützlich sein." },
  { frage: "Menschen mit Down-Syndrom haben das Chromosom 21 dreimal.", antwort: true,
    erklaerung: "Man nennt das auch Trisomie 21. Betroffene haben 47 statt 46 Chromosomen." },
  { frage: "Umwelteinflüsse wie Ernährung können den Phänotyp nicht beeinflussen.", antwort: false,
    erklaerung: "Der Phänotyp entsteht durch Gene UND Umwelt, z. B. beeinflusst Ernährung die Körpergröße." }
];
