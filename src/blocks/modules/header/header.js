const burgerButton = document.querySelector(".header__burger"),
    headerCap = document.querySelector(".header__cap"),
    headerMenu = document.querySelector(".header__menu"),
    headerLogo = document.querySelector(".header__logo"),
    signUpButton = document.querySelector(".header__sign-up"),
    signUpModal = document.querySelector(".sign-up"),
    signUpClose = document.querySelector(".sign-up__close");
    signUpWrapper = document.querySelector(".sign-up__wrapper")

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

signUpButton.addEventListener("click", () => {
    signUpModal.classList.add('active')
})

document.addEventListener("click", (e) => {
  const target = e.target;
  if(target === signUpWrapper || target === signUpClose){
      signUpModal.classList.remove('active')
  }
})