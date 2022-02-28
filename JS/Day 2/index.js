const btn = () =>{
  console.log('Button Click Working')
  const p = document.querySelector('p');
  p.textContent = "I have been changed";
}
const alertText = () =>{
  alert('You are in danger');
}

const b = document.querySelector('button');
// b.onclick = btn;
b.addEventListener('click', btn);
b.addEventListener('click', alertText);