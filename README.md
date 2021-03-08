# DHT11 Einführung
## ~avatar avatar @unplugged

Dies ist eine Einführung für das Verwenden des ``||DHT11:DHT11 ||``. 


## ~ @unplugged
Der DHT11 ist ein weit verbreiteter Temperatur- und Luftfeuchtigkeitssensor. 
Er kann mit 3.3V betrieben werden und benötigt neben der Spannungsversorgung (GND und VCC) nur einen Signalanschluss.
Die Variante von Groove besitzt noch einen 4. Anschluss der aber keine Daten übermittelt (NC - not connectet).

## Schritt 1: DHT11 anschließen und im Calliope einstellen
Um den Sonsor nutzen zu können, müssen wir eine neue Bibiliothek einbinden. 
Unter ``||advanced:Fortgeschritten ||`` findest du ganz unten den Block ``||advanced: Erweiterungen||``. 
Den wählst du aus und in dem neuen Fenster suchst du das Bild des DHT11 aus oder suchst ihn indem du es oben ein Suchfeld eingibst. 
Den wählst du aus und in dem neuen Fenster suchst du das Bild des DHT11 aus oder suchst ihn indem du es oben ein Suchfeld eingibst. 
Nachdem du auf das Bild geklickt hast, wird die Bibiliothek eingebunden.
Nun müssen wir als erstes einstellen, an welchen Signal-Pin der Sensor angeschlossen wurde. Hierfür benuten wir aus den ``||DHT11: DHT11||``-Bereich den Block ``||DHT11: DHT11 an Pin C16||``. 

```blocks
DHT11.setPin(DigitalPin.C16)
```