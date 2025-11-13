const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true"; 
  nav.setAttribute("aria-hidden", isOpen ? "true" : "false");    
  toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
  document.body.classList.toggle("noscroll", !isOpen); 
});

