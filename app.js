const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const age = document.querySelector('#age');
const cnic = document.querySelector('#cnic');

 let emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
let cnicRegex = /^42\d{11}$/;

form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    console.log(username.value)
     console.log(email.value)
     console.log(password.value)
     console.log(age.value)
     console.log(cnic.value) 

     

     console.log(emailRegex.test(email.value))
     console.log(cnicRegex.test(cnic.value))




    if(cnicRegex.test(cnic.value)){
console.log(cnic.value)
    
    }else{
        console.log("conditon not ture")
    }

    

    
})