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