class FoodChain {
  constructor() {
    this.creatures = [
      'fly',
      'spider',
      'bird',
      'cat',
      'dog',
      'goat',
      'cow',
      'horse'
    ];
    this.extras = {
      spider: "It wriggled and jiggled and tickled inside her.",
      bird: "How absurd to swallow a bird!",
      cat: "Imagine that, to swallow a cat!",
      dog: "What a hog, to swallow a dog!",
      goat: "Just opened her throat and swallowed a goat!",
      cow: "I don't know how she swallowed a cow!",
      horse: "She's dead, of course!"
    }
  }
  verse(n) {
    const creature = this.creatures[n-1];
    const extra = this.extras[creature];

    const lines = [];
    lines.push('I know an old lady who swallowed a ' + creature + '.');

    if (extra) {
      lines.push(extra);
    }

    if (creature != 'horse') {
      for (let i = n - 1; i > 0; i--) {
        const predator = this.creatures[i];
        const prey = this.creatures[i-1];

        let line = 'She swallowed the ' + predator + ' to catch the ' + prey;

        if (prey == 'spider') 
          line += ' that wriggled and jiggled and tickled inside her';

        lines.push(line +'.');
      }

      lines.push("I don't know why she swallowed the fly. Perhaps she'll die.");
    }

    return lines.join("\n") + '\n';
  }
  verses(first, last) {
    let song = '';
    
    for (let i=first; i <= last; i++) 
      song += this.verse(i) + '\n';

    return song;
  }
}

module.exports = FoodChain;
