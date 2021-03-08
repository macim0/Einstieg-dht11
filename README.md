# DHT11 Einführung
## ~avatar avatar @unplugged

Dies ist eine Einführung für das Verwenden des ``||DHT11:DHT11 ||``. 


## ~ @unplugged
Der DHT11 ist ein weit verbreiteter Temperatur- und Luftfeuchtigkeitssensor. 
Er kann mit 3.3V betrieben werden und benötigt neben der Spannungsversorgung (GND und VCC) nur einen Signalanschluss.
Die Variante von Groove besitzt noch einen 4. Anschluss der aber keine Daten übermittelt (NC - not connectet).


## Schritt 1: DHT11 anschließen und im Calliope einstellen
Um den Sonsor nutzen zu können, müssen wir eine neue Bibiliothek einbinden. 
Unter ``||advanced:Fortgeschritten ||`` findest du ganz unten den Block ``||advanced:Erweiterungen ||``. 
Den wählst du aus und in dem neuen Fenster suchst du das Bild des DHT11 aus oder suchst ihn indem du es oben ein Suchfeld eingibst. 
Nachdem du auf das Bild geklickt hast, wird die Bibiliothek eingebunden.
Nun müssen wir als erstes einstellen, an welchen Signal-Pin der Sensor angeschlossen wurde. Hierfür benuten wir aus den ``||DHT11: DHT11||``-Bereich den Block ``||DHT11: DHT11 an Pin C16||``. 
```blocks
DHT11.setPin(DigitalPin.C16)
```

## Schritt 2: Ausgabe vorbereiten
Nun kümmern wir uns um die Ausgabe. Hierfür benötigen wir eine Anzeigefunkion (``||basic: zeige Text||``). 
Außerdem nutzen wir aus dem Bereich ``||text:Text ||`` (welches wir im unter ``||advanced:Fortgeschritten ||`` finden) den Block ``||text:verbinde ||``, 
da wir an den Messwert noch eine Einheit anhängen wollen. Die fügen wir gemeinsam in den Dauerhaft-Block ein.
```blocks
DHT11.setPin(DigitalPin.C16)
basic.forever(function () {
    basic.showString(" " + "%")
    basic.showString(" " + "C")
})
```

## Schritt 3: Messwert anzeigen
Abschließend holen wir uns aus dem ``||DHT11:DHT11 ||``-Bereich die beiden Messwerte (``||DHT11: prozentuale Luftfeuchtigkeit||`` und ``||DHT11: Temperatur in °C||``) und schieben Sie in den vorderen Bereich der Verbinde-Funktion.
```blocks
DHT11.setPin(DigitalPin.C16)
basic.forever(function () {
    basic.showString("" + DHT11.humidity() + "%")
    basic.showString("" + DHT11.temperature() + "C")
})
```



> Diese Seite bei [https://macim0.github.io/einstieg-dht11/](https://macim0.github.io/einstieg-dht11/) öffnen

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/macim0/einstieg-dht11** suchen und importieren

## Dieses Projekt bearbeiten ![Build Status Abzeichen](https://github.com/macim0/einstieg-dht11/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/macim0/einstieg-dht11** ein und klicke auf Importieren

## Blockvorschau

Dieses Bild zeigt den Blockcode vom letzten Commit im Master an.
Die Aktualisierung dieses Bildes kann einige Minuten dauern.

![Eine gerenderte Ansicht der Blöcke](https://github.com/macim0/einstieg-dht11/raw/master/.github/makecode/blocks.png)

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
