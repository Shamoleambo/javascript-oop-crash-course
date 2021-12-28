function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = () => {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  };
}

const book1 = new Book("harry mano", "mano", "1999");
const book2 = new Book("o senhor dos trutas", "truta", "1954");

console.log(book1.getSummary());
console.log(book2.getSummary());

console.log(book1);
