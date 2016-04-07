import {Component} from 'reangulact';

export default class UiPlatformToggler extends Component {

    getStyle() {

        return {
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

    }

    getPlatform() {

        return sessionStorage.getItem('platform') || 'angular';

    }

    click() {

        sessionStorage.setItem('platform', ['react', 'angular'].find(p => p !== this.get('platform')));

        location.reload();

    }

    static TEMPLATE = <button style=':style' click=':click'>:platform</button>
}