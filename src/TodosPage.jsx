import * as ui from './components';

export default class TodosPage extends ui.Component {

    static DEFAULTS = {dataChanged: 0};

    getTodo(id) {

        return JSON.parse(localStorage.getItem(id));

    }

    updateTodo(id, todo) {

        todo ? localStorage.setItem(id, JSON.stringify(todo)) : localStorage.removeItem(id);

    }

    clear() {

        localStorage.clear();

        this.put('dataChanged', this.get('dataChanged') + 1);

    }

    create() {

        const todo = {
            id: `${Date.now()}`,
            caption: this.get('value'),
            checked: false
        };

        this.updateTodo(todo.id, todo);

        this.put('value', '');

    }

    change(value) {

        this.put('value', value);

    }

    getTodos() {

        return Object.keys(localStorage).map(k => this.getTodo(k));

    }

    getIsDisabled() {

        return !this.get('value');

    }

    toggleDone(id, value) {

        const todo = this.getTodo(id);

        this.updateTodo(id, {...todo, checked: value});

        this.put('dataChanged', this.get('dataChanged') + 1);

    }

    deleteTodo(id) {

        console.log('deleteTodo', id);

        this.updateTodo(id, null);

        this.put('dataChanged', this.get('dataChanged') + 1);

    }

    static TEMPLATE = (
        <div>
            <ui.Header
                caption='Todos'
                />
            <ui.Content>
                <ui.List
                    data=':todos'
                    check=':toggleDone'
                    delete=':deleteTodo'
                    />
                <ui.Input
                    caption='Name'
                    value=':value'
                    valueChanged=':change'
                    />
                <ui.Button
                    caption='Create'
                    mode='primary'
                    disabled=':isDisabled'
                    click=':create'
                    />
                <ui.Button
                    caption='Clear all'
                    click=':clear'
                    />
            </ui.Content>
        </div>
    );

}