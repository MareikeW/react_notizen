/* Beispiel von "Learn useCallback in 8 Minutes" 
- https://www.youtube.com/watch?v=_AyFP5s69N4&ab_channel=WebDevSimplified */

// Auf Button-Klick wird das Theme zwischen schwarz und weiß getoggled.
// Über das Inputfeld kann man die Anfangszahl der Zahlenreihe angeben.
// Es werden drei aufeinanderfolgende Zahlen angezeigt.
// Problem ohn useCallback: getItems() wird auch bei jedem Klick auf den Button gerufen, obwohl sich die 
// Zahlen nicht verändert haben. Grund: UseCallbackExample-Komponente wird jedes Mal neu gerendert.
import React, { useEffect, useState, useCallback } from "react";

function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems())
        console.log("Updating Items")
    }, [getItems]);

    return items.map(item => <div key={item}>{item}</div>)
}

function UseCallbackExample() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    /* vorher ohne useCallback
    const getItems = () => {
        return [number, number + 1, number + 2];
    }
    */
    // nachher mit useCallback: Die getItems-Funktion wird nur noch gerufen, 
    // wenn number sich ändert und nicht, wenn auf den Button geklickt wird.
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    }

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={event => setNumber(parseInt(event.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle theme
            </button>
            <List getItems={getItems} />
        </div>
    )
}

export default UseCallbackExample;