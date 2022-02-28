const form = document.forms["myForm"]
const formHide = document.getElementById("form")
const confirm = document.getElementById("confirm")
confirm.style.visibility = "hidden";

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  confirm.style.visibility = "visible";
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

  if(permCount < 2){
    alert('Please select atleast 2 permissions');
  }
  if(sex == ""){
    alert('Please select sex')
  }
  if(role == ""){
    alert('Please Select Role')
  }
  formHide.style.visibility = "hidden";
  document.write(`Email : ${email} `)
  document.write("<br>")
  document.write(`Password : ${password}`)
  document.write("<br>")
  document.write(`Sex : ${sex} `)
  document.write("<br>")
  document.write(`Role : ${role}`)
  document.write("<br>")
  document.write(`Permission: `)
  perm.forEach((ele, index)=>{
    if(ele.checked == true){
      document.write(`${perm[index].defaultValue}, `)
    }
  });
  
  
  
  
  console.log(email)
  console.log(password)
  console.log(sex)
  console.log(role)
  console.log(perm)
  console.log(permCount)
})

const Submit = () =>{
  console.log('Form Submitted')
}


