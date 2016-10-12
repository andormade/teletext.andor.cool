import Teletext from 'teletext';
import logo from '../graphics/logo.json';
import logo2 from '../graphics/logo-2.json';
import PageElement from './page';
import Footer from './footer';
import TOM from './tom/src/index';
import Header from './header';

export default {
	TOM : TOM,
	PageElement : PageElement,
	Teletext : Teletext,
	Footer : Footer,
	Header : Header,
	logo : logo
}

var width = Math.floor(window.innerWidth / 13);

var page = new PageElement({
	width: width
});

page.addChild([
	new Header({}),
	new TOM.LineElement({}),
	(new TOM.ConditionalElement({ min : 37, max : Infinity }))
		.addChild(new TOM.GraphicElement({ graphic : logo})),
	(new TOM.ConditionalElement({ min : 0, max : 36}))
		.addChild(new TOM.GraphicElement({ graphic : logo2}))
]);

let grid1 = new TOM.TableElement({minColWidth : 20});
let col1 = new TOM.TableColumnElement();
let col2 = new TOM.TableColumnElement();

col1.addChild([
	new TOM.LineElement({}),
	new TOM.TextElement({
		text  : 'About me',
		color : 'black',
		backgroundColor : 'green'
	}),
	new TOM.LineElement({}),
	new TOM.TextElement({
		text : 'Hello, my name is Andor Polgar, I\'m a software engineer from Hungary, currently residing in the United States, and working in the entertainment industry of Hollywood.',
		color: 'yellow'
	}),
	new TOM.TextElement({
		text : 'In my free time I enjoy playing experimental electronic music on my modular synthesizers, and taking photos while traveling with my wife.',
		color: 'green'
	})
]);

col2.addChild(new TOM.LineElement({}));
grid1.addChild(col1).addChild(col2);
page.addChild(grid1);

let grid2 = new TOM.TableElement({minColWidth : 20});
let col3 = new TOM.TableColumnElement();
let col4 = new TOM.TableColumnElement();

col3.addChild(new TOM.LineElement({}));
col4.addChild(new TOM.TextElement({
	text  : 'But what is this teletext obsession?',
	color : 'black',
	backgroundColor : 'yellow'
}));
col4.addChild(new TOM.LineElement({}));
col4.addChild(new TOM.TextElement({
	text : 'Back in 1998, when I was a little boy, I enjoyed looking for graphics and weather reports on the Hungarian and Austrian teletext pages.',
	color: 'cyan'
}));

col4.addChild(new TOM.TextElement({
	text : 'I don\'t know why, but it made a huge impact on me, it even inspired me to learn to read.',
	color: 'yellow'
}));

col4.addChild(new TOM.TextElement({
	text : 'I still get nostalgic whenewer I see a teletext page, it was like the internet for me back then.',
	color: 'cyan'
}));


grid2.addChild(col3).addChild(col4);
page.addChild(grid2);


page.addChild(new TOM.LineElement({}));

page.addChild(new Footer({}));

page.resize(Math.floor(window.innerWidth / 13));
let renderd = page.render();

var cs = new Teletext({
	canvas   : document.getElementById('kanvasz'),
	teletext : renderd,
	cols     : Math.floor(window.innerWidth / 13),
	rows     : renderd.length
});

window.onresize = function() {
	width = Math.floor(window.innerWidth / 13);
	page.resize(width);
	let data = page.render();
	cs.setTeletext(data, data.length, width);
	cs.render();
};

cs.render();
