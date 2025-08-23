const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('section[id]')];

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 80) header.classList.add('scrolled');
  else header.classList.remove('scrolled');

  const current = sections.findLast(sec => scrollY + 120 >= sec.offsetTop);
  if (current) {
    navLinks.forEach(l => l.classList.remove('active'));
    const active = document.querySelector(`.nav-link[href="#${current.id}"]`);
    if (active) active.classList.add('active');
  }
});
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
