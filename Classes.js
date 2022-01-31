class Employee{
  constructor(name, experience, skill){
    this.name=name;
    this.experience = experience;
    this.skill = skill;
  }

  joiningDate(){
    return 2022 - this.experience;
  }

  slogan(){
    return `${this.name} believes in team building`
  }
}
e = new Employee('Aakash', '2', 'ReactJS')
let date  = e.joiningDate();
console.log(date)


class Programmer extends Employee{
  constructor(name, experience, skill, lang){
    super(name, experience, skill);
    this.lang = 'JavaScript';
  }

  favLang(){
    console.log(`Fav Language is ${this.lang}`)
  }
}

Rohan = new Programmer('Rohan', 3, 'React', 'JavaScript')
console.log(Rohan.favLang());
console.log(Rohan.joiningDate());