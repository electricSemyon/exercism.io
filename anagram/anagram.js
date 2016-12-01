const passed = (a, b) => {
  const aArray = a.split('');
  const bArray = b.split('');

  aArray.map((el, i) => {
    if(bArray.indexOf(el) != -1)
      bArray.splice(i, 1);
  });

  return !(bArray.length > 0);
}

class Anagram {
  constructor(string) {
    this.string = string;
  }
  matches(arr) {
    return arr.filter(el => {
      return passed(this.string, el);
    })
  }
}

module.exports = Anagram;