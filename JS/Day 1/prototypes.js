let obj= {
  name: 'Aakash',
  age: 21,
  address: 'Earth'
}

console.log(obj);

function obj1(givenName){
  this.name = givenName;
}
let o1 = new obj1("Aakash");

console.log(o1);

obj1.prototype.getName =  function(){return this.name}

console.log(o1);