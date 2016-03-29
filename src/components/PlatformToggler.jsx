import {Component} from 'reangulact';

export default class UiPlatformToggler extends Component {

    getStyle() {

        const style = {
            'z-index': 9999,
            'top': '10px',
            'right': '10px',
            'position': 'absolute',
            'border': 'none',
            'border-radius': '5px',
            'padding': '6px',
            'width': '100px',
            'color': (this.get('platform') === 'react' ? '#61dafb' : '#fff'),
            'text-transform': 'uppercase',
            'background': (this.get('platform') === 'react' ? '#2D2D2D' : '#e03237')
        };

        return style;

    }

    getCaption() {

        return this.get('platform');

    }

    getPlatform() {

        const platform = sessionStorage.getItem('platform');

        return ['react', 'angular'].find(p => p !== platform);

    }

    click() {

        const platform = this.get('platform');

        sessionStorage.setItem('platform', platform);

        location.search = ``;

    }

    static TEMPLATE = (
        <button
            style=':style'
            click=':click'
            >
            <block if=':caption'>:caption</block>
        </button>
    );
}