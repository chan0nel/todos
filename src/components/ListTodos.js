import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux'
import { remove, toggle } from '../app/todosSlice';
import ClearButtons from './ClearButtons';

function ListTodos(props) {
    const list = useSelector(state => state.todos.todos);

    const listItems = list.map(
        (el) => <ItemToDo key={el.key} index={el.key} value={el.value} completed={el.completed}></ItemToDo>
    );
    return (<>
        {listItems.length !== 0 ?
            (<div class="list">
                <ClearButtons></ClearButtons>
                <ul>{listItems}</ul>
            </div>)
            : <p>nothing to do</p>
        }
    </>
    );
}

function ItemToDo(props) {
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

    let className = classNames({
        completed: props.completed,
    })

    return (
        <li className={className}>
            <label htmlFor={props.index}>
                <input onClick={clk} id={props.index} type={"checkbox"} defaultChecked={props.completed}/>
                {props.value}
            </label>
        </li>
    );
}

export default ListTodos;