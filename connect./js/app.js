const sign_in_btn = document.querySelector('#sign-in-button');
const register_btn = document.querySelector('#register-button');
const container = document.querySelector('.container');

register_btn.addEventListener('click',()=>{
    container.classList.add('register-mode');
});

sign_in_btn.addEventListener('click',()=>{
    container.classList.add('sign-in-mode');
});
