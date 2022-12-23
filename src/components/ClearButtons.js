import { useDispatch } from "react-redux";
import { clear, removeComleted } from "../app/todosSlice";

function ClearButtons() {
    const dispatch = useDispatch()
    const clearAllClick = () => {
        dispatch(clear());
    }
    const clearCompletedClick = () => {
        dispatch(removeComleted());
    }

    return (
        <>
            <button id="clearAll" onClick={clearAllClick}>clear all</button>
            <button id="clearCompl" onClick={clearCompletedClick}>clear completed</button>
        </>
    );
}

export default ClearButtons;