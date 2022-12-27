import { React, useState } from "react";
import classNames from "classnames";
import { observer } from 'mobx-react'

export const InputTodo = observer(({todos}) => {
    const [text, setText] = useState('');

    const change = (e) => {
        setText(e.target.value);
    }

    const addClick = () => {
        if(text !== '')
            todos.add(text);
    }

    return (
        <>
            <input className={classNames({unable: text === ''})} onChange={change}/>
            <button onClick={addClick}>add</button>
        </>
    );
});