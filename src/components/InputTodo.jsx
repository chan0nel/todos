import { React, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../app/todosSlice";
import classNames from "classnames";

export const InputTodo = memo(() => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const change = (e) => {
        setText(e.target.value);
    }

    const addClick = () => {
        if(text !== '')
            dispatch(add({value: text}))
    }

    return (
        <>
            <input className={classNames({unable: text === ''})} onChange={change}/>
            <button onClick={addClick}>add</button>
        </>
    );
});