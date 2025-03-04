// Enhanced 3D Logo Animation
document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.rotating-logo');
  
  if (logo) {
    // Add mouse tracking for enhanced 3D effect
    document.addEventListener('mousemove', function(e) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      
      logo.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Reset transform when mouse leaves the window
    document.addEventListener('mouseleave', function() {
      logo.style.transform = 'perspective(1000px) rotateY(0) rotateX(5deg)';
    });
  }
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Waitlist button click handler
  const waitlistButton = document.getElementById('waitlist-button');
  const waitlistSection = document.getElementById('waitlist-section');
  
  if (waitlistButton && waitlistSection) {
    waitlistButton.addEventListener('click', function() {
      waitlistSection.classList.add('active');
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Form submission handler
  const waitlistForm = document.getElementById('waitlist-form');
  
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = document.getElementById('email-input');
      const phoneInput = document.getElementById('phone-input');
      
      if (!emailInput.value || !emailInput.value.includes('@')) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Show loading state
      const submitButton = waitlistForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Processing...';
      submitButton.disabled = true;
      
      // Simulate API call
      setTimeout(function() {
        alert('Thank you for joining the waitlist!');
        
        // Reset form
        emailInput.value = '';
        if (phoneInput) phoneInput.value = '';
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 1500);
    });
  }
  
  // Initialize canvas background
  initCanvas();
});

function initCanvas() {
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

  init();
  animate();
}
