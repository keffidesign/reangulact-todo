import {DataComponent} from 'reangulact';
import Checkbox from './Checkbox.jsx';

export default class UiList extends DataComponent {

    static DEFAULTS = {
        emptyMessage: 'There is no data.'
    };

    getCheckItem() {

        const id = this.get('datum.id');

        return (value) => this.hook('check', id, value)

    }

    deleteItem(e, dataset) {

        this.hook('delete', e.currentTarget.dataset.id);

    }


    static TEMPLATE = (
        <div>
            <ul class='list-group' if=':data'>
                <li class='list-group-item form-control-success' each='datum of :data'>
                    <Checkbox
                        value=':datum.checked'
                        valueChanged=':checkItem'
                        />
                    :datum.caption
                    <button
                        type='button'
                        class='close'
                        aria-label='Close'
                        data-id=':datum.id'
                        click=':deleteItem'
                        >
                        <span aria-hidden='true'>&times;</span>
                    </button>
                </li>
                <else if=':error'>
                    <span>:(Error: (:error.message))</span>
                    <else>
                        <span>:emptyMessage</span>
                    </else>
                </else>
            </ul>
        </div>
    );

}

