function WordsUppercase(word) {
  return word.match(/\w+/g).join(", ").toUpperCase();
}

WordsUppercase("Hi, how are you?");
