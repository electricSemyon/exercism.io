const isUnique = (char, word) => {
  const arr = ar(word);
  const count = arr.filter(el => el === char);

  return count > 1 ? false : true;
}

const ar = (string) => string.split('');

class Izogram {
  constructor(word) {
    this.word = word;
  }
  isIsogram() {
    const arr = ar(this.word);
    let is = true;

    arr.map(el => {
      if(!isUnique)
        is = false;;
    });
    return is;
  }
}

module.exports = Izogram;