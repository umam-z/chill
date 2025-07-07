var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

const profileInfo = document.querySelector('.profile-info');
const dropdownMenu = document.querySelector('.dropdown-menu');
profileInfo.addEventListener('click', () => {
dropdownMenu.classList.toggle('show');
});
document.addEventListener('click', (e) => {
if (!profileInfo.contains(e.target)) {
    dropdownMenu.classList.remove('show');
}
});

