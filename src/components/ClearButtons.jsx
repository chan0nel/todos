import { React, memo } from "react";
import { useDispatch } from "react-redux";
import { clear, removeComleted } from "../app/todosSlice";

export const ClearButtons = memo(() => {
    const dispatch = useDispatch()

    const clearAllClick = () => {
        dispatch(clear());
    }

    const clearCompletedClick = () => {
        dispatch(removeComleted());
    }

    return (
        <>
            <button onClick={clearAllClick}>clear all</button>
            <button onClick={clearCompletedClick}>clear completed</button>
        </>
    );
});