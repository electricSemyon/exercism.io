const specChars = '!@#$%^&*()_+-=".,/\|'.split('');

const isShout = (string) => {
  const arr = string.split('');
  let count = 0;

  arr.map(el => {
    if(isNaN(el) && !specChars.includes(el)) {
      if(el === el.toUpperCase())
        count++;
    }
  })

  return string.length - count < string.length / 2 ? true : false;
}

const isQuestion = (string) => {
  if(string[string.length - 1] === '?') 
    return true;
  else 
    return false;
}

class Bob {
  hey(string) {
    if(!isQuestion(string)) {
      if(isShout(string))
        return 'Whoa, chill out!';
      else 
        return 'Whatever.';
    } else {
      return 'Sure.';
    }
  }
}

module.exports = Bob;