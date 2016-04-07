import {Component} from 'reangulact';

export default class UiCheckbox extends Component {

    change(e) {

        const value = e.currentTarget.checked;

        this.hook('valueChanged', value);

    }

    static TEMPLATE = (
        <label class='c-input c-checkbox'>
            <input
                type='checkbox'
                checked=':value'
                change=':change'
                />
            <span class='c-indicator'></span>
        </label>
    );
}