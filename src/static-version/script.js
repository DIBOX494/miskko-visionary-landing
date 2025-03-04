
// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Handle waitlist button click
const waitlistButton = document.getElementById('waitlist-button');
const waitlistSection = document.getElementById('waitlist-section');
let showForm = false;

waitlistButton.addEventListener('click', () => {
  if (showForm) {
    document.getElementById('waitlist-section').scrollIntoView({ behavior: 'smooth' });
  } else {
    showForm = true;
    waitlistSection.classList.add('visible');
    setTimeout(() => {
      document.getElementById('waitlist-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
});

// Handle form submission
const waitlistForm = document.getElementById('waitlist-form');
const emailInput = document.getElementById('email-input');

waitlistForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (!emailInput.value || !emailInput.value.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }
  
  // Simulate form submission
  waitlistForm.innerHTML = '<div style="text-align: center; padding: 2rem;"><p>Thank you for joining the waitlist!</p></div>';
});

// Animated background with particles
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
const setCanvasDimensions = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

setCanvasDimensions();
window.addEventListener('resize', setCanvasDimensions);

// Create particles
const particlesArray = [];
const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 20));

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = Math.random() * 0.2 - 0.1;
    this.speedY = Math.random() * 0.2 - 0.1;
    this.opacity = Math.random() * 0.5 + 0.1;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x > canvas.width) this.x = 0;
    else if (this.x < 0) this.x = canvas.width;
    
    if (this.y > canvas.height) this.y = 0;
    else if (this.y < 0) this.y = canvas.height;
  }
  
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 102, ${this.opacity})`;
    ctx.fill();
  }
}

const init = () => {
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
};

const connect = () => {
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      const dx = particlesArray[a].x - particlesArray[b].x;
      const dy = particlesArray[a].y - particlesArray[b].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const opacity = 0.1 - (distance / 1500);
        ctx.strokeStyle = `rgba(0, 255, 102, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  
  connect();
  
  requestAnimationFrame(animate);
};

// 3D logo effect
const logo = document.querySelector('.logo');

document.addEventListener('mousemove', (e) => {
  if (!logo) return;
  
  const rect = logo.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / 20;
  const y = (e.clientY - rect.top - rect.height / 2) / 20;
  
  logo.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
});

logo.addEventListener('mouseleave', () => {
  logo.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

// Initialize and start animation
init();
animate();
