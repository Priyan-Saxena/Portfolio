// ===== Boot Sequence =====
const bootLines = [
  "PRIYAN.OS v1.0",
  "Initializing sandbox...",
  "Loading modules: [GSAP] [THREE] [SCROLL]",
  "Mounting /experience...",
  "Developer · Designer · AWS Campus Ambassador",
  "Status: READY",
  "",
  "Welcome, Priyan."
];

const bootEl = document.getElementById("boot");
const bootText = document.getElementById("bootText");
const enterBtn = document.getElementById("enterBtn");

let lineIndex = 0;
let charIndex = 0;

function typeBoot() {
  if (lineIndex >= bootLines.length) {
    enterBtn.classList.remove("hidden");
    return;
  }

  const line = bootLines[lineIndex];
  if (charIndex <= line.length) {
    bootText.textContent = bootLines.slice(0, lineIndex).join("\n") +
      (lineIndex > 0 ? "\n" : "") + line.slice(0, charIndex) + "█";
    charIndex++;
    setTimeout(typeBoot, 18 + Math.random() * 25);
  } else {
    lineIndex++;
    charIndex = 0;
    setTimeout(typeBoot, 120);
  }
}

// Start after short delay
setTimeout(typeBoot, 400);

enterBtn.addEventListener("click", () => {
  bootEl.classList.add("hidden");
  initExperience();
});

// Also allow Enter key
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !bootEl.classList.contains("hidden")) {
    enterBtn.click();
  }
});

// ===== Three.js Background =====
let scene, camera, renderer, mesh, particles;

function initThree() {
  const canvas = document.getElementById("webgl");
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 4.5;

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Main geometric form
  const geo = new THREE.IcosahedronGeometry(1.4, 1);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xc8ff00,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  // Particle field
  const pCount = 400;
  const positions = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 12;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xc8ff00,
    size: 0.025,
    transparent: true,
    opacity: 0.6
  });
  particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  if (mesh) {
    mesh.rotation.x += 0.002;
    mesh.rotation.y += 0.003;
  }
  if (particles) {
    particles.rotation.y += 0.0004;
  }
  renderer.render(scene, camera);
}

// ===== GSAP + ScrollTrigger =====
function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Fade in hero after boot
  gsap.from(".hero-text > *", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: "power3.out",
    delay: 0.2
  });

  // Section labels
  gsap.utils.toArray(".section-label").forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 85%" },
      x: -20,
      opacity: 0,
      duration: 0.7
    });
  });

  // About text
  gsap.from(".about-copy h2, .about-copy p", {
    scrollTrigger: { trigger: ".about", start: "top 70%" },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1
  });

  // Stats counter
  document.querySelectorAll(".stat .num").forEach(el => {
    const target = +el.dataset.count;
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to(el, {
          innerText: target,
          duration: 1.6,
          snap: { innerText: 1 },
          ease: "power2.out"
        });
      },
      once: true
    });
  });

  // Work items
  gsap.utils.toArray(".work-item").forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: "top 90%" },
      y: 25,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.08
    });
  });

  // Lab cards
  gsap.utils.toArray(".lab-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: "top 88%" },
      y: 30,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.1
    });
  });

  // Contact
  gsap.from(".contact h2, .contact-actions", {
    scrollTrigger: { trigger: ".contact", start: "top 75%" },
    y: 40,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15
  });
}

// ===== Simple tilt on lab cards =====
function initTilt() {
  document.querySelectorAll("[data-tilt]").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotX = ((y - midY) / midY) * -6;
      const rotY = ((x - midX) / midX) * 6;
      card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-3px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// ===== Init after boot =====
function initExperience() {
  initThree();
  initAnimations();
  initTilt();
}

// Fallback: if user waits too long, auto-enter after 8s
setTimeout(() => {
  if (!bootEl.classList.contains("hidden")) {
    enterBtn.classList.remove("hidden");
  }
}, 7000);
