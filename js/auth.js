import Auth from './services/Auth.js';

//Elements
const $authFormInputs = document.querySelectorAll('.auth_form-input');
const $authForm = document.querySelector('.auth_form');
// data
const userData ={};
//Event listener
$authFormInputs.forEach(($authFormInput) =>{
    $authFormInput.addEventListener('input',handleInput);

})
$authForm.addEventListener('submit', handleSubmit)

//evetts lsitener function
 function handleInput(e){
    userData[e.target.name] = e.target.value;

 }
  async function handleSubmit(e){
    e.preventDefault();
    await Auth.signUp(userData);
 }