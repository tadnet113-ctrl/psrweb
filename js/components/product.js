const PRODUCTS = {
  "onduleur-matech-750va": {
    name: "Onduleur Matech 750VA : La Securite Energetique Essentielle",
    price: 120.0,
    oldPrice: 130.0,
    image: "assets/image/24.png",
    description:
      "Protegez votre materiel informatique et vos donnees des coupures de courant et des fluctuations de tension. L'onduleur Matech 750VA fournit une alimentation de secours instantanee.",
    paymentLink: "https://panameservice.mychariow.shop/prd_q68d4y/checkout",
    brand: "Matech",
    stock: 15,
    details: [
      "Puissance : 750VA",
      "Autonomie : 15-20 minutes",
      "Protection : Surcharge, surtension, sous-tension",
      "Connectique : 4 prises secourues, 2 prises filtrees",
      "Garantie : 2 ans"
    ]
  },
  "traceur-gps-coban": {
    name: "Traceurs GPS Coban : Securite et Localisation en Temps Reel",
    price: 130.0,
    oldPrice: 140.0,
    image: "assets/image/23.png",
    paymentLink: "https://panameservice.mychariow.shop/prd_ziyd91/checkout",
    description:
      "Les systemes de suivi GPS Coban offrent une solution fiable et puissante pour la securite de vos vehicules, actifs ou personnes.",
    brand: "Coban",
    stock: 20,
    details: [
      "Precision GPS : 5-10 metres",
      "Batterie : 1500mAh (autonomie 7-15 jours)",
      "Connectivite : GSM/GPRS/4G",
      "Application mobile iOS/Android",
      "Alertes : mouvement, vitesse, geofence"
    ]
  },
  "traceur-gps-sinotrack": {
    name: "Traceurs GPS Sinotrack : Suivi Precis et Securite Maximale",
    price: 120.0,
    oldPrice: 125.0,
    image: "assets/image/25.png",
    description:
      "Les traceurs GPS Sinotrack representent la pointe de la technologie de localisation.",
    paymentLink: "https://panameservice.mychariow.shop/prd_xzzb5z/checkout",
    brand: "Sinotrack",
    stock: 25,
    details: [
      "Precision GPS : 3-5 metres",
      "Batterie : 2000mAh (autonomie 15-30 jours)",
      "Connectivite : 4G/LTE/GPS/GLONASS",
      "Application mobile avec alertes temps reel",
      "Historique de trajets detaille",
      "Geofencing personnalisable"
    ]
  },
  "disque-dur-1to": {
    name: "Stockage Massif et Fiable : Disque Dur (HDD) 1 To",
    price: 120.0,
    oldPrice: 125.0,
    image: "assets/image/20.png",
    paymentLink: "https://panameservice.mychariow.shop/prd_etr83k/checkout",
    description:
      "Ce disque dur de 1 To offre une capacite de stockage massive pour vos fichiers.",
    brand: "Western Digital",
    stock: 30,
    details: [
      "Capacite : 1 To (1000 Go)",
      "Interface : SATA III 6Gb/s",
      "Vitesse de rotation : 7200 RPM",
      "Cache : 64 Mo",
      "Format : 3.5 pouces",
      "Garantie : 3 ans"
    ]
  },
  "disque-dur-2to": {
    name: "Disque Dur (HDD) 2 To : Doublez votre Espace de Stockage",
    price: 120.0,
    oldPrice: 125.0,
    image: "assets/image/26.png",
    description:
      "Avec une capacite genereuse de 2 To, ce disque dur offre tout l'espace necessaire.",
    paymentLink: "https://panameservice.mychariow.shop/prd_fn2p1w/checkout",
    brand: "Seagate",
    stock: 25,
    details: [
      "Capacite : 2 To (2000 Go)",
      "Interface : SATA III 6Gb/s",
      "Vitesse de rotation : 7200 RPM",
      "Cache : 128 Mo",
      "Format : 3.5 pouces",
      "Technologie : SMR"
    ]
  },
  "smart-camera": {
    name: "Smart Camera : Always Keep an Eye on Your Safety",
    price: 120.0,
    oldPrice: 125.0,
    image: "assets/image/27.png",
    description:
      "Cette camera intelligente offre une surveillance avancee avec detection de mouvement.",
    paymentLink: "https://panameservice.mychariow.shop/prd_68e61o/checkout",
    brand: "Smart Security",
    stock: 35,
    details: [
      "Resolution : 1080p Full HD",
      "Vision nocturne : jusqu'a 10m",
      "Angle de vue : 110 degres",
      "Detection de mouvement intelligente",
      "Audio bidirectionnel",
      "Stockage cloud et local"
    ]
  },
  "routeur-tplink": {
    name: "Routeur Sans Fil N 3G/4G TP-Link : Partagez Votre Connexion",
    price: 120.0,
    oldPrice: 125.0,
    image: "assets/image/28.png",
    description:
      "Ce routeur TP-Link permet de partager votre connexion 3G/4G avec plusieurs appareils.",
    paymentLink: "https://panameservice.mychariow.shop/prd_nxkvdp/checkout",
    brand: "TP-Link",
    stock: 40,
    details: [
      "Debit Wi-Fi : 300Mbps",
      "Connectivite : 3G/4G LTE",
      "Ports : 4 ports LAN 10/100Mbps",
      "Wi-Fi : 802.11n",
      "Antennes : 2 antennes externes",
      "Configuration simple"
    ]
  },
  "camera-solaire": {
    name: "Camera de Securite Solaire : Surveillance 100% Autonome",
    price: 120.0,
    oldPrice: 125.0,
    image: "assets/image/29.png",
    description:
      "Cette camera solaire fonctionne de maniere autonome grace a son panneau solaire.",
    paymentLink: "https://panameservice.mychariow.shop/prd_w2s7s2/checkout",
    brand: "EcoVision",
    stock: 20,
    details: [
      "Resolution : 1080p Full HD",
      "Alimentation : Panneau solaire + batterie",
      "Autonomie : Jusqu'a 7 jours sans soleil",
      "Vision nocturne : jusqu'a 15m",
      "Detection PIR",
      "Stockage carte SD"
    ]
  },
  "camera-solaire-4g": {
    name: "Camera Solaire 4G/GSM : Surveillance HD",
    price: 120.0,
    oldPrice: 125.0,
    image: "assets/image/30.png",
    description:
      "Cette camera solaire 4G offre une surveillance sans fil grace a la connectivite 4G.",
    paymentLink: "https://panameservice.mychariow.shop/prd_khgapl/checkout",
    brand: "4G Security",
    stock: 15,
    details: [
      "Resolution : 1080p Full HD",
      "Connectivite : 4G LTE/GSM",
      "Alimentation : Solaire + batterie 20000mAh",
      "Vision nocturne : jusqu'a 20m",
      "Alertes instantanees",
      "Stockage cloud et carte SD"
    ]
  },
  "application-v380": {
    name: "Description de Produit (Application/Plateforme V380)",
    price: 120.0,
    oldPrice: 125.0,
    image: "assets/image/31.png",
    description:
      "Application mobile V380 pour la gestion de vos cameras de surveillance.",
    paymentLink: "https://panameservice.mychariow.shop/prd_zzg8to/checkout",
    brand: "V380",
    stock: 100,
    details: [
      "Compatibilite : iOS 10+, Android 6+",
      "Cameras supportees : Jusqu'a 16",
      "Fonctions : Live view, playback, alertes",
      "Stockage : Cloud gratuit 7 jours",
      "Partage : Multi-utilisateurs"
    ]
  },
  "repeteur-wifi": {
    name: "Repeteur Wi-Fi : Eliminez les Zones Mortes",
    price: 120.0,
    oldPrice: 125.0,
    image: "assets/image/32.png",
    description:
      "Ce repeteur Wi-Fi etend la portee de votre reseau sans fil existant.",
    paymentLink: "https://panameservice.mychariow.shop/prd_xw53br/checkout",
    brand: "NetGear",
    stock: 45,
    details: [
      "Standard : Wi-Fi 802.11ac",
      "Debit : Jusqu'a 1200Mbps",
      "Ports : 1 port Ethernet Gigabit",
      "Antennes : 2 antennes externes",
      "Configuration : Application mobile",
      "Compatibilite : Tous les routeurs Wi-Fi"
    ]
  },
  "modem-lte-cpe": {
    name: "Modem LTE CPE : Connexion Internet Haut Debit Instantanee",
    price: 120.0,
    oldPrice: 125.0,
    image: "assets/image/33.png",
    description:
      "Ce modem LTE CPE offre une connexion internet haut debit via le reseau 4G.",
    paymentLink: "https://panameservice.mychariow.shop/prd_tw3nla/checkout",
    brand: "Huawei",
    stock: 30,
    details: [
      "Debit 4G : Jusqu'a 150Mbps",
      "Wi-Fi : 802.11ac (jusqu'a 300Mbps)",
      "Ports : 4 ports LAN Gigabit",
      "Antennes : 4 antennes externes",
      "Carte SIM integree",
      "Configuration plug-and-play"
    ]
  }
};

