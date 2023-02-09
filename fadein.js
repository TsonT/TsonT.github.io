const fadeInContainers = document.querySelectorAll(".container-fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-bot");
        console.log(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

fadeInContainers.forEach((container) => {
  observer.observe(container);
});
