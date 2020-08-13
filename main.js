const mobileNav =  document.querySelector('.mobile-nav');
const toggleBtn =  document.querySelector('.toggle-button');
const toggleCloseButton =  document.querySelector('.icon-close');
const toggleHamburger =  document.querySelector('.icon-hamburger');


toggleBtn.addEventListener("click", function() {
  mobileNav.classList.toggle('open');
  toggleHamburger.classList.toggle('close');
  toggleCloseButton.classList.toggle('open');
});
