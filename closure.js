const init = (name) =>{
  let fName = name;
  console.log('Inside Init');

  return function(lName){
    console.log(fName);
    console.log(lName);
  }
}

// let value = init('Aakash');
// value('Prasad')

console.log(init('Aakash')('Prasad'))

// const setFont = (size) =>{
//   return function(){
//     document.body.style.fontSize = size;
//   }
// }

// size12 = setFont(12);
// size14 = setFont(14);

// size12()

