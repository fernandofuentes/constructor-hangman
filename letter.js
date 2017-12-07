function Letter(letter) {
  this.letter = letter;
  this.guessed = false;
}

Letter.prototype.disply = function() {
  if (this.guessed === true) {
    return this.letter;
  } else {
    return ("_");
  }
};

module.exports = Letter;