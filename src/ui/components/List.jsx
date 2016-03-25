import {DataComponent} from 'reangulact';

export default class UiList extends DataComponent {

    static DEFAULTS = {
        emptyMessage: 'There is no data.'
    };

    getEmptyData() {

        console.log('EmptyData');

        return false

    }

    static TEMPLATE = (
        <div>
            <ul class='list-group' if=':data'>
                <li class='list-group-item' each='datum of :data'>
                    :datum.caption
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