const isNumber = (char) => !isNaN(char) && char != ' ';

const isBad = (number) => {
	const l = number.toString().length;
	return !((l === 10) || (l === 11 && number.toString()[0] === '1'));
}

const rowise = (number) => {
	const arr = number.toString().split('');
	const deform = arr.filter(el => {
		return isNumber(el);
	});
	return deform.join('');
}

class PhoneNumber {
  constructor(num) {
  	this.num = num;
  }

  number() {
  	const row = rowise(this.num);
  	console.log(row)
  	return isBad(row) ? '0000000000' : row;
  }
}

module.exports = PhoneNumber;