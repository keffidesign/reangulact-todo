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

        localStorage.setItem(localStorage.length, this.get('value'));

        this.put('value', ' ', () => this.reloadTodos());

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
            <ui.Content
                //key=':todos.length'
                >
                <ui.List
                    //if=':todos'
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