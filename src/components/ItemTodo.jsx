import { React, memo } from 'react'
import { useDispatch } from 'react-redux'
import { remove, toggle } from '../app/todosSlice';
import classNames from 'classnames';

export const ItemTodo = memo(({index, value, completed}) => {
    const dispatch = useDispatch();

    const clk = (e) => {
        if (e.detail === 1) dispatch(toggle({key: index}))
        else if (e.detail === 2) dispatch(remove({key: index}))
        return
    }

    return (
        <li className={classNames({completed: completed})}>
            <label htmlFor={index}>
                <input type="checkbox" id={index} onClick={clk} defaultChecked={completed}/>
                {value}
            </label>
        </li>
    );
});