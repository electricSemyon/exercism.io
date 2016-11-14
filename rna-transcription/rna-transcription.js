class DnaTranscriber {
  toRna(dna) {
    switch(dna) {
      case 'C': return 'G'; break;
      case 'G': return 'C'; break;
      case 'A': return 'U'; break;
      case 'T': return 'A'; break;

      default: throw new Error('Wrong entry data!');
    }
  }
}

module.exports = DnaTranscriber;