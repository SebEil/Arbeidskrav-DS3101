const navbarBurger = document.querySelector(".navbar__burger");
const navbarMenu = document.querySelector(".navbar__menu");

const changeDisplay = () => {

    const display = navbarMenu.style.display;

    if( display === "none" || display === ""){
        navbarMenu.style.display = "block";
    } else {
        navbarMenu.style.display = "none";
    }
}

navbarBurger.addEventListener("click", changeDisplay);