const burgir = document.querySelector(".burgir_menu")
const hnav = document.querySelector(".header__nav")
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    hnav.classList.toggle("open");
    
})