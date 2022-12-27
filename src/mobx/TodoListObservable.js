import { makeObservable, action, observable, computed } from "mobx";

export class TodoList {
    list = []

    constructor() {
        makeObservable(this, {
            list: observable,
            haveCompleted: computed,
            add: action,
            remove: action,
            removeCompleted: action,
            clear: action,
            toggle: action
        });
        this.list = JSON.parse(localStorage.getItem("todos")) ?? [];
    }

    get haveCompleted(){
        return this.list.some((el) => el.completed);
    }

    add(value) {
        this.list.push({key: Date.now(), value: value, completed: false});
        localStorage.setItem("todos", JSON.stringify(this.list));
    }

    remove(key) {
        this.list = this.list.filter((el) => el.key !== key);
        localStorage.setItem("todos", JSON.stringify(this.list));
    }

    removeCompleted() {
        this.list = this.list.filter(el => !el.completed);
        localStorage.setItem("todos", JSON.stringify(this.list));
    }

    clear() {
        this.list = [];
        localStorage.clear();
    }

    toggle(key) {
        this.list.forEach((el, ind, arr) => arr[ind].completed = el.key === key ? !el.completed : el.completed);
        localStorage.setItem("todos", JSON.stringify(this.list));
    }
}