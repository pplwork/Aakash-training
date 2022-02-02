const form = document.forms["myForm"]
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = (form["email"].value)
  const password = (form["password"].value)
  const sex = (form["sex"].value)
  const role = (form["role"].value)
  const perm = (form["perm"])
  
  let permCount =0;
  perm.forEach((ele)=>{
    if(ele.checked == true){
      permCount++;
    }
  })
  
  console.log(email)
  console.log(password)
  console.log(sex)
  console.log(role)
  console.log(permCount)
})

const Submit = () =>{
  console.log('Form Submitted')
}


