import { React } from 'react'
import { ClearButtons } from './ClearButtons'
import { ItemTodo } from './ItemTodo'
import { observer } from 'mobx-react'

export const ListTodos = observer(({todos}) => {

    const listItems = todos.list.map(
        (todo) => <ItemTodo key={todo.key} todo={todo} todos={todos}></ItemTodo>
    );

    return (<>
        {
            listItems.length !== 0
            ? (
            <div>
                <ClearButtons todos={todos}/>
                <ul>{listItems}</ul>
            </div>
            )
            : <p>nothing to do</p>
        }
    </>);
});