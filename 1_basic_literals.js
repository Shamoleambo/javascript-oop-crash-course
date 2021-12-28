const book1 = {
  title: "book one",
  author: "mano",
  year: "2014",
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  },
};

console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));
