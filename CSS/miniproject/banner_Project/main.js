const togle_btn = document.querySelector(".togle_btn");
const menu = document.querySelector(".nav_menu");
const sns = document.querySelector(".nav_sns");

console.log('heloo');

togle_btn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});