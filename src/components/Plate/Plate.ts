// @ts-expect-error Пока не разобрались!
import template from './Plate.handlebars';

// @ts-expect-error Пока не разобрались!
import Image from '../../assets/education.png';

import './Plate.css';

export class Plate {
    private parent: Element;

    constructor(parent: Element) {
        this.parent = parent;
    }

    render() {
        console.log(Image);
        this.parent.innerHTML += template({
            person: 'Миша',
            imageSrc: Image,
        });
    }
}
