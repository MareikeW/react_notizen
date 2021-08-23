Was ist die useReducer-Hooks und wofür ist sie gut?

--> Wird genutzt, wenn der Zustand auf unterschiedliche Arten (actions) verändert werden kann.

--> Gut mit Switch-Statement, um die verschiedenen Aktionen aufzulisten und als default einen Error zu werfen: throw new Error(Unsupported action type: ${action.type})

--> Gut, wenn man die Zustandslogik von der Komponente trennen will, die diese Zustandsveränderungen auslösen.

--> Gut, wenn man mehrere Zustände hat, die sich gemeinsam verändern. Dann kann man diese Zustände in ein gemeinsames Objekt packen.


Wann sollte man useState und wann useReducer benutzen?

--> useState: Wenn man nur einen Zustand hat, oder Zustände, die unabhängig voneinander sind.
--> useReducer: Wenn ein Element aus dem Zustand vom Wert eines anderen Elements aus dem Zustand abhängt, um sich zu aktualisieren.