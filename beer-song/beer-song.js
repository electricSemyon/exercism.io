const nonEmptyTemplate = (num) => {
  return `${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottles of beer on the wall.\n`
}
const emptyTemplate = () => {
  return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.\n`
}

const gen = (num) => num <= 0 ? emptyTemplate() : nonEmptyTemplate(num);

class BeerSong {
  sing(a, b) {
    let stirng; 

    for(let i = a; i <= b; i++) 
      string  += gen(i);

    return string;
  }

  verse(a) {
    return gen(a);
  }
}

module.exports = BeerSong;