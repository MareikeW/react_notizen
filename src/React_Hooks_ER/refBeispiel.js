/* Von Scrimba Frontend Career Path
Eine Todo-App, in der über ein Textfeld eine neue Aufgabe formuliert und über einen anschließenden Buttonklick angelegt werden kann.
Wenn man manuell den Button klickt, bleibt dieser fokussiert. 
Mit useRef-Hook kann man es so einstellen, dass nach dem Buttonklick das Textfeld automatisch wieder fokussiert wird. */

import React, {useState, useRef} from "react";

function RefBeispiel() {
    const [newTodoValue, setNewTodoValue] = useState("");
    const [todosList, setTodosList] = useState([]);
    const inputRef = useRef(null); // initialisiert mit null, aber nach Klick auf Button wird es zu einem Objekt mit dem 
    // key "current" und als Wert das <input />-Element mit seinen Attributen.
    
    function handleChange(event) {
        setNewTodoValue(event.target.value);
    }
    
    function addTodo(event) {
        event.preventDefault();
        setTodosList(prevTodosList => [...prevTodosList, newTodoValue]);
        setNewTodoValue("");
        console.log(inputRef); // {current: <input type="text" name="todo" value="Hallo" spellcheck="false" data-ms-editor="true">}
        inputRef.current.focus(); // fokussiert automatisch Textfeld nach jedem Klick auf den Button
    }
    
    const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>);
    
    return (
        <div className="component">
            <form>
                <input ref={inputRef} type="text" name="todo" value={newTodoValue} onChange={handleChange}/>
                <button onClick={addTodo}>Add todo item</button>
            </form>
            {allTodos}
        </div>
    )
}

export default RefBeispiel;