import {Plugin} from 'applugins';
import {initialize as initializeR} from 'reangulact-r';
import {initialize as initializeNg, prepare as prepareNg} from 'reangulact-ng';
const {bootstrap} = ng.platform.browser;
import TodosPage from './TodosPage.jsx';

if (sessionStorage.getItem('platform') === 'react') {

    initializeR();

    ReactDOM.render(React.createElement(TodosPage), document.getElementById('root'));

} else {

    initializeNg();

    bootstrap(prepareNg(TodosPage));

}
