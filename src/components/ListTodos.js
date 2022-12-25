import { memo } from 'react'
import { useSelector } from 'react-redux'
import { ClearButtons } from './ClearButtons'
import { ItemTodo } from './ItemTodo';

export const ListTodos = memo(() => {
    const list = useSelector(state => state.todos.todos);

    const listItems = list.map(
        (el) => <ItemTodo key={el.key} index={el.key} value={el.value} completed={el.completed}></ItemTodo>
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
});