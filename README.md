Das Projekt kann über http://rgwo8g8sc808ogso4gs8480k.217.160.79.109.sslip.io/ aufgerufen werden.


# Projektbeschreibung
Dieses Projekt veranschaulicht einen Plattenkondensator, in dem sich zwei unterschiedliche Dielektrika zwischen den Platten befinden. Über die Oberfläche kann man
- den Plattenabstand (d),
- die Spannung (U) und
- die gewünschten Materialien (Dielektrika)
einstellen. 

Auf Basis dieser Eingaben werden das elektrische Feld (E-Feld) sowie das elektrische Verschiebungsfeld (D-Feld) berechnet und durch Pfeile visualisiert. Sowohl das E-Feld als auch das D-Feld lassen sich ein- und ausschalten.

Hinweis: Die D-Feld-Pfeile werden ohne Einbeziehung der permitivität des Vakuums berechnet

# Funktionsweise
Ein Plattenkondensator besteht aus zwei parallelen Platten, die durch einen Abstand d voneinander getrennt sind. An den Platten liegt eine Spannung U an, sodass sich zwischen ihnen ein elektrisches Feld (E-Feld) aufbaut.

### E-Feld
Das elektrische Feld in einem idealen Plattenkondensator lässt sich berechnen durch E=Ud.

### Dielektrikum und Permitivität
Befindet sich ein Dielektrikum zwischen den Platten, wird dieses durch seine relative Permittivität εr (im Code: RELATIVE_PERMITTIVITIES) charakterisiert. Die Permittivität des Vakuums wird durch ε0​ (im Code: PERMITTIVITY_VACUUM) dargestellt.

### D-Feld
Das elektrische Verschiebungsfeld (D-Feld) ist abhängig von E-Feld, Vakuumpermittivität und der relativen Permittivität: D=ε0⋅εr⋅E.
Im Code wird dies umgesetzt, indem das aus E=U/d berechnete E-Feld mit der relativen Permittivität des gewählten Materials und ε0 multipliziert wird.

# Limitierungen
Es kann vorkommen, dass so viele Pfeile versucht werden zu renderen, das der Browser abstürzt

Idealisierte Annahmen: Es wird davon ausgegangen, dass das elektrische Feld überall gleich stark ist (homogenes Feld). Effekte wie Randfelder oder Frequenzabhängigkeiten werden nicht betrachtet.

