export {} 
let msg = 'Hello '
console.log(msg) 


let isBegineer : boolean = false;
console.log(isBegineer)

let scentence: String = 'Hi How are you'
console.log(scentence);

let n:null = null
let name  = undefined;

let arr1 : number[] = [1,2,3,4,5]
let arr2: Array<number> = [23,2,1,4,5,2]

//Tupules
let person1: [string, number] = ['Aakash',23]

//Custom Datatype
enum Color{red, green, blue}
let c : Color = Color.green;
console.log(c); 

//Custom Datatype
enum Colors{red=5, green, blue}
let c1 : Colors = Colors.green;
console.log(c1); 

//Any type
let randomValue: any = 10;
randomValue = 10;
randomValue = 'Aakash'
console.log(randomValue)


//Type Inference
let  x = 20;
//x =true

//MultiType
let multitype: boolean|number;
multitype = true;
multitype = 5;


//Function

function multiply(num1: number, num2: number):number{
  return num1+num2;
}
multiply(2,4);
//multiply(3,'d');

//Function optional

function multiply2(num1: number, num2?: number):number{
  if(num2){
    return num1+num2;
  }
  else 
    return num1;
}
multiply2(2,4);

// Interfaces
function printNames(person:{firstName:string, lastName:string}){
  console.log(`The name is ${person.firstName} ${person.lastName}`)
}
let p1 = {
  firstName: 'Hero',
  lastName: 'Panti'
}
printNames(p1);

//For large number of parameters use interfaces
interface Person {
  firstName:string,
  lastName: string,
}
function printNames2(person:Person){
  console.log(`The name is ${person.firstName} ${person.lastName}`)
}
let p2 = {
  firstName: 'Hero',
  lastName: 'Panti'
}
printNames(p1);

//Class
class Employee {
  eName: string
  constructor(eName:string){
    this.eName = eName;
  }
  Welcome(){
    console.log(`Welcome to the team ${this.eName}`)
  }
}
let e1 = new Employee('Riya');
e1.Welcome();

//Inheritence
class Devloper extends Employee{
  constructor(dName:string){
    super(dName);
  }
  Task(){
    console.log(`Time to code ${this.eName}`)
  }
}

let d1 = new Devloper('Aakash');
console.log(d1.eName);
d1.Task();