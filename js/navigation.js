const nav = document.querySelector(".home_nav");
const hamBtn = document.querySelector(".hamburger-btn");

hamBtn.addEventListener("click", navShowClose);

function navShowClose(){
    nav.classList.toggle("navShow");
    hamBtn.classList.toggle("navClose");
}

const menuLinks = document.querySelectorAll(".navList");

menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", navShowClose);
    }
)

