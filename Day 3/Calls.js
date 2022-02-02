const printString = (str) => {
  setTimeout(()=>{
    console.log(str);
  },Math.floor(Math.random()*100)+1)
}


const printAll = () =>{
  printString("A");
  printString("B");
  printString("C");

}
printAll();