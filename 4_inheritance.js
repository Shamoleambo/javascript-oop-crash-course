function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}.`;
};

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine("SUPER MAG", "manolo", "1998", "july");

console.log(mag1);
