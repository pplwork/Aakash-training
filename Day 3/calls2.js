const printString = (str, callback) => {
  setTimeout(()=>{
    console.log(str);
    callback();
  },Math.floor(Math.random()*100)+1)
}


const printAll = () =>{
  printString("A", ()=>{
    printString("B", ()=>{
      printString("C", ()=>{});
    });
  });
  
  

}
printAll();