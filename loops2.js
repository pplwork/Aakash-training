const student = {
  fName:'Aakash',
  lName: 'Prasad',
  age: 21,
  gender:'Male',
  isAlive: true
}

for(prop in student ){
  console.log(`My ${prop} is ${student[prop]} `);
}