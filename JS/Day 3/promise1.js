const printString = (str) => {
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      console.log(str);
      res();
    },Math.floor(Math.random()*100)+1)
  })
}


const printAll = () =>{
  printString('A')
    .then(()=> printString('B'))
    .then(()=>printString('C'))

}
printAll();