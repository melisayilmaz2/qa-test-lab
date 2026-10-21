import {validateRegistration} from './validation.mjs';
const form=document.querySelector('#signup'), feedback=document.querySelector('#feedback');
form.addEventListener('submit',e=>{e.preventDefault();const fields=Object.fromEntries(['name','email','password','confirm'].map(id=>[id,document.getElementById(id).value]));const result=validateRegistration(fields);feedback.className='feedback '+(result.valid?'success':'error');feedback.textContent=result.valid?'Registration validation passed — this is a demo; no account was created.':result.errors.join(' ');});
document.querySelector('#clear').addEventListener('click',()=>{form.reset();feedback.className='feedback';feedback.textContent='Waiting for form submission.';});
