const toArr = (string) => string.replace(/\n/g, " ").split(' ');

class Words {
  count(words) {
    let obj = {};

    toArr(words).map(el => {
      if(Object.keys(obj).includes(el))
        obj[el] = obj[el] + 1;
      else
        obj[el] = 1;
    });

    return obj;
  }
}

module.exports = Words;