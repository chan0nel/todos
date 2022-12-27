import { React } from 'react'
import classNames from 'classnames'
import { observer } from 'mobx-react'

export const ItemTodo = observer(({todo, todos}) => {
    const { key, value, completed } = todo;

    const clk = (e) => {
        if (e.detail === 1) todos.toggle(key);
        else if (e.detail === 2) todos.remove(key);
        return
    }

    return (
        <li className={classNames({completed: completed})}>
            <label htmlFor={key}>
                <input type="checkbox" id={key} onClick={clk} defaultChecked={completed}/>
                {value}
            </label>
        </li>
    );
});