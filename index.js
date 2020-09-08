function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout);
}

function logWhisper(string) {
  console.log(whisper);
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO!", lowercase = "hello!", loveYouGrandma = "I love you, Grandma.";
  switch (string) {
    case lowercase:
      return "I can\'t hear you!"
    case uppercase:
      return "YES INDEED";
    case loveYouGrandma:
      return "I love you, too."
    default:
      console.log('Grandma might be gone.')
      break;
  }
  return string.toUpperCase();
}
