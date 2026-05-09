// 1. Прибираємо завантажувач
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => (loader.style.display = "none"), 500);
});

// 2. Анімація при скролі
const scrollReveal = () => {
  const elements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

// 3. Фільтрація меню
const filterButtons = document.querySelectorAll(".tab-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Зміна активної кнопки
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    menuCards.forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "scale(0.9)";

      setTimeout(() => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.display = "none";
        }
      }, 300);
    });
  });
});

// 4. Плавний скрол
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