const SIMILAR_PRODUCTS = [
  { id: "onduleur-matech-750va", name: "Onduleur Matech 750VA", price: 120.0, image: "assets/image/24.png" },
  { id: "traceur-gps-coban", name: "Traceur GPS Coban", price: 130.0, image: "assets/image/23.png" },
  { id: "traceur-gps-sinotrack", name: "Traceurs GPS Sinotrack", price: 120.0, image: "assets/image/25.png" },
  { id: "disque-dur-1to", name: "Disque Dur 1 To", price: 120.0, image: "assets/image/20.png" },
  { id: "disque-dur-2to", name: "Disque Dur 2 To", price: 120.0, image: "assets/image/26.png" },
  { id: "smart-camera", name: "Smart Camera", price: 120.0, image: "assets/image/27.png" },
  { id: "routeur-tplink", name: "Routeur TP-Link", price: 120.0, image: "assets/image/28.png" },
  { id: "camera-solaire", name: "Camera Solaire", price: 120.0, image: "assets/image/29.png" },
  { id: "camera-solaire-4g", name: "Camera Solaire 4G", price: 120.0, image: "assets/image/30.png" },
  { id: "application-v380", name: "Application V380", price: 120.0, image: "assets/image/31.png" },
  { id: "repeteur-wifi", name: "Repeteur Wi-Fi", price: 120.0, image: "assets/image/32.png" },
  { id: "modem-lte-cpe", name: "Modem LTE CPE", price: 120.0, image: "assets/image/33.png" }
];

