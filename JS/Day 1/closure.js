// Closure:  It is just a combination of functions bundled together

const vehicle =(car) =>{
  console.log('I am inside vehicle function')
  return function(model){
    console.log(car);
    console.log(model);
  }
}

// let val = vehicle('Audi');
// val('A3')

console.log(vehicle('Audi')('A3'))


// const setFont =(size) =>{
//   return function(){
//     document.body.style.fontSize = size;
//   }
// }

// size12 = setFont(12);
// size14 = setFont(14);


// size12();