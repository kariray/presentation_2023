const titles = document.querySelectorAll("h2");
const navs = document.querySelectorAll(".nav a");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetTitleId = entry.target.id;
      highlightSidebarLink(targetTitleId);
    }
  });
};

const observer = new IntersectionObserver(callback, { threshold: 0.5 });

titles.forEach((title) => {
  observer.observe(title);
});

function highlightSidebarLink(targetTitleId) {
  navs.forEach((link) => {
    const linkHref = link.getAttribute("href").substring(1);
    if (linkHref === targetTitleId) {
      link.classList.add("nav_target");
    } else {
      link.classList.remove("nav_target");
    }
  });
}

const navLists = document.querySelector(".nav ol");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;

  if (scrollPosition >= viewportHeight - 50) {
    navLists.classList.add("show");
  } else {
    navLists.classList.remove("show");
  }
});
