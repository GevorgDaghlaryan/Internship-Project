import Auth from './services/Auth.js';
//Elements
 const $loginFormInputs = document.querySelectorAll('.login_form-input');
 const $loginForm = document.querySelector('.login_form');

 //data
 const userData = {};
 //event listener
 $loginFormInputs.forEach(($loginFormInput) => {
    $loginFormInput.addEventListener('input', handleInput);
 });
 $loginForm.addEventListener('submit',handleSubmit)

 //evetts lsitener function
 function handleInput(e){
    userData[e.target.name] =  e.target.value;
   
 }
 async function handleSubmit(e){
    e.preventDefault();
    await Auth.signIn(userData);
 }