import { IMAGES } from './config';
import { CATEGORIES } from './categories';

function injectImages(): void {
  const heroImg = document.querySelector<HTMLImageElement>('.hero__image');
  if (heroImg) {
    heroImg.src = IMAGES.hero.src;
    heroImg.alt = IMAGES.hero.alt;
  }

  const galleryGrid = document.querySelector('.gallery__grid');
  if (galleryGrid) {
    galleryGrid.innerHTML = '';
    IMAGES.gallery.forEach(image => {
      const item = document.createElement('div');
      item.className = 'gallery__item';
      item.dataset.fullSrc = image.fullSrc || image.src;

      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      img.loading = 'lazy';

      item.appendChild(img);
      galleryGrid.appendChild(item);
    });
  }
}

function initNavbar(): void {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 60 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
  }, { passive: true });
}

function initSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href')!);
      if (!target) return;
      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) + 8;
      window.scrollTo({ top: (target as HTMLElement).getBoundingClientRect().top + window.scrollY - navHeight, behavior: 'smooth' });
    });
  });
}

function initMobileMenu(): void {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;
  let menuOpen = false;
  function toggleMenu(force?: boolean): void {
    menuOpen = force !== undefined ? force : !menuOpen;
    hamburger!.classList.toggle('open', menuOpen);
    mobileMenu!.classList.toggle('open', menuOpen);
    hamburger!.setAttribute('aria-expanded', String(menuOpen));
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }
  hamburger.addEventListener('click', () => toggleMenu());
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', () => toggleMenu(false)));
}

function initActiveNav(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.navbar__nav a[href^="#"]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => observer.observe(s));
}

function initScrollReveal(): void {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .reveal-title').forEach(el => observer.observe(el));
}

function initStatsCountUp(): void {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;
  let animated = false;
  new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting || animated) return;
    animated = true;
    statsSection.querySelectorAll<HTMLElement>('.stats__number[data-target]').forEach(el => {
      const target = parseInt(el.dataset.target!);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();
      function tick(now: number): void {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 }).observe(statsSection);
}

function initTestimonialsSlider(): void {
  const track = document.getElementById('testiTrack');
  const dots = document.querySelectorAll<HTMLElement>('.testi-dot');
  const slides = track ? track.querySelectorAll('.testi-card') : [];
  if (!track || slides.length === 0) return;
  let current = 0;
  let autoTimer: ReturnType<typeof setInterval>;
  function goToSlide(idx: number): void {
    current = (idx + slides.length) % slides.length;
    track!.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }
  function startAuto(): void { autoTimer = setInterval(() => goToSlide(current + 1), 4000); }
  function resetAuto(): void { clearInterval(autoTimer); startAuto(); }
  document.getElementById('testiPrev')?.addEventListener('click', () => { goToSlide(current - 1); resetAuto(); });
  document.getElementById('testiNext')?.addEventListener('click', () => { goToSlide(current + 1); resetAuto(); });
  dots.forEach(d => {
    d.addEventListener('click', () => { goToSlide(parseInt(d.dataset.idx!)); resetAuto(); });
    d.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { goToSlide(parseInt(d.dataset.idx!)); resetAuto(); } });
  });
  startAuto();
}

function initLightbox(): void {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg') as HTMLImageElement | null;
  const lightboxClose = document.getElementById('lightboxClose');
  if (!lightbox || !lightboxImg || !lightboxClose) return;
  document.querySelector('.gallery__grid')?.addEventListener('click', e => {
    const item = (e.target as HTMLElement).closest<HTMLElement>('.gallery__item');
    if (!item) return;
    lightboxImg.src = item.dataset.fullSrc || (item.querySelector('img') as HTMLImageElement).src;
    lightboxImg.alt = (item.querySelector('img') as HTMLImageElement).alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  });
  function closeLightbox(): void { lightbox!.classList.remove('open'); document.body.style.overflow = ''; }
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

function initDropdowns(): void {
  document.querySelectorAll<HTMLElement>('.nav-dropdown__trigger').forEach(trigger => {
    trigger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger.parentElement?.classList.toggle('keyboard-open'); }
      if (e.key === 'Escape') trigger.parentElement?.classList.remove('keyboard-open');
    });
  });
}

function initContactForm(): void {
  document.querySelector('form')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = (e.target as HTMLFormElement).querySelector<HTMLButtonElement>('[type="submit"]')!;
    const original = btn.textContent!;
    btn.textContent = 'Изпратено успешно!';
    btn.style.background = '#27ae60';
    setTimeout(() => { btn.textContent = original; btn.style.background = ''; (e.target as HTMLFormElement).reset(); }, 3500);
  });
}

