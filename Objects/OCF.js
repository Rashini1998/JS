function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

//Create an object
const myFather = new Person("Kumara", "Gamalath", 57, "Black");
console.log(JSON.stringify(myFather));

Person.prototype.nationality = "Sinhala";
console.log(myFather.nationality);
