import * as ui from './components';

export default class TodosPage extends ui.Component {

    clear() {

        localStorage.clear();

        this.put('todos', []);

    }

    create() {

        localStorage.setItem(`${localStorage.length}`, this.get('value'));

        this.put('value', '');

    }

    change(value) {

        this.put('value', value);

    }

    getTodos() {

        return Array.prototype.map.call(localStorage, (caption, id) => ({id, caption}));

    }

    getIsDisabled() {

        return !this.get('value');

    }

    static TEMPLATE = (
        <div>
            <ui.Header
                caption='Todos'
                />
            <ui.Content>
                <ui.List
                    data=':todos'
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