function normalizeImagePath(path) {
  if (!path) return "";
  if (path.startsWith("../") || path.startsWith("http")) return path;
  return `../${path}`;
}

function getCurrentProductId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id") || "application-v380";
}

function updateRating(rating) {
  const starsContainer = document.querySelector(".product-name-price .stars");
  if (!starsContainer) return;
  starsContainer.innerHTML = "";

  for (let i = 1; i <= 5; i += 1) {
    const star = document.createElement("i");
    if (i <= Math.floor(rating)) {
      star.className = "fa-solid fa-star";
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      star.className = "fa-solid fa-star-half-stroke";
    } else {
      star.className = "fa-regular fa-star";
    }
    starsContainer.appendChild(star);
  }
}

function showProductError() {
  const title = document.querySelector(".product-title");
  const text = document.querySelector(".product-text");
  const currentPrice = document.querySelector(".current-price");
  const oldPrice = document.querySelector(".old-price");
  if (title) title.textContent = "Produit non trouve";
  if (text) text.textContent = "Le produit que vous recherchez n'est pas disponible.";
  if (currentPrice) currentPrice.innerHTML = "<span>FCFA</span> --";
  if (oldPrice) oldPrice.innerHTML = "<span>FCFA</span> --";
}

function renderProductDetails(product) {
  document.title = `${product.name} - Le Paname Service`;

  const title = document.querySelector(".product-title");
  const currentPrice = document.querySelector(".current-price");
  const oldPrice = document.querySelector(".old-price");
  const brand = document.querySelector(".product-brand");
  const stock = document.querySelector(".product-stock");
  const stockCount = document.querySelector(".stock-count");
  const text = document.querySelector(".product-text");
  const mainImage = document.getElementById("big-img");
  const thumbnailList = document.getElementById("thumbnail-list");
  const detailsList = document.getElementById("product-details-list");

  if (title) title.textContent = product.name;
  if (currentPrice) currentPrice.innerHTML = `<span>FCFA</span> ${product.price.toFixed(2)}`;
  if (oldPrice) oldPrice.innerHTML = `<span>FCFA</span> ${product.oldPrice.toFixed(2)}`;
  if (brand) brand.textContent = product.brand;
  if (stock) stock.textContent = product.stock > 0 ? "En stock" : "Rupture";
  if (stockCount) stockCount.textContent = String(product.stock);
  if (text) text.textContent = product.description;

  const imagePath = normalizeImagePath(product.image);
  if (mainImage) {
    mainImage.src = imagePath;
    mainImage.alt = product.name;
  }

  if (thumbnailList) {
    thumbnailList.innerHTML = "";
    for (let i = 0; i < 4; i += 1) {
      const thumb = document.createElement("img");
      thumb.src = imagePath;
      thumb.alt = `${product.name} ${i + 1}`;
      thumb.className = `thumbnail${i === 0 ? " active" : ""}`;
      thumb.addEventListener("click", () => {
        if (mainImage) mainImage.src = thumb.src;
        document.querySelectorAll(".thumbnail").forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      });
      thumbnailList.appendChild(thumb);
    }
  }

  if (detailsList) {
    detailsList.innerHTML = "";
    product.details.forEach((detail) => {
      const li = document.createElement("li");
      li.textContent = detail;
      detailsList.appendChild(li);
    });
  }

  updateRating(4.5);

  window.currentPaymentLink = product.paymentLink || null;
  const chariowButton = document.querySelector('button[onclick="openPaymentLink()"]');
  if (chariowButton) {
    chariowButton.style.display = product.paymentLink ? "inline-block" : "none";
  }
}

