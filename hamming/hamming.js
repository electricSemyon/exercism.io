class Hamming {
  constructor() {

  }
  compute(a, b) {
    if(a.length != b.length)
      throw new Error('DNA strands must be of equal length.');

    let counter = 0;

    for(let i = 0; i < a.length; i++)
      if(a[i] !== b[i])
        counter++;
      
    return counter;
  }
}

module.exports = Hamming;