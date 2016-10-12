import TextElement from './tom/src/textElement';

export default class Header extends TextElement {
	constructor() {
		super({text: ' ', color: 'white'});
	}

	resize(width) {
		super.resize(width);
		if (this.width < 40) {
			this.text = 'P100 100 ANDOR.COOL';
		}
		else {
			this.text = 'P100 100 ANDOR.COOL ' + new Date().toDateString();
		}
	}
}
