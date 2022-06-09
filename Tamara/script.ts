//ex1

class Person {
    name: string;
    age: string;
    jobTitle : string;
    constructor(name: string, age: string,jobTitle: string){
        this.name = name;
        this.age= age;
        this.jobTitle= jobTitle;}
    displayInfo(){
        return("Hello there, my name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle)
    }
}

let Person1 = new Person("Tamara", "24", "Webdev. ", );

//ex2

class personAdd extends Person{
    salary: number;
    jobLocation: string;
    constructor(name: string, age: string, jobTitle:string, salary: number, jobLocation:string){
        super(name, age, jobTitle)
        this.salary = salary;
        this.jobLocation= jobLocation;
    }
    displayMoreInfo(){
        document.write(super.displayInfo() + " and I get " +  this.salary + " every month, and i work in " + this.jobLocation)}
}

let personAdd1 = new personAdd ("Tamara", "24", "Webdev.", 1500, "Code Factory" );
console.log(personAdd1)
personAdd1.displayMoreInfo()

