const names = ['John', 'Spidey', 'Alex', 'Jessica', 'Martha'];

// for(let i=0; i<names.length; i++){
//   console.log(`Welcome to the channel ${names[i]}`);
// }

names.forEach((ele, index)=>{
  console.log(`${index} Welcome to the team ${ele}`)
})