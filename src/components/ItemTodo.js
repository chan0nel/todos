import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { remove, toggle } from '../app/todosSlice';
import classNames from 'classnames';

export const ItemTodo = memo((props) => {
    const dispatch = useDispatch();

    const clk = (e) => {
        switch(e.detail){
            case 1:
                dispatch(toggle({key: props.index}))
                return;
            case 2:
                dispatch(remove({key: props.index}))
                return;
            default:
                return;
        }
    }

    return (
        <li className={classNames({completed: props.completed})}>
            <label htmlFor={props.index}>
                <input onClick={clk} id={props.index} type="checkbox" defaultChecked={props.completed}/>
                {props.value}
            </label>
        </li>
    );
});