Was sind Hooks?
- Hooks sind Funktionen, mit denen man sich soz. in React Zustände und Lebenszyklus-Features einhaken kann.
- Sie funktionieren nur innerhalb von Funktionskomponenten.


Die fünf häufigsten Hooks: 

1. React.useState
2. React.useEffect
3. React.useContext
4. React.useRef
5. React.useReducer

1. React.useState:
- Wenn man einen lokalen Zustand innerhalb einer Funktionskomponente anlegen möchte, bentuzt man
    die useState-Hook
- React erhält diesen lokalen Zustand bei re-renders.
- useState gibt einen Array mit einer Variable und einer Funktion zurück:
    a) In der Variable wird der aktuelle Zustand gespeichert.
    b) Mit der Funktion kann diese Zustandsvariable aktualisiert werden.
- Man führt eine Array-Destrukturierung durch, um so den beiden Elementen neue Namen zu geben: z. B. [count, setCount]
- useState hat ein Argument, und zwar den initial state (Anfangszustand).
- Der Anfangszustand wird nur beim ersten Rendern benutzt.


2. React.useEffect:
- useEffect wird für Änderungen im Lebenszyklus benutzt.
- In Klassenkomponenten würde man die Logik auf verschiedene Lifecycle-Methoden verteilen (componentDidMount, componentDidUpdate, componentWillUnmount). Hier braucht man nur useEffect.
- Man übergibt der Hook eine Funktion, die nach jedem Mount bzw. Update der Komponente ausgeführt wird.
- Optional kann man hier auch noch eine Cleanup-Funktion zurückgeben


3. React.useContext:
- Context wird benutzt, um Daten oder Funktionen, die global zugänglich sein sollen, an einem Ort zu speichern und dann von jeder Komponente im React-Baum aus direkt genutzt werden können.
- Alternative wäre prop-Drilling, wo man über mehrere Hierarchie-Ebenen diese Daten weiter nach unten gibt, auch wenn Zwischenkomponenten, diese gar nicht selbst benötigen.
- Bsp.: Themes und User-Authentifizierung

4. React.useRef
- Damit kann man Werte über die komplette Lebensspanne einer Komponente erhalten
- Anwendungsbeispiel: Man nimmt eine DOM Node und macht dann notwendige Änderungen darin
- Man benutzt refs am besten für diese 3 Dinge:
    a) Fokussierung oder Media
    b) zur Auslösung von Animationen
    c) zur Interaktion mit DOM-Bibliotheken
- Siehe auch Beispiel in refBeispiel.js: Textfeld soll nach jedem Buttonklick automatisch wieder fokussiert werden.


5. React.useReducer
- Alternative zu useState.
- Gibt einen state und ein dispatch zurück [state, dispatch]
- Alle Zustandsvariablen leben in "state" und alle actions, die wir an den Reducer schicken wollen,
    leben in "dispatch".
- useReducer() nimmt zwei Parameter: 1. reducer-Funktion, 2. initialer Zustand

           reducer-Funktion besteht aus:  state (current state); action (action, die ausgeführt werden soll)
- const [state, dispatch] = useReducer((state, action) => {
    ...
    }, {
        count: 0 // initialer Zustand
    })
- useReducer ist gut, wenn man mehrere ähnliche Actions hat, wie z. B. count + 1; count - 1; count / 2 usw. Dann hat man alles zusammen in einer Funktion.
- Beispiel: reducerBeispiel.js


Was versteht man unter Lazy State Initialization?
- Anstelle eines Anfangswerts wird in useState eine Funktion angegeben, die den Anfangswert nach Aufruf zurückgibt.
- Das passiert dann nicht bei jedem Reredern, sondern nur beim allerersten Rendering der Komponente.


Was ist eine Custom Hook?

- Custom Hook ist eine Funktion außerhalb einer Komponente, die Logik bereithält, um eine Aufgabe zu lösen.
- Die Logik kann so angepasst werden, dass die Funktion von jeder Komponente gerufen und genutzt werden kann.


Was ist der Unterschied zwischen "lift state" (Zustand anheben) und "colocate state" (Zustand senken)?

- lift state: Wenn zwei oder mehr Geschwisterkomponenten denselben Zustand brauchen, dann hebt man diesen Zustand soweit im Komponentenbaum hoch, bis eine gemeinsame Elternkomponente gefunden wurde.

- colocate state: Ein Zustand wurde weiter oben im Komponentenbaum angelegt, weil mehrere Kindkomponenten diesen brauchten. Wenn jetzt eine oder mehrere Kindkomponenten wegfallen und der Zustand z. B. nur noch für eine Komponente gebraucht wird, senkt man den Zustand runter in diese Komponente, wo er dann "lebt". So muss der Zustand nicht mehr über props heruntergegeben werden.


Was ist der Unterschied zwischen "managed state" und "derived state"?
1. Managed State: Ein Zustand, den man explizit managen muss.
2. Derived State: Ein Zustand, der auf Basis eines anderen Zustands berechnet wird.