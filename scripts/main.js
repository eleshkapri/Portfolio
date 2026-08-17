/**
 * Henry's Portfolio - Interactive Logic & Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initSkillFilters();
  initPolaroidInteractions();
  initInteractiveStickers();
  initClipboardAndContact();
  initAudioFeedback();
  initProjectsModal();
});

/* 1. Scroll Progress Bar */
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    width: 0%;
    background: linear-gradient(90deg, #1abcfe, #b678ff, #ff6496, #2ad03d);
    z-index: 9999;
    transition: width 0.1s ease-out;
    pointer-events: none;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

/* 2. Interactive Skill Tag Filtering & Highlights */
function initSkillFilters() {
  const skillChips = document.querySelectorAll('.skill-chip');
  const storyBlocks = document.querySelectorAll('.story-block');

  skillChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const skillName = chip.dataset.skill || chip.textContent.trim().toLowerCase();
      const isActive = chip.classList.contains('active');

      skillChips.forEach(c => c.classList.remove('active'));

      if (!isActive) {
        chip.classList.add('active');
        playAudioPop(440, 0.08);

        // Highlight matching story blocks
        storyBlocks.forEach(block => {
          const blockSkills = (block.dataset.skills || '').toLowerCase();
          if (blockSkills.includes(skillName)) {
            block.style.opacity = '1';
            block.style.transform = 'scale(1.02)';
            block.style.boxShadow = '0 0 35px rgba(182, 120, 255, 0.25)';
            block.style.borderRadius = '16px';
            block.style.padding = '12px';
            block.style.transition = 'all 0.4s ease';
          } else {
            block.style.opacity = '0.35';
            block.style.transform = 'scale(0.98)';
            block.style.boxShadow = 'none';
          }
        });
      } else {
        // Reset all blocks
        resetStoryBlocks(storyBlocks);
      }
    });
  });
}

function resetStoryBlocks(storyBlocks) {
  storyBlocks.forEach(block => {
    block.style.opacity = '1';
    block.style.transform = 'none';
    block.style.boxShadow = 'none';
    block.style.padding = '0';
  });
}

/* 3. 3D Tilt Effect & Lightbox Zoom for Polaroids */
function initPolaroidInteractions() {
  const polaroids = document.querySelectorAll('.polaroid-card');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');

  polaroids.forEach(card => {
    // 3D Parallax Tilt
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 16;
      const rotateY = (x / rect.width) * 16;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      const defaultRot = card.dataset.tilt || '0';
      card.style.transform = `rotate(${defaultRot}deg)`;
    });

    // Lightbox modal opener
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const caption = card.querySelector('.polaroid-caption');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Portfolio image preview';
        if (lightboxCaption && caption) {
          lightboxCaption.textContent = caption.textContent;
        }
        lightbox.classList.add('active');
        playAudioPop(520, 0.1);
      }
    });
  });

  if (closeBtn && lightbox) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      playAudioPop(330, 0.08);
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  // Keyboard Escape to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
    }
  });
}

/* 4. Interactive Stickers & Playful Animations */
function initInteractiveStickers() {
  const stickers = document.querySelectorAll('.interactive-sticker');

  stickers.forEach(sticker => {
    sticker.addEventListener('click', (e) => {
      createSparkleBurst(e.clientX, e.clientY);
      playAudioPop(650, 0.12);

      sticker.animate([
        { transform: 'scale(1) rotate(0deg)' },
        { transform: 'scale(1.28) rotate(14deg)' },
        { transform: 'scale(0.92) rotate(-10deg)' },
        { transform: 'scale(1.1) rotate(5deg)' },
        { transform: 'scale(1) rotate(0deg)' }
      ], {
        duration: 500,
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      });
    });
  });
}

/* Sparkle Particle Generator */
function createSparkleBurst(x, y) {
  const colors = ['#ffd32a', '#1abcfe', '#ff6496', '#2ad03d', '#b678ff'];
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = (Math.PI * 2 * i) / 8;
    const distance = 40 + Math.random() * 30;

    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 8px;
      height: 8px;
      background: ${color};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      box-shadow: 0 0 10px ${color};
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    `;
    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`;
      particle.style.opacity = '0';
    });

    setTimeout(() => particle.remove(), 650);
  }
}

/* 5. One-Click Copy Email & Direct Mailto */
function initClipboardAndContact() {
  const emailBar = document.getElementById('emailContactBar');
  const toast = document.getElementById('toastNotification');
  const toastText = document.getElementById('toastText');

  if (emailBar) {
    emailBar.addEventListener('click', (e) => {
      const email = 'henry92@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email copied to clipboard! (${email})`);
        playAudioPop(780, 0.15);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastText = document.getElementById('toastText');
  if (toast && toastText) {
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* 6. Subtle Joyful Audio Pop (Web Audio API) */
let audioCtx = null;
function playAudioPop(freq = 440, duration = 0.1) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Graceful fallback if audio is blocked
  }
}
function initAudioFeedback() {}

/* 7. Notion / Framer Projects Modal Preview */
function initProjectsModal() {
  const notionCard = document.getElementById('notionCard');
  const projectsModal = document.getElementById('projectsModal');
  const closeProjectsBtn = document.getElementById('closeProjectsBtn');

  if (notionCard && projectsModal) {
    notionCard.addEventListener('click', (e) => {
      // If user clicked direct link, open modal or allow navigation
      e.preventDefault();
      projectsModal.classList.add('active');
      playAudioPop(580, 0.1);
    });
  }

  if (closeProjectsBtn && projectsModal) {
    closeProjectsBtn.addEventListener('click', () => {
      projectsModal.classList.remove('active');
    });

    projectsModal.addEventListener('click', (e) => {
      if (e.target === projectsModal) {
        projectsModal.classList.remove('active');
      }
    });
  }
}
