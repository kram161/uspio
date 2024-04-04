const burgerButton = document.querySelector(".header__burger"),
    headerCap = document.querySelector(".header__cap"),
    headerMenu = document.querySelector(".header__menu"),
    headerLogo = document.querySelector(".header__logo");



burgerButton.addEventListener("click", () => {
    if(burgerButton.classList.contains("active")){
        burgerButton.classList.remove("active");
        headerCap.classList.remove("active");
        headerMenu.classList.remove("active");
        headerLogo.classList.remove("active");
    }else{
        burgerButton.classList.add("active");
        headerCap.classList.add("active");
        headerMenu.classList.add("active");
        headerLogo.classList.add("active");
    }
});