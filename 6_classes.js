class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }

  getAge() {
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old.`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static whatIsThis() {
    return "a book";
  }
}

const book1 = new Book("manos e menas", "mano", "2013");

// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.getAge());
// book1.revise("2020");

// console.log(book1);
console.log(Book.whatIsThis());
