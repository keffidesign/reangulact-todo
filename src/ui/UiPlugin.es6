import {Plugin} from 'applugins';
import {initialize as initializeR} from 'reangulact-r';
import {initialize as initializeNg, prepare as prepareNg} from 'reangulact-ng';
const {bootstrap} = ng.platform.browser;
import TodosPage from '../todos/TodosPage.jsx';


window.getPlatform = function () {

    const platform = location
        .search
        .slice(1)
        .split('&')
        .map(s => s.split('='))
        .find(p => p[0] === 'platform');

    return platform ? platform [1] : 'react';

};

if (getPlatform() === 'react') {

    initializeR();

    ReactDOM.render(React.createElement(TodosPage), document.getElementById('root'));

} else {

    initializeNg();

    bootstrap(prepareNg(TodosPage));

}
