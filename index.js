class OrderedJSON {
	constructor() {
		this.kvMap = new Map();
	}

	/**
	 * Adds a key-value pair to the JSON object.
	 * Supported value types: string, number, boolean, array, JSON, OrderedJSON
	 * @param {*} key The key
	 * @param {*} value The value
	 */
	add(key, value) {
		this.kvMap.set(key, value);
	}

	/**
	 * Removes a key from the JSON object
	 * @param {string} key The key
	 */
	remove(key) {
		this.kvMap.delete(key);
	}

	/**
	 * Returns a JSON string
	 * @returns {string} JSON string
	 */
	getJSON() {
		var stringifiedJSON = '{';
		var l = this.kvMap.size;
		var i = 0;

		this.kvMap.forEach((v, k) => {
			i++;

			stringifiedJSON += `"${k}":`;

			switch (typeof v) {
				case 'string':
					stringifiedJSON += `"${v}"`;
					break;
				case 'number':
					stringifiedJSON += `${v}`;
					break;
				case 'boolean':
					stringifiedJSON += `${v}`;
					break;
			}

			if (v instanceof OrderedJSON) {
				stringifiedJSON += v.getJSON();
			} else if (v instanceof Array) {
				stringifiedJSON += JSON.stringify(v);
			} else if (v instanceof Object && !(v instanceof OrderedJSON)) {
				var tmp = new OrderedJSON();

				for (var _vKey in v) {
					tmp.add(_vKey, v[_vKey]);
				}

				stringifiedJSON += tmp.getJSON();
			}

			if (l !== i) {
				stringifiedJSON += ',';
			}
		});

		stringifiedJSON += '}';
		return stringifiedJSON;
	}
}

module.exports = OrderedJSON;