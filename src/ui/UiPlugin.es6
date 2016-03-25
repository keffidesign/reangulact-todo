import {Plugin} from 'applugins';
import {bootstrap} from  './React.es6';
import {bootstrapNg} from  './Angular.es6';

window.getPlatform = function () {

    return location
        .search
        .slice(1)
        .split('&')
        .map(s => s.split('='))
        .find(p => p[0] === 'platform')[1];

}

export default class UiPlugin extends Plugin {

    async init() {

        const pages = await this.event('ui://registerPages').promise();

        console.log('getPlatform()', getPlatform());

        getPlatform() === 'react' ? bootstrap(pages) : bootstrapNg(pages);

        return super.init();

    }

    onUi_navigate({path}, cb) {

        window.location.hash = '' + path.join('/');

        return true;

    }

}
