import { observer } from 'mobx-react'
import { React } from "react";

export const ClearButtons = observer(({todos}) => {

    const clearAllClick = () => {
        todos.clear()
    }

    const clearCompletedClick = () => {
        todos.removeCompleted()
    }

    return (
        <>
            <button onClick={clearAllClick}>clear all</button>
            <button onClick={clearCompletedClick} disabled={!todos.haveCompleted}>clear completed</button>
        </>
    );
});