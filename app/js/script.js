const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__menu');

btnHamburger.addEventListener('click',function(){

    if(header.classList.contains('open')){ //Close Hamburger Menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        body.classList.remove('noscroll');
        menu.classList.remove('expanded');
        // menu.style.display = "none";
       

    }else{ //Open Hamburger Menu
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        body.classList.add('noscroll');
        overlay.classList.add('fade-in');
        menu.classList.add('expanded');
        
        
    }
});