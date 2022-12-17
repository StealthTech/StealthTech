// @ts-expect-error Пока не разобрались!
import template from './Plate.handlebars';

export class Plate {
    private parent: Element;

    constructor(parent: Element) {
        this.parent = parent;
    }

    render() {
        this.parent.innerHTML += template({
            person: 'Миша'
        });
    }
}
