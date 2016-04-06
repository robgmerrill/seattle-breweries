require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');

talk.intro();
talk.hello('Rob');


goodbye();
