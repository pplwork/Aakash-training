const printString = (str) => {
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      console.log(str);
      res();
    },Math.floor(Math.random()*100)+1)
  })
}


const printAll = async() =>{
  await printString('A');
  await printString('B');
  await printString('C');
}
printAll();