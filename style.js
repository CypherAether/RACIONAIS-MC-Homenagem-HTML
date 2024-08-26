// script.js

// Add event listeners to navigation menu items
document.querySelectorAll('nav ul li a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').replace('#', '');
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Add animation to hero section
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    heroSection.classList.add('animate');
  } else {
    heroSection.classList.remove('animate');
  }
});

// Add hover effects to member profiles
const memberProfiles = document.querySelectorAll('.bios .member');
memberProfiles.forEach((profile) => {
  profile.addEventListener('mouseover', () => {
    profile.classList.add('hover');
  });
  profile.addEventListener('mouseout', () => {
    profile.classList.remove('hover');
  });
});

// Add scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Voltar ao topo';
scrollToTopButton.className = 'scroll-to-top';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});