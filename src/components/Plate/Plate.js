import template from './Plate.handlebars';

export class Plate {
    constructor(parent) {
        this.parent = parent;
    }


    render() {
        this.parent.innerHTML += template({
            person: 'Миша'
        });
    }
}
