const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;
const navhidden = document.querySelector(".nav--hidden");
window.addEventListener("scroll", ()=>{
    if(lastScrollY < window.scrollY){
        nav.add('navhidden');
        console.log('luid sobe');
    }else{
        nav.remove('navhidden');
        console.log('luid desce');
    }
    lastScrollY = window.scrollY;
});


/*SOBRE O SCROLLY PARA COMPRA */


const opened1 = document.querySelector(".aboutvopened");
const aboutv = document.querySelector(".aboutv");
const opened2 = document.querySelector(".aboutbopened");
const about = document.querySelector(".aboutb");
const sectionInt = document.querySelector(".sections1");
window.addEventListener("scroll", function(){
    var alogo = document.querySelector('.');
    var header = document.querySelector('header');
    alogo.classList.toggle("sticky", window.scrollY > 0)
    header.classList.toggle("sticky", window.scrollY > 0)
})