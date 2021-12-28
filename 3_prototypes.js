function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}.`;
};
Book.prototype.getYears = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} old.`;
};
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const book1 = new Book("harry mano", "mano", "1999");
const book2 = new Book("o senhor dos trutas", "truta", "1954");

// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(book1.getYears());
// console.log(book2.getYears());

// console.log(book1);
// console.log(book2);

console.log(book1);
book1.revise("2000");
console.log(book1);