function createProductBox(product) {
  const box = document.createElement("div");
  box.className = "box column product-item swiper-slide";
  const imagePath = normalizeImagePath(product.image);

  box.innerHTML = `
    <div class="product-btn">
      <ul class="product-action">
        <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
        <li><a href="#" data-add-id="${product.id}"><i class="fa-solid fa-cart-arrow-down"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-print"></i></a></li>
      </ul>
    </div>
    <div class="div-img">
      <span class="discount">34%</span>
      <img src="${imagePath}" class="img-product" alt="${product.name}">
      <img src="${imagePath}" class="hover-img" alt="${product.name}">
    </div>
    <div class="content">
      <a class="product-item-link" href="product-detail.html?id=${product.id}">${product.name}</a>
      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>
      <div class="price">
        <span>FCFA ${product.price.toFixed(2)}</span>
        <del>FCFA ${(product.price * 1.1).toFixed(2)}</del>
      </div>
    </div>
  `;

  const addBtn = box.querySelector(`[data-add-id="${product.id}"]`);
  if (addBtn) {
    addBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (typeof window.addProductFromLink === "function") {
        window.addProductFromLink(product.id);
      }
    });
  }

  return box;
}

function loadSimilarProducts() {
  const similarContainer = document.getElementById("similar-products");
  if (!similarContainer) return;
  similarContainer.innerHTML = "";
  SIMILAR_PRODUCTS.forEach((product) => {
    similarContainer.appendChild(createProductBox(product));
  });
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
    <i class="fa-solid fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
    <span>${message}</span>
  `;

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 10px;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 350px;
    border-left: 4px solid ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
    color: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
  `;

  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);
  setTimeout(() => {
    notification.style.transform = "translateX(400px)";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function processQuickBuy(event) {
  if (event) event.preventDefault();

  const productId = getCurrentProductId();
  const product = PRODUCTS[productId];
  if (!product) {
    showNotification("Produit non trouve", "error");
    return;
  }

  const quantity = parseInt(document.getElementById("quantity-input")?.value || "1", 10);
  const name = document.getElementById("quick-name")?.value.trim() || "";
  const phone = document.getElementById("quick-phone")?.value.trim() || "";
  const email = document.getElementById("quick-email")?.value.trim() || "";
  const address = document.getElementById("quick-address")?.value.trim() || "";
  const city = document.getElementById("quick-city")?.value.trim() || "";
  const paymentChoice = document.querySelector('input[name="payment"]:checked');
  const paymentMethod = paymentChoice ? paymentChoice.value : "cash";

  if (!name || !phone || !address || !city) {
    showNotification("Veuillez remplir tous les champs obligatoires (*)", "error");
    return;
  }

  const phoneRegex = /^(6|2)[0-9]{8}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
    showNotification("Veuillez entrer un numero valide", "error");
    return;
  }

  const subtotal = product.price * quantity;
  const shipping = subtotal >= 5000 ? 0 : 1000;
  const total = subtotal + shipping;

  const order = {
    id: `CMD-FAST-${Date.now()}`,
    date: new Date().toISOString(),
    type: "quick_buy",
    customer: { name, phone, email, address, city },
    items: [
      {
        id: productId,
        name: product.name,
        price: product.price,
        image: normalizeImagePath(product.image),
        quantity
      }
    ],
    totals: { subtotal, shipping, total },
    payment: { method: paymentMethod, status: "pending" },
    status: "pending",
    urgency: "high"
  };

  const orders = JSON.parse(localStorage.getItem("panameOrders") || "[]");
  orders.push(order);
  localStorage.setItem("panameOrders", JSON.stringify(orders));

  showNotification(`Commande ${order.id} enregistree avec succes`, "success");

  const whatsappMessage = `Nouvelle commande urgente !\n\nCommande: ${order.id}\nClient: ${name}\nTelephone: ${phone}\nProduit: ${product.name}\nQuantite: ${quantity}\nTotal: ${total.toFixed(2)} FCFA`;
  setTimeout(() => {
    window.open(`https://wa.me/+237657715482?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  }, 1000);

  const form = document.getElementById("quick-buy-form");
  if (form) form.reset();
  const quickBuySection = document.querySelector(".creatacountfast");
  if (quickBuySection) quickBuySection.style.display = "none";

  setTimeout(() => {
    window.location.href = "page remerciement.html";
  }, 3000);
}

function buyNow() {
  if (window.cartSystem && typeof window.cartSystem.buyNow === "function") {
    window.cartSystem.buyNow();
    return;
  }

  const quickBuyForm = document.querySelector(".creatacountfast");
  if (!quickBuyForm) return;
  quickBuyForm.classList.toggle("active");
  quickBuyForm.scrollIntoView({ behavior: "smooth", block: "center" });
  document.getElementById("quick-name")?.focus();
}

function openPaymentLink() {
  if (window.currentPaymentLink) {
    window.location.href = window.currentPaymentLink;
  } else {
    showNotification("Lien de paiement non disponible", "error");
  }
}

function initQuickBuyForm() {
  const quickBuyForm = document.getElementById("quick-buy-form");
  if (quickBuyForm) {
    quickBuyForm.addEventListener("submit", processQuickBuy);
  }
  const quickBuySection = document.querySelector(".creatacountfast");
  if (quickBuySection) {
    quickBuySection.style.display = "none";
  }
}

function initProductPages() {
  if (!document.querySelector(".product-details")) return;

  const productId = getCurrentProductId();
  const product = PRODUCTS[productId];
  if (!product) {
    showProductError();
    return;
  }

  renderProductDetails(product);
  loadSimilarProducts();
  initQuickBuyForm();

  window.products = PRODUCTS;
  window.buyNow = buyNow;
  window.processQuickBuy = processQuickBuy;
  window.showNotification = showNotification;
  window.openPaymentLink = openPaymentLink;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProductPages);
} else {
  initProductPages();
}





