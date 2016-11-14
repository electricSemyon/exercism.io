class Year {
  constructor(year) {
    this.year = year;
  }
  isLeap() {
    const year = this.year;
    return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0 ? true : false; 
  }
}

module.exports = Year;