const bookProtos = {
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  },
  getYears() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// const book1 = Object.create(bookProtos);
// book1.title = "manos e manas";
// book1.author = "mano";
// book1.year = "2014";

const book1 = Object.create(bookProtos, {
  title: { value: "manos e menas" },
  author: { value: "mano" },
  year: { value: "2013" },
});

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getYears());
