// ================= SMOOTH SCROLL =================
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ================= ANIMATIONS ON SCROLL =================
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// ================= PROJECT STATUS ANIMATION =================
const ongoingProjects = document.querySelectorAll('.project.ongoing');

ongoingProjects.forEach(proj => {
  const status = proj.querySelector('.status');
  let dots = 0;
  setInterval(() => {
    dots = (dots + 1) % 4;
    status.textContent = 'In Progress' + '.'.repeat(dots);
  }, 500);
});

// ================= CONTACT FORM (EMAIL BACKEND ONLY) =================
(function () {
  emailjs.init("VlHJhHO_Ku4Mmyu6D"); // 🔴 replace with EmailJS public key
})();

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_bcay5qg",   // 🔴 replace
    "template_uaxms5r",  // 🔴 replace
    this
  )
  .then(() => {
    if (document.getElementById('formStatus')) {
      document.getElementById('formStatus').textContent = 'Message sent successfully!';
    } else {
      alert('Message sent successfully!');
    }
    this.reset();
  })
  .catch((error) => {
    console.error(error);
    alert('Failed to send message. Try again.');
  });
});
