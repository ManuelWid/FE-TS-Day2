"use strict";
//ex1
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    displayInfo() {
        return ("Hello there, my name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle);
    }
}
let Person1 = new Person("Tamara", "24", "Webdev. ");
//ex2
class personAdd extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    displayMoreInfo() {
        document.write(super.displayInfo() + " and I get " + this.salary + " every month, and i work in " + this.jobLocation);
    }
}
let personAdd1 = new personAdd("Tamara", "24", "Webdev.", 1500, "Code Factory");
console.log(personAdd1);
personAdd1.displayMoreInfo();
