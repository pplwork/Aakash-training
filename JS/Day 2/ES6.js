// Arrow Functions
const add = (a,b) => (a+b);
let res = add(2,3)
console.log(res);

//  Array Destructuring

let arr = ['Pyke', 'Martha', 'Jessica', 'Luna', 'Cory']

let [a,b,...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//Object Desruturing
const planet = {
  name: 'Hosnian Prime',
  faction: 'New Republic',
  weather: 'Temperate'
};
const{n, ...f} = planet;
console.log(n);
console.log(f);

console.log(arr.includes('Martha'))

const word = 'Aakash'
const newWord = word.padStart(20, '12')
const latWord = newWord.padEnd(20, '58')
console.log(latWord);


//Spread Operator

const arr1 = [4,5,6];
const newArr = [1,2,3, ...arr1 , 7,8,9];
console.log(newArr);