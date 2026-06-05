// Custom cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");

(function animateRing() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animateRing);
})();

// Nav scroll
const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("visible");
        });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
);
reveals.forEach((el) => obs.observe(el));
