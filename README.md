# OrderedJSON

As the name suggests, OrderedJSON keeps the order in which key-value pairs were added. This is important for use-cases such as hashing or signing a JSON object.

## Installing

```sh
npm install --save @truewinter/orderedjson
```

## Usage

```js
var json = new OrderedJSON();
json.add('test', 'testing');
json.add('1234', 5678);

console.log(json.getJSON());
```

**Imporant**: Only the following value types are supported: string, number, boolean, array, JSON, OrderedJSON.