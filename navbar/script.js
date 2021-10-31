//select items
const hamburgerIcon = document.querySelector(".nav-btn-hamburger");
const crossIcon = document.querySelector(".nav-btn-times ");
const navList = document.querySelector(".nav-items");
const mediaQuery = window.matchMedia('(max-width: 768px)')
const mediaQueryBig = window.matchMedia('(min-width: 769px)')

//when hamburger menu icon clicked

hamburgerIcon.addEventListener("click", function(){
    if(mediaQuery.matches){
    hamburgerIcon.style.display = "none";
    crossIcon.style.display = "inline";
    navList.style.display = "inline"
    }
    
})

//when cross icon clicked
crossIcon.addEventListener("click", function(){
    if(mediaQuery.matches){
    crossIcon.style.display = "none";
    hamburgerIcon.style.display = "inline";
    navList.style.display = "none"
    }
    
});

//to avoid mistakes, onrisize function created, should fine better idea 

window.onresize = function(){
    if(mediaQueryBig.matches){
    crossIcon.style.display = "none";
    hamburgerIcon.style.display = "none";
    navList.style.display = "inline"
    } else {
    crossIcon.style.display = "none";
    hamburgerIcon.style.display = "inline";
    navList.style.display = "none"
    }
}

