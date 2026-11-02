document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
document.querySelectorAll(".nav-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const nav = button.parentElement.querySelector(".nav");
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "✕" : "☰";
  });
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  const nav = link.closest(".nav");
  nav.classList.remove("open");
  const button = nav.parentElement.querySelector(".nav-toggle");
  if (button) { button.textContent = "☰"; button.setAttribute("aria-expanded", "false"); }
}));
