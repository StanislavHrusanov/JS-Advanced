function wordsUppercase(text) {
    text = text.trim().split(/[^a-zA-z\d]+/g).filter(str => str != '').join(', ').toUpperCase();
    console.log(text);
}
wordsUppercase('Hi, how-abc are 7 you?! !');