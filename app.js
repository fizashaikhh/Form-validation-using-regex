const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('number')
let validName = false
let validEmail = false
let validPhone = false
username.addEventListener('blur',()=>{
  let regex = /^[a-zA-Z]{1}([a-zA-Z\s0-9]){2,20}$/
  let str = username.value;
  if(regex.test(str)){
    username.classList.remove('is-invalid')
    username.classList.add('is-valid')
    validName= true
  }
  else{
    username.classList.remove('is-valid')

    username.classList.add('is-invalid')
    validName= false

  }
})

email.addEventListener('blur',()=>{
  let regex = /^([_\.a-zA-Z0-9])+@([a-zA-Z]){2,7}\.([a-zA-Z])+$/;
  let str = email.value;
  if(regex.test(str)){
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')
    validEmail= true
  }
  else{
    email.classList.remove('is-valid')

    email.classList.add('is-invalid')
    validEmail= false

  }
})

phone.addEventListener('blur',()=>{
  let regex = /^\d{10}$/;
  let str = phone.value;
  if(regex.test(str)){
    phone.classList.remove('is-invalid')
    phone.classList.add('is-valid')
    validPhone= true
  }
  else{ 
    phone.classList.remove('is-valid')

    phone.classList.add('is-invalid')
    validEmail= false
  }

})

const submit = document.getElementById('submit')

submit.addEventListener('click',(e)=>{
  e.preventDefault();
 let message = document.getElementById('success')
 console.log(validName,validEmail,validPhone);
 
 if(validEmail && validName && validPhone){
 let html = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Thank You!</strong> Your request has been successfully submitted.
 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
   <span aria-hidden="true">&times;</span>
 </button>
 </div>`;
 message.innerHTML = html;

setTimeout(() => {
  message.innerHTML = ``;

}, 2000);
 }
 else
 {
   let html = `<div  class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Error</strong> Name, Email-id or Phone are invalid.
   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
     <span aria-hidden="true">&times;</span>
   </button></div>`
   message.innerHTML = html
   setTimeout(() => {
  message.innerHTML=``
  
  },2000);
 }
})