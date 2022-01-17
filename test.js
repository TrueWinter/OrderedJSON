const OrderedJSON = require('./index.js');

var json = new OrderedJSON();
json.add('test', 'testing');
json.add('1234', 5678);

var json2 = new OrderedJSON();
json2.add('foo', 'bar');
json2.add('bar', 'foo');
json.add('OrderedJSON', json2);

var arr = 'what does the fox say'.split(' ');
json.add('array', arr);

var j = { never: 'gonna', give: 'you', up: true };
json.add('json', j);

console.log(json.getJSON());

const expectedOutput = '{"test":"testing","1234":5678,"OrderedJSON":{"foo":"bar","bar":"foo"},"array":["what","does","the","fox","say"],"json":{"never":"gonna","give":"you","up":true}}';
if (json.getJSON() === expectedOutput) {
	console.log('getJSON() matches expected output');
} else {
	throw new Error('getJSON() does not match expected output');
}