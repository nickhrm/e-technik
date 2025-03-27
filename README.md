Installationsanleitung

Voraussetzung: Node.js muss auf dem System installiert sein.

    Repository klonen

git clone <REPO_URL>

In das geklonte Verzeichnis wechseln

cd <REPO_ORDNER>

Abhängigkeiten installieren

npm install

Entwicklungsserver starten

    npm run dev

    Im Browser öffnen
    Der Terminal zeigt an, auf welchem Port der Server läuft (z. B. localhost:XXXX). Diese URL im Browser aufrufen.

Projektbeschreibung

Dieses Projekt veranschaulicht einen Plattenkondensator, in dem sich zwei unterschiedliche Dielektrika zwischen den Platten befinden. Über eine benutzerfreundliche Oberfläche kann man

    den Plattenabstand (d),

    die Spannung (U) und

    die gewünschten Materialien (Dielektrika)

einstellen. Auf Basis dieser Eingaben werden das elektrische Feld (E-Feld) sowie das elektrische Verschiebungsfeld (D-Feld) berechnet und durch Pfeile visualisiert. Sowohl das E-Feld als auch das D-Feld lassen sich an- und ausschalten.

    Hinweis:
    Die D-Feld-Pfeile werden ohne Einbeziehung magnetischer Größen (µ) berechnet und dienen der reinen Visualisierung des elektrischen Verschiebungsfeldes.

Funktionsweise
Physikalischer Hintergrund

Ein Plattenkondensator besteht aus zwei parallelen Platten, die durch einen Abstand dd voneinander getrennt sind. An den Platten liegt eine Spannung UU an, sodass sich zwischen ihnen ein elektrisches Feld (E-Feld) aufbaut.

    E-Feld
    Das elektrische Feld in einem idealen Plattenkondensator wird approximiert durch
    E=Ud.
    E=dU​.

    Je größer die angelegte Spannung oder je geringer der Plattenabstand, desto stärker ist das E-Feld.

    Dielektrikum und permittivity
    Befindet sich ein Dielektrikum zwischen den Platten, wird dieses durch seine relative Permittivität εrεr​ (im Code: material.value) charakterisiert. Die Permittivität des Vakuums wird durch ε0ε0​ (im Code: PERMITTIVITY_VACUUM) dargestellt.

    D-Feld
    Das elektrische Verschiebungsfeld (D-Feld) ist abhängig von E-Feld, Vakuumpermittivität und der relativen Permittivität:
    D=ε0⋅εr⋅E.
    D=ε0​⋅εr​⋅E.

    Im Code wird dies umgesetzt, indem das aus E=U/dE=U/d berechnete E-Feld mit der relativen Permittivität des gewählten Materials und ε0ε0​ multipliziert wird. Dadurch erhält man das D-Feld in Coulomb pro Quadratmeter (C/m22).

    Zwei Dielektrika
    Im Projekt können zwei verschiedene Dielektrika gewählt werden, die sich im Plattenkondensator nebeneinander oder übereinander befinden. Das Skript berechnet und visualisiert die Felder entsprechend der Einstellungen.

Rechenschritte im Code

    Spannung und Plattenabstand

        E-Feld berechnen: ‘voltage/height‘‘voltage/height‘

        Auf eine bestimmte Nachkommastelle runden.

    D-Feld berechnen

        D=E×ε0×εrD=E×ε0​×εr​.

        Optional: “Proportionaler” Wert ohne ε0ε0​ („getDFieldProportional“) wird genutzt, um lediglich die relative Änderung zu visualisieren.

    Visualisierung

        Das E-Feld wird durch Pfeile dargestellt, deren Länge proportional zur Feldstärke ist.

        Das D-Feld wird analog berechnet und kann separat dargestellt werden.

Limitierungen

    Performancegrenze bei vielen Pfeilen:
    Wenn sehr viele Pfeile gleichzeitig gerendert werden (z. B. bei sehr großer Auflösung), kann der Browser ins Stocken geraten oder abstürzen.

    Idealisierte Annahmen:
    Es wird davon ausgegangen, dass das elektrische Feld überall gleich stark ist (homogenes Feld). Effekte wie Randfelder oder Frequenzabhängigkeiten werden nicht betrachtet.

Damit bietet das Projekt eine anschauliche Möglichkeit, das Verhalten eines Plattenkondensators mit verschiedenen Dielektrika zu untersuchen und zu visualisieren. Insbesondere beim Experimentieren mit unterschiedlichen Materialien zeigt sich gut, wie stark die relative Permittivität (εrεr​) das D-Feld beeinflusst.