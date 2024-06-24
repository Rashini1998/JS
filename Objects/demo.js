const car = { name: "Volvo", type: "4wheel", color: "Black" };
//console.log(car.name);

const person = new Object();
person.name = "Nimal";
person.age = 63;
person.eyeColor = "black";

// obejectName.propertyName;
// console.log(person);
// console.log(person.age);

const student = {
  firstName: "Maria",
  lastname: "Perera",
  age: 26,
  fullName: function () {
    return this.firstName + " " + this.lastname;
  },
};

//console.log(student.fullName());

delete student.age;
//console.log(student);

const Person = {
  name: "John",
  age: 63,
  myCar: {
    carName: "Volvo",
    carType: "4Wheel",
    carColor: "Red",
  },
};

//console.log(Person.myCar.carType);

const student1 = {
  firstName: "Maria",
  lastname: "Perera",
  age: 26,
  // fullName: function () {
  //   return this.firstName + " " + this.lastname;
  // },
};

let text = " ";
for (let x in student1) {
  text += student1[x] + " ";
}
// console.log(text);

const myArray = Object.values(student1);
// console.log(myArray);

console.log(JSON.stringify(student1));
