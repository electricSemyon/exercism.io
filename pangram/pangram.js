const alphabets = {
	english: 'abcdefghijklmnopqrstuvwxyz',
	german:  'abcdefghijklmnopqrstuvwxyzäöüß'
}

class Pangram {
  constructor(string) {
  	this.string = string;
  }
  isPangram() {
  	const keys = Object.keys(alphabets);
  	let is = false;

  	keys.map(el => {
  		const curr = alphabets[el].split('');

  		this.string.split('').map(_el => {
  			const index = curr.indexOf(_el);

	  		if (index > -1) {
			    curr.splice(index, 1);
			}
  		})

  		is = !(curr.length > 0);
  	})

  	return is;
  }
}

module.exports = Pangram;
