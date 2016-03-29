import * as ui from '../ui';
import PlatformToggler from './components/PlatformToggler.jsx';

export default class TodosPage extends ui.Component {

    init() {

        this.reloadTodos();

        super.init();

    }

    reloadTodos() {

        this.put('todos', Array.prototype.map.call(localStorage.valueOf(), (caption, id) => ({id: `${id}`, caption})));

    }

    clear() {

        localStorage.clear();

        this.reloadTodos();

    }

    create() {

        const value = this.get('value');

        if (!value) return;

        localStorage.setItem(localStorage.length, value);

        this.put('value', '', this.reloadTodos());

    }

    change(value) {

        this.put('value', value);

    }

    static TEMPLATE = (
        <div>
            <PlatformToggler/>
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