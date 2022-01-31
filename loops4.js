let list = [];

let menu = 'What will you like to do: '+
            '\n 1. Insert new Names'+
            '\n 2. Print Names'

console.log(menu);

let command = prompt(menu);

console.log(prompt);

while(command == '1'){
  let name = prompt('Enter name');
  list.push(name);
  prompt(menu);
}

alert(list);