

exports.min = function min(array) {
	if (array) {
		if (array.length) {
			return Math.min.apply(null, array);
		} else {
			return 0;
		}
	} else {
		return 0;
	}
}



exports.max = function max(array) {
	if (array) {
		if (array.length) {
			return Math.max.apply(null, array);
		} else {
			return 0;
		}
	} else {
		return 0;
	}
}

exports.avg = function avg(array) {
	if (array) {
		if (array.length) {
			let result = array.reduce((x, y) => {
				return x + y
			})
			return result / array.length;
		} else {
			return 0;
		}
	} else {
		return 0;
	}
}

