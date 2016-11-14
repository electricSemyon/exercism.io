const gigasecond = Math.pow(10, 9);

class Gigasecond {
  constructor(_date) {
  	this._date = _date;
  }

  date() {
  	const t = this._date;
    t.setSeconds(gigasecond);
  	return this._date;
  }
}

module.exports = Gigasecond;