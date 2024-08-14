function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const link1 = document.getElementById("link1");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");

  link1.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(".about");
  });

  link2.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(".projects");
  });

  link3.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(".contact");
  });
});
