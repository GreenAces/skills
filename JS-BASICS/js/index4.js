/* Learning the basics stuff but mostly about Objects
JavaScript OOP Crash Course (ES5 & ES6)
Link: https://www.youtube.com/watch?v=vDJpGenyHaA&index=13&list=WL&t=0s
Last Watched: 21:23 */

// How to identify the type of variable:
let s1 = "Hello";
let s2 = 1;
let s3 = false;
console.log(typeof s1);
console.log(typeof s2);
console.log(typeof s3);
// How to view properties for an object(Method 1):
var keys = Object.keys(navigator);
console.log(navigator);
// How to view properties for an object(Method 2):
console.log(Object.values(navigator));
// How to request or call a property from an object:
console.log(navigator.appVersion);
/* We are going to create a book (object) with properties
 and make a get function to reference some properties*/
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
    // To use backtick S(``) press the tilt key without holding shift.
    /* When you use the return keyword, you are telling the browser
    that you want to store value in memory so that you can use it later*/
  }
};
// How to call an object and access one of its properties with the get function
console.log(book1.getSummary());
// How to view properties for an object (Method 2):
console.log(Object(book1));
// How to create a Constructor with a get function:
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary2 = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;

  }

}
// How to create an object from a previously created constructor with parameters:
const book3 = new Book('Book Three', 'Sarah Smith', '2013');
const book4 = new Book('Book Four', 'James Alberto', '2017');
// How to call an object to access its properties:
console.log(book3.title);       //Method (1)
console.log(book4.author);      //Method (1)
console.log(book3.getSummary2());  //Method (2)
console.log(book4.getSummary2());  //Method (2)
// How to store get function inside the prototype object:
/*Pretend the getSummary2 does not exist in the book function listed above*/
Book.prototype.getSummary3 = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;

};
// Notice how you can call the object without referencing the get method?
/*In the previous example, we use console.log(book1.getSummary()); to
reference the get method. Because we want to store data in the prototype object
instead, we instead use the following code:  */
console.log(book3);
// Creating another get function inside the prototype objects:
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} year(s) old.`;
};
/* Now that the books age is stored inside the prototype object, we can access
 it later if we wanted to by referencing the following code; */
console.log(book4.getAge());
console.log(book3.getAge());
// How to change properties in an object within the prototype object
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revise = true; // boolean
};

console.log(book3); // getting book3 info
book3.revise('2018'); // requesting revise function for book3
console.log(book3); // getting book3 info again for comparison
console.log(book4); // getting book4 info
book4.revise('2017'); //  requesting revise function for book4
console.log(book4); // getting book4 info again for comparison

/* Conclusion: The revise function will always be set to true, because it's
 hard coded. However it does modify the year to whatever year you insert */

 // How to inherit a property from a different object and give to a new object:
function Magazine(title, author, year, month) {
  Book.call(this,title,author,year);
  this.month = month;
}
// How to inherit traits to a prototype:

Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Objects
const mag1 = new Magazine('Magazine One', 'John Doe', '2018', 'Jan');
// Call the object with the get method
console.log(mag1.getSummary2());

// Object of Protos
const bookProtos = {
  getSummary4: function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;

}, // Note: When you want to add two methods within an object insert a comma.
  getAge2: function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} year(s) old.`;
  }
};
// Create object
const book5 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2013';
console.log(book1);

// How to create a class in JavaScript
class Book6 {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
// Instantiate an objects
