var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable:true
    },
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop:true,
    on: {
        init: function () {
            // Désactiver l'autoplay au survol
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            });
            
            // Réactiver l'autoplay quand la souris quitte
            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    }
  });

  var swiper = new Swiper(".deals", {
    slidesPerView: 2,
    spaceBetween: 30,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      on: {
        init: function () {
            // Désactiver l'autoplay au survol
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            });
            
            // Réactiver l'autoplay quand la souris quitte
            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    },
      breakpoints:{
        1200:{
          slidesPerView : 2,
        },
        990 : {
          slidesPerView : 1,
        },
        0 :{
          slidesPerView : 1,
        }
        
      }
  });


  
  var swiper = new Swiper(".sale-sec", {
    slidesPerView: 5,
    spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      on: {
        init: function () {
            // Désactiver l'autoplay au survol
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            });
            
            // Réactiver l'autoplay quand la souris quitte
            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    },
      breakpoints:{
        1400:{
          slidesPerView: 5,
        },
        1200:{
          slidesPerView : 4,
        },
        800:{
          slidesPerView : 3,
          spaceBetween: 30,
        },
        650 :{
          slidesPerView : 3,
          spaceBetween: 15,
        },
        0 :{
          slidesPerView : 2,
          spaceBetween: 10,
        }
        
      }
  });


  
  var swiper = new Swiper(".swip-with-img", {
    slidesPerView: 4,
    spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      on: {
        init: function () {
            // Désactiver l'autoplay au survol
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            });
            
            // Réactiver l'autoplay quand la souris quitte
            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    },
      breakpoints:{
        1400:{
          slidesPerView: 4,
        },
        1100:{
          slidesPerView : 3,
        },
        800:{
          slidesPerView : 2,
          spaceBetween: 30,
        },
        700 :{
          slidesPerView : 2,
          spaceBetween: 15,
        },
        0 :{
          slidesPerView : 2,
          spaceBetween: 10,
        }
        
      }
  });
  


  /* side bar in Resbonsive */

  function initSideBarHandlers() {
    let btnCloseSide = document.getElementById("btn-close");
    let sideBar = document.getElementById("side-bar");
    let btnOpenSide = document.getElementById("open-side");

    if (!btnCloseSide || !sideBar || !btnOpenSide) return;

    btnOpenSide.onclick = () => {
      sideBar.classList.add('active')
    }
    btnCloseSide.onclick = () => {
      sideBar.classList.remove('active')
    }
  }

  document.addEventListener('DOMContentLoaded', initSideBarHandlers);
  document.addEventListener('header:loaded', initSideBarHandlers);

  function initHeaderTicker() {
    const header = document.querySelector('header');
    if (!header) return;
    if (header.querySelector('.header-ticker')) return;

    const anchor = header.querySelector('.header-top') || header.firstElementChild;
    const ticker = document.createElement('div');
    ticker.className = 'header-ticker';
    ticker.innerHTML =
      '<div class="header-ticker__track">' +
      '<div class="header-ticker__content">' +
      '<span>Livraison rapide 24h</span>' +
      '<span>Produits authentiques</span>' +
      '<span>Service client 24/7</span>' +
      '<span>Retrait en magasin -10%</span>' +
      '</div>' +
      '<div class="header-ticker__content" aria-hidden="true">' +
      '<span>Livraison rapide 24h</span>' +
      '<span>Produits authentiques</span>' +
      '<span>Service client 24/7</span>' +
      '<span>Retrait en magasin -10%</span>' +
      '</div>' +
      '</div>';

    if (anchor) {
      header.insertBefore(ticker, anchor);
    } else {
      header.prepend(ticker);
    }
  }

  document.addEventListener('DOMContentLoaded', initHeaderTicker);
  document.addEventListener('header:loaded', initHeaderTicker);

  function initProductCardImageNavigation() {
    if (document.documentElement.dataset.productImageNavBound === '1') return;
    document.documentElement.dataset.productImageNavBound = '1';

    document.addEventListener('click', function (e) {
      const imgZone = e.target.closest('.product-item .div-img');
      if (!imgZone) return;

      if (e.target.closest('a')) return;

      const productItem = imgZone.closest('.product-item');
      if (!productItem) return;

      const link = productItem.querySelector('.product-item-link[href]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      window.location.href = href;
    });
  }

  document.addEventListener('DOMContentLoaded', initProductCardImageNavigation);

  function initProductImageLightbox() {
    if (document.documentElement.dataset.productImageLightboxBound === '1') return;
    document.documentElement.dataset.productImageLightboxBound = '1';

    const ensureLightbox = () => {
      let el = document.querySelector('.image-lightbox');
      if (el) return el;

      el = document.createElement('div');
      el.className = 'image-lightbox';
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-modal', 'true');
      el.innerHTML =
        '<button type="button" class="image-lightbox__close" aria-label="Fermer">&times;</button>' +
        '<img class="image-lightbox__img" alt="">';
      document.body.appendChild(el);

      const close = () => {
        el.classList.remove('is-open');
        el.removeAttribute('aria-hidden');
        document.body.classList.remove('lightbox-open');
      };

      el.addEventListener('click', (evt) => {
        if (evt.target === el) close();
      });
      el.querySelector('.image-lightbox__close')?.addEventListener('click', close);

      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') close();
      });

      el._close = close;
      return el;
    };

    document.addEventListener('click', (e) => {
      const img = e.target.closest('.product-details .img-product #big-img');
      if (!img) return;

      const src = img.getAttribute('src');
      if (!src) return;

      const lightbox = ensureLightbox();
      const lightboxImg = lightbox.querySelector('.image-lightbox__img');
      if (!lightboxImg) return;

      lightboxImg.setAttribute('src', src);
      lightboxImg.setAttribute('alt', img.getAttribute('alt') || '');

      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
    });
  }

  document.addEventListener('DOMContentLoaded', initProductImageLightbox);

  function initSupportNumberRotation() {
    const el = document.querySelector('header .support h4');
    if (!el) return;
    if (el.querySelector('.support-number')) return;

    const numbers = [
      '+237 657715482',
      '+237 676391816',
      'lepanameservice@gmail.com'
    ];

    let index = 0;
    const span = document.createElement('span');
    span.className = 'support-number is-in';
    span.textContent = numbers[index];
    el.textContent = '';
    el.appendChild(span);

    setInterval(() => {
      span.classList.remove('is-in');
      span.classList.add('is-out');

      window.setTimeout(() => {
        index = (index + 1) % numbers.length;
        span.textContent = numbers[index];
        span.classList.remove('is-out');
        span.classList.add('is-in');
      }, 240);
    }, 2500);
  }

  document.addEventListener('DOMContentLoaded', initSupportNumberRotation);
  document.addEventListener('header:loaded', initSupportNumberRotation);

  function initHeaderRightActions() {
    const container = document.querySelector('header .header-info .contanier');
    if (!container) return;
    if (container.querySelector('.header-actions-right')) return;

    const btn = container.querySelector(':scope > a.btn[href*="sign-in-page"]') || container.querySelector(':scope > a.btn');
    const cards = container.querySelectorAll(':scope > .card');
    const cart = cards[0];
    const heart = cards[1];

    if (!btn || !cart || !heart) return;

    if (!btn.classList.contains('header-icon-btn')) {
      btn.classList.remove('btn');
      btn.classList.add('header-icon-btn');
      btn.setAttribute('data-tooltip', 'Se connecter');
      btn.setAttribute('aria-label', 'Se connecter');
      btn.innerHTML = '<i class="fa-solid fa-user"></i>';
    }

    const right = document.createElement('div');
    right.className = 'header-actions-right';

    right.appendChild(btn);
    right.appendChild(cart);
    right.appendChild(heart);

    container.appendChild(right);
  }

  document.addEventListener('DOMContentLoaded', initHeaderRightActions);
  document.addEventListener('header:loaded', initHeaderRightActions);

  function initHeaderInfoLayout() {
    initHeaderRightActions();

    const container = document.querySelector('header .header-info .contanier');
    if (!container) return;

    if (container.querySelector('.header-info-left') || container.querySelector('.header-info-center')) return;

    const right = container.querySelector(':scope > .header-actions-right');
    const searchBar = container.querySelector(':scope > .search-bar');

    const children = Array.from(container.children);
    const logoLink = children.find((el) => el.tagName === 'A' && el.querySelector('img'));
    const deliveryCard = children.find(
      (el) => el.classList && el.classList.contains('card') && el.querySelector('.price')
    );

    const left = document.createElement('div');
    left.className = 'header-info-left';
    const center = document.createElement('div');
    center.className = 'header-info-center';

    if (logoLink) left.appendChild(logoLink);
    if (deliveryCard) left.appendChild(deliveryCard);
    if (searchBar) center.appendChild(searchBar);

    container.prepend(left);

    if (right) {
      container.insertBefore(center, right);
    } else {
      container.appendChild(center);
    }
  }

  document.addEventListener('DOMContentLoaded', initHeaderInfoLayout);
  document.addEventListener('header:loaded', initHeaderInfoLayout);

  function initHeaderBottomSideIcon() {
    const openSide = document.getElementById('open-side');
    const bottomContainer = document.querySelector('header .header-bottom .contanier');
    if (!openSide || !bottomContainer) return;

    bottomContainer.appendChild(openSide);
  }

  function alignOpenSideUnderCart() {
    const openSide = document.getElementById('open-side');
    const bottomContainer = document.querySelector('header .header-bottom .contanier');
    const cartIcon = document.querySelector('header .header-actions-right .card a i');
    if (!openSide || !bottomContainer || !cartIcon) return;

    const bottomRect = bottomContainer.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();
    const targetCenterX = cartRect.left + cartRect.width / 2;

    const openWidth = openSide.getBoundingClientRect().width || 34;
    const left = Math.max(0, Math.min(bottomRect.width - openWidth, targetCenterX - bottomRect.left - openWidth / 2));
    openSide.style.left = `${left}px`;
  }

  document.addEventListener('DOMContentLoaded', initHeaderBottomSideIcon);
  document.addEventListener('header:loaded', initHeaderBottomSideIcon);

  document.addEventListener('DOMContentLoaded', alignOpenSideUnderCart);
  document.addEventListener('header:loaded', alignOpenSideUnderCart);
  window.addEventListener('resize', alignOpenSideUnderCart);

  function reorderHeaderNavLinks() {
    const nav = document.querySelector('header .header-bottom .nav-links');
    if (!nav) return;

    const items = Array.from(nav.querySelectorAll(':scope > li'));
    if (items.length === 0) return;

    const pickBy = (predicate) => {
      const idx = items.findIndex(predicate);
      if (idx === -1) return null;
      return items.splice(idx, 1)[0];
    };

    const textOf = (li) => {
      const a = li && li.querySelector('a');
      return (a ? a.textContent : '').trim().toLowerCase();
    };
    const hrefOf = (li) => {
      const a = li && li.querySelector('a');
      const href = a ? a.getAttribute('href') : '';
      return (href || '').trim().toLowerCase();
    };

    const ordered = [];

    ordered.push(
      pickBy((li) => hrefOf(li) === 'index.html' || textOf(li) === 'accueil')
    );
    ordered.push(pickBy((li) => hrefOf(li) === 'paname market.html' || textOf(li).includes('paname market')));
    ordered.push(pickBy((li) => hrefOf(li) === 'paname wedding.html' || textOf(li).includes('paname wedding')));
    ordered.push(pickBy((li) => hrefOf(li) === 'paname house.html' || textOf(li).includes('paname house')));
    ordered.push(pickBy((li) => hrefOf(li) === 'paname travel.html' || textOf(li).includes('paname travel')));
    ordered.push(pickBy((li) => hrefOf(li) === 'livraison express.html' || textOf(li).includes('livraison')));

    const servicesLi = pickBy((li) => {
      const t = textOf(li);
      if (t.includes('nos services') || t.includes('paname service')) return true;
      const dropdown = li.querySelector('.drobdwon');
      return !!(dropdown && dropdown.querySelector('a[href*="paname market"],a[href*="paname wedding"],a[href*="paname house"]'));
    });

    if (servicesLi) {
      const a = servicesLi.querySelector('a');
      if (a) {
        a.textContent = 'Paname service';
        a.setAttribute('href', '');
      }
      ordered.push(servicesLi);
    }

    const storeLi = pickBy((li) => {
      const t = textOf(li);
      if (t.includes('paname store')) return true;
      const dropdown = li.querySelector('.drobdwon');
      return !!(dropdown && dropdown.querySelector('a') && !dropdown.querySelector('a[href*="paname market"],a[href*="paname wedding"],a[href*="paname house"]'));
    });

    if (storeLi) ordered.push(storeLi);

    const finalOrder = ordered.filter(Boolean).concat(items);
    finalOrder.forEach((li) => nav.appendChild(li));
  }

  document.addEventListener('DOMContentLoaded', reorderHeaderNavLinks);
  document.addEventListener('header:loaded', reorderHeaderNavLinks);

  function disableHeaderTopHeartbeat() {
    const header = document.querySelector('header');
    if (!header) return;

    const nodes = header.querySelectorAll('.header-top .heartbeat');
    if (!nodes || nodes.length === 0) return;

    nodes.forEach((el) => el.classList.remove('heartbeat'));
  }

  document.addEventListener('DOMContentLoaded', disableHeaderTopHeartbeat);

