const arr = [1,2,3,4,5,6,7,8,9,10];

const newArr = arr.map((ele)=>ele*2);
console.log(newArr);

const filtered = arr.filter((ele)=> ele>4)
console.log(filtered);

const total = arr.reduce((tot, ele)=>{
  return tot + ele;
},0);
console.log(total)