const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('eventRaised', () => console.log('yes working!'));

emitter.emit('eventRaised');
