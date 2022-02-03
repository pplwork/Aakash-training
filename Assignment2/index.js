const part = (arr, low, high, fields) =>{
  let pivot = arr[high];
  let i= low-1;

  for(let j=1; j<high-1; j++){
    if(arr[j][fields]<pivot[fields]){
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
  return i+1;
}

const sort = (arr, low, high, fields) =>{
  let pivot = part(arr, low, high, fields);
  if(low<high){
    sort(arr, low, pivot-1, fields);
    sort(arr, pivot+1, high, fields);
  }  
}

class Person{
  constructor(name, age, salary, sex){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.sex = sex;
  }

  static sort(arr, fields, order){
      let tempArr = [...arr];
      sort(tempArr, fields, order );
      
      if(order == 'asc'){
        console.log(tempArr);
      }
      if(order == 'desc'){
        console.log(tempArr.reverse())
      }
  }
}

let toBeSorted =[
  ['Mr X', 21, 70000, 'male'], ['Mr Y', 22, 80000, 'male'],['Mr W', 23, 90000, 'male'],['Mr Z', 24, 100000, 'male']                    
] 

Person.sort(toBeSorted, 'age', 'desc')