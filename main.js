// Function expression to select elements

const selectElement = (param) => document.querySelector(param);
const navLinks = document.querySelectorAll(".nav-link");

function linksAnimation(links) {
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkAnimate 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
}

selectElement(".top-right-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".top-right-menu-icon").classList.toggle("toggle");

    linksAnimation(navLinks);
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".top-right-menu-icon").classList.toggle("toggle");

        linksAnimation(navLinks);
    }); 
});