import { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from 'classnames';
import { add } from "../app/todosSlice";

function InputTodo() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const Change = (e) => {
        setText(e.target.value);
    }

    const addClick = (e) => {
        e.preventDefault();
        if(text !== '')
            dispatch(add({value: text}))
    }
    const className = classNames({
        unable: text === ''
    })

    return (
        <form>
            <input className={className} id={"text"} onChange={Change}/>
            <button onClick={addClick}>add</button>
        </form>
    );
}

export default InputTodo;