/* ============================================================
   CATEGORY MODALS
============================================================ */
function initCategoryModals(): void {
  const modal     = document.getElementById('catModal')!;
  const overlay   = document.getElementById('catModalOverlay')!;
  const closeBtn  = document.getElementById('catModalClose')!;
  const ctaBtn    = document.getElementById('catModalCta') as HTMLAnchorElement;

  const elTrack   = document.getElementById('catModalGalleryTrack')!;
  const elPrev    = document.getElementById('catModalPrev')!;
  const elNext    = document.getElementById('catModalNext')!;
  const elDots    = document.getElementById('catModalDots')!;
  const elBadge   = document.getElementById('catModalBadge')!;
  const elTitle   = document.getElementById('catModalTitle')!;
  const elSubtitle = document.getElementById('catModalSubtitle')!;
  const elDesc    = document.getElementById('catModalDesc')!;
  const elSpecs   = document.getElementById('catModalSpecs')!;
  const elReqs    = document.getElementById('catModalReqs')!;
  const elIncludes = document.getElementById('catModalIncludes')!;
  const elPrice   = document.getElementById('catModalPrice')!;
  const elPriceNote = document.getElementById('catModalPriceNote')!;

  if (!modal) return;

  // Gallery state
  let galleryIndex = 0;
  let galleryTotal = 0;

  function goToSlide(idx: number): void {
    galleryIndex = Math.max(0, Math.min(idx, galleryTotal - 1));
    (elTrack as HTMLElement).style.transform = `translateX(-${galleryIndex * 100}%)`;
    elDots.querySelectorAll('.cat-modal-gallery-dot').forEach((d, i) =>
      d.classList.toggle('active', i === galleryIndex)
    );
    (elPrev as HTMLElement).hidden = galleryIndex === 0;
    (elNext as HTMLElement).hidden = galleryIndex === galleryTotal - 1;
  }

  function openModal(categoryId: string): void {
    const data = CATEGORIES.find(c => c.id === categoryId);
    if (!data) return;

    // Build gallery slides
    galleryTotal = data.images.length;
    elTrack.innerHTML = data.images.map(img =>
      `<div class="cat-modal-gallery-slide"><img src="${img.src}" alt="${img.alt}" loading="lazy"></div>`
    ).join('');

    // Build dots
    elDots.innerHTML = galleryTotal > 1
      ? data.images.map((_, i) =>
          `<button class="cat-modal-gallery-dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="Снимка ${i + 1}"></button>`
        ).join('')
      : '';

    // Reset to first slide
    goToSlide(0);

    // Populate text content
    elBadge.textContent    = data.badge;
    elTitle.textContent    = data.title;
    elSubtitle.textContent = data.subtitle;
    elDesc.textContent     = data.description;
    elPrice.textContent    = data.price;
    elPriceNote.textContent = data.priceNote;

    elSpecs.innerHTML = [
      { label: 'Минимална възраст', value: data.minAge },
      { label: 'Теория',            value: `${data.theoryHours} часа` },
      { label: 'Практика',          value: `${data.practiceHours} часа` },
      { label: 'Изпит',             value: data.examType },
    ].map(s => `
      <div class="cat-modal-spec">
        <div class="cat-modal-spec-label">${s.label}</div>
        <div class="cat-modal-spec-value">${s.value}</div>
      </div>
    `).join('');

    elReqs.innerHTML = data.requirements
      .map(r => `<li class="cat-modal-req">${r}</li>`)
      .join('');

    const checkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF5C1A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
    elIncludes.innerHTML = data.includes
      .map(item => `
        <li class="cat-modal-include">
          <span class="check-dot">${checkSvg}</span>
          ${item}
        </li>
      `).join('');

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal(): void {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Gallery nav
  elPrev.addEventListener('click', () => goToSlide(galleryIndex - 1));
  elNext.addEventListener('click', () => goToSlide(galleryIndex + 1));
  elDots.addEventListener('click', e => {
    const dot = (e.target as HTMLElement).closest<HTMLElement>('.cat-modal-gallery-dot');
    if (dot) goToSlide(parseInt(dot.dataset.idx!));
  });

  // Card buttons
  document.querySelectorAll<HTMLElement>('.cat-card').forEach(card => {
    const btn = card.querySelector<HTMLButtonElement>('.cat-card__link');
    if (!btn) return;
    btn.addEventListener('click', () => openModal(card.dataset.category!));
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
  ctaBtn?.addEventListener('click', () => closeModal());
}

// Run immediately — Astro scripts are deferred, DOM is ready
injectImages();
initNavbar();
initSmoothScroll();
initMobileMenu();
initActiveNav();
initScrollReveal();
initStatsCountUp();
initTestimonialsSlider();
initLightbox();
initDropdowns();
initContactForm();
initCategoryModals();
