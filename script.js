const bar = document.getElementById('navi');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (navi){
    bar.addEventListener('click',() =>{
      nav.classList.add('active'); 
    })

}
if (close){
    close.addEventListener('click',() =>{
      nav.classList.remove('active'); 
    })

}
// Adding humburger and close menu and making them active