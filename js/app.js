let medioNav = document.getElementById("medioNav");
let bars = document.getElementById("bars");

bars.addEventListener("click" , function(){
    bars.classList.toggle("openNavB");
    medioNav.classList.toggle("openNav")
})