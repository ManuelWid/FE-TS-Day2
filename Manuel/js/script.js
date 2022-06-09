var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.printAll = function () {
        return "Hello there, My name is ".concat(this.name, " and I am ").concat(this.age, " years old, and I am a ").concat(this.jobTitle);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Employee.prototype.printMore = function () {
        return "".concat(_super.prototype.printAll.call(this), " and I get ").concat(this.salary, " every month, and I work in ").concat(this.jobLocation);
    };
    return Employee;
}(Person));
var p1 = new Person("Manuel", 29, "Dev");
var e1 = new Employee("Serri", 32, "Dev", 5000, "CodeFactory");
console.log(p1.printAll());
console.log(e1.printMore());
var Customer = /** @class */ (function () {
    function Customer(fName, lName, address) {
        this.fName = fName;
        this.lName = lName;
        this.address = address;
    }
    Customer.prototype.getFName = function () {
        return this.fName;
    };
    Customer.prototype.setFName = function (name) {
        this.fName = name;
        return "Successfully changed to ".concat(name);
    };
    Customer.prototype.getLName = function () {
        return this.lName;
    };
    Customer.prototype.setLName = function (name) {
        this.lName = name;
        return "Successfully changed to ".concat(name);
    };
    Customer.prototype.getAddress = function () {
        return this.address;
    };
    Customer.prototype.setAddress = function (address) {
        this.address = address;
        return "Successfully changed to ".concat(address);
    };
    Customer.prototype.getPerson = function () {
        return { fName: this.fName, lName: this.lName, address: this.address };
    };
    return Customer;
}());
var c1 = new Customer("Manuel", "Wid", "Somewhere 1");
// console.log("this one: " + c1.fName);
console.log(c1.getFName());
c1.setFName("Serri");
console.log(c1.getFName());
console.log(c1.getPerson());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(fName, lName, address, grantAccess, employDate, salary) {
        var _this = _super.call(this, fName, lName, address) || this;
        _this.grantAccess = grantAccess;
        _this.employDate = employDate;
        _this.salary = salary;
        return _this;
    }
    Admin.prototype.printAdmin = function () {
        var admin = _super.prototype.getPerson.call(this);
        admin["grantAccess"] = this.grantAccess;
        admin["employDate"] = this.employDate;
        admin["salary"] = this.salary;
        return admin;
    };
    return Admin;
}(Customer));
var a1 = new Admin("Maria", "something russian", "somewhere 1", 1, "1.1.2000", 3000);
console.log(a1.printAdmin());
var Marketing = /** @class */ (function (_super) {
    __extends(Marketing, _super);
    function Marketing(fName, lName, address, sales, regDate) {
        var _this = _super.call(this, fName, lName, address) || this;
        _this.sales = sales;
        _this.regDate = regDate;
        return _this;
    }
    Marketing.prototype.getSales = function () {
        return this.sales;
    };
    Marketing.prototype.setSales = function (num) {
        this.sales = num;
        return "Successfully set sales to ".concat(num);
    };
    Marketing.prototype.printMarket = function () {
        var market = _super.prototype.getPerson.call(this);
        market["sales"] = this.sales;
        market["regDate"] = this.regDate;
        return market;
    };
    return Marketing;
}(Customer));
var m1 = new Marketing("Jan", "Dunno", "somewher", 4644894, "1.1.2000");
console.log(m1.printMarket());
console.log(m1.setSales(44));
console.log(m1.getSales());
