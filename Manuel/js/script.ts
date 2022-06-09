// basic
class Person{
    name: string;
    age: number;
    jobTitle: string;
    constructor(name: string, age: number, jobTitle: string){
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }

    printAll(): string{
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}

class Employee extends Person{
    salary: number;
    jobLocation: string;
    constructor(name: string, age: number, jobTitle: string, salary: number, jobLocation: string){
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }

    printMore(): string{
        return `${super.printAll()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}

const p1 = new Person("Manuel", 29, "Dev");
const e1 = new Employee("Serri", 32, "Dev", 5000, "CodeFactory");

console.log(p1.printAll());
console.log(e1.printMore());


// advanced
class Customer{
    private fName: string;
    private lName: string;
    private address: string;
    constructor(fName: string, lName: string, address: string){
        this.fName = fName;
        this.lName = lName;
        this.address = address;
    }

    getFName(): string{
        return this.fName;
    }
    setFName(name: string): string{
        this.fName = name;
        return `Successfully changed to ${name}`;
    }

    getLName(): string{
        return this.lName;
    }
    setLName(name: string): string{
        this.lName = name;
        return `Successfully changed to ${name}`;
    }

    getAddress(): string{
        return this.address;
    }
    setAddress(address: string): string{
        this.address = address;
        return `Successfully changed to ${address}`;
    }

    getPerson(): {[index: string]: any}{
        return {fName: this.fName, lName: this.lName, address: this.address};
    }
}

const c1 = new Customer("Manuel", "Wid", "Somewhere 1");
// console.log("this one: " + c1.fName);
console.log(c1.getFName());
c1.setFName("Serri");
console.log(c1.getFName());
console.log(c1.getPerson());

class Admin extends Customer{
    private grantAccess: number;
    private employDate: string;
    private salary: number;
    constructor(fName: string, lName: string, address: string, grantAccess: number, employDate: string, salary: number){
        super(fName, lName, address);
        this.grantAccess = grantAccess;
        this.employDate = employDate;
        this.salary = salary;
    }

    printAdmin(): {[index: string]: any}{
        let admin:{[index: string]: any} = super.getPerson();
        admin["grantAccess"] = this.grantAccess;
        admin["employDate"] = this.employDate;
        admin["salary"] = this.salary;
        return admin;
    }
}

const a1 = new Admin("Maria", "something russian", "somewhere 1", 1, "1.1.2000", 3000);
console.log(a1.printAdmin());

class Marketing extends Customer{
    private sales: number;
    private regDate: string;
    constructor(fName: string, lName: string, address: string, sales: number, regDate: string){
        super(fName, lName, address);
        this.sales = sales;
        this.regDate = regDate;
    }

    getSales(): number{
        return this.sales;
    }
    setSales(num: number): string{
        this.sales = num;
        return `Successfully set sales to ${num}`;
    }

    printMarket(): {[index: string]: any}{
        let market: {[index: string]: any} = super.getPerson();
        market["sales"] = this.sales;
        market["regDate"] = this.regDate;
        return market;
    }
}

const m1 = new Marketing("Jan", "Dunno", "somewher", 4644894, "1.1.2000");
console.log(m1.printMarket());
console.log(m1.setSales(44));
console.log(m1.getSales());