"use strict";
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
exports.__esModule = true;
var msg = 'Hello ';
console.log(msg);
var isBegineer = false;
console.log(isBegineer);
var scentence = 'Hi How are you';
console.log(scentence);
var n = null;
var name = undefined;
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [23, 2, 1, 4, 5, 2];
//Tupules
var person1 = ['Aakash', 23];
//Custom Datatype
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.green;
console.log(c);
//Custom Datatype
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 5] = "red";
    Colors[Colors["green"] = 6] = "green";
    Colors[Colors["blue"] = 7] = "blue";
})(Colors || (Colors = {}));
var c1 = Colors.green;
console.log(c1);
//Any type
var randomValue = 10;
randomValue = 10;
randomValue = 'Aakash';
console.log(randomValue);
//Type Inference
var x = 20;
//x =true
//MultiType
var multitype;
multitype = true;
multitype = 5;
//Function
function multiply(num1, num2) {
    return num1 + num2;
}
multiply(2, 4);
//multiply(3,'d');
//Function optional
function multiply2(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else
        return num1;
}
multiply2(2, 4);
// Interfaces
function printNames(person) {
    console.log("The name is ".concat(person.firstName, " ").concat(person.lastName));
}
var p1 = {
    firstName: 'Hero',
    lastName: 'Panti'
};
printNames(p1);
function printNames2(person) {
    console.log("The name is ".concat(person.firstName, " ").concat(person.lastName));
}
var p2 = {
    firstName: 'Hero',
    lastName: 'Panti'
};
printNames(p1);
//Class
var Employee = /** @class */ (function () {
    function Employee(eName) {
        this.eName = eName;
    }
    Employee.prototype.Welcome = function () {
        console.log("Welcome to the team ".concat(this.eName));
    };
    return Employee;
}());
var e1 = new Employee('Riya');
e1.Welcome();
//Inheritence
var Devloper = /** @class */ (function (_super) {
    __extends(Devloper, _super);
    function Devloper(dName) {
        return _super.call(this, dName) || this;
    }
    Devloper.prototype.Task = function () {
        console.log("Time to code ".concat(this.eName));
    };
    return Devloper;
}(Employee));
var d1 = new Devloper('Aakash');
console.log(d1.eName);
d1.Task();
