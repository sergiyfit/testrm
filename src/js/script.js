let burger = document.querySelector(".menu-burger");
let menu = document.querySelector(".menu");

burger.onclick = () => {
    menu.classList.toggle("menu-open")
    burger.classList.toggle("menu-burger-close")
}
