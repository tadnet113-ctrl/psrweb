const API_BASE_URL = "/api";
const TOKEN_KEY = "token";
const MOCK_FLAG_KEY = "use_mock_api";

const STORAGE_KEYS = {
  products: "mock_products",
  users: "mock_users",
  cart: "mock_cart",
  orders: "mock_orders",
};

const DEFAULT_PRODUCTS = [
  {
    id: "onduleur-matech-750va",
    name: "Onduleur Matech 750VA",
    price: 120,
    category: "Informatique",
    image: "assets/image/24.png",
  },
  {
    id: "traceur-gps-coban",
    name: "Traceur GPS Coban",
    price: 130,
    category: "Auto-Moto",
    image: "assets/image/23.png",
  },
  {
    id: "camera-solaire",
    name: "Camera Solaire",
    price: 95,
    category: "Securite",
    image: "assets/image/18.png",
  },
];

function delay(ms = 120) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (_) {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function parseNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
}

function isMockEnabled() {
  const flag = localStorage.getItem(MOCK_FLAG_KEY);
  return flag === "1" || flag === "true";
}

function toast(message, type = "info") {
  if (!message) return;
  if (typeof window.showToast === "function") {
    window.showToast(message, type);
    return;
  }
  if (type === "error") {
    console.error(message);
  } else {
    console.log(message);
  }
}

function handleUnauthorized() {
  clearAuth();
  toast("Session expiree. Veuillez vous reconnecter.", "error");

  document.dispatchEvent(new CustomEvent("auth:logout", { detail: { reason: "401" } }));

  const currentPath = window.location.pathname || "";
  if (!currentPath.includes("/pages/login.html")) {
    window.location.href = "/pages/login.html";
  }
}

function buildHeaders(optionsHeaders) {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    ...(optionsHeaders || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: buildHeaders(options.headers),
  });

  if (response.status === 401) {
    handleUnauthorized();
    throw new Error("Unauthorized");
  }

  if (!response.ok) {
    const message = (await response.text()) || "API request failed";
    toast(message, "error");
    throw new Error(message);
  }

  if (response.status === 204) return null;

  const data = await response.json();
  return data;
}

function ensureSeedData() {
  if (!readJSON(STORAGE_KEYS.products, null)) {
    writeJSON(STORAGE_KEYS.products, DEFAULT_PRODUCTS);
  }
  if (!readJSON(STORAGE_KEYS.users, null)) {
    writeJSON(STORAGE_KEYS.users, []);
  }
  if (!readJSON(STORAGE_KEYS.cart, null)) {
    writeJSON(STORAGE_KEYS.cart, { items: [] });
  }
  if (!readJSON(STORAGE_KEYS.orders, null)) {
    writeJSON(STORAGE_KEYS.orders, []);
  }
}

function createToken(email) {
  const payload = btoa(JSON.stringify({ sub: email, role: "USER", iat: Date.now() }));
  return `mock.${payload}.token`;
}

const mockAPI = {
  async getProducts() {
    await delay();
    return readJSON(STORAGE_KEYS.products, []);
  },

  async getProductById(id) {
    await delay();
    const item = readJSON(STORAGE_KEYS.products, []).find((p) => p.id === id);
    if (!item) throw new Error("Produit introuvable");
    return item;
  },

  async getCategories() {
    await delay();
    const names = [
      ...new Set(readJSON(STORAGE_KEYS.products, []).map((p) => p.category).filter(Boolean)),
    ];
    return names.map((name, idx) => ({ id: `cat-${idx + 1}`, name }));
  },

  async login(payload) {
    await delay();
    const email = String(payload?.email || "").trim().toLowerCase();
    const password = String(payload?.password || "");
    if (!email || !password) throw new Error("Email et mot de passe requis");

    const user = readJSON(STORAGE_KEYS.users, []).find(
      (u) => u.email === email && u.password === password
    );

    if (!user) throw new Error("Identifiants invalides");

    const token = createToken(email);
    localStorage.setItem(TOKEN_KEY, token);
    toast("Connexion reussie", "success");

    return { token, user: { id: user.id, email: user.email, name: user.name || "Utilisateur" } };
  },

  async register(payload) {
    await delay();
    const email = String(payload?.email || "").trim().toLowerCase();
    const password = String(payload?.password || "");
    if (!email || !password) throw new Error("Email et mot de passe requis");

    const users = readJSON(STORAGE_KEYS.users, []);
    if (users.some((u) => u.email === email)) throw new Error("Cet email est deja utilise");

    const newUser = {
      id: `u_${Date.now()}`,
      email,
      password,
      name: String(payload?.name || "Utilisateur").trim(),
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    writeJSON(STORAGE_KEYS.users, users);
    toast("Compte cree avec succes", "success");

    return { id: newUser.id, email: newUser.email, name: newUser.name };
  },

  async getCart() {
    await delay();
    return readJSON(STORAGE_KEYS.cart, { items: [] });
  },

  async addCartItem(payload) {
    await delay();
    const productId = String(payload?.productId || "").trim();
    const quantity = Math.max(1, parseNumber(payload?.quantity, 1));
    if (!productId) throw new Error("productId requis");

    const product = readJSON(STORAGE_KEYS.products, []).find((p) => p.id === productId);
    if (!product) throw new Error("Produit introuvable");

    const cart = readJSON(STORAGE_KEYS.cart, { items: [] });
    const existing = cart.items.find((i) => i.productId === productId);

    if (existing) {
      existing.quantity += quantity;
      existing.total = existing.quantity * existing.price;
    } else {
      cart.items.push({
        id: `ci_${Date.now()}`,
        productId,
        name: product.name,
        image: product.image,
        price: parseNumber(product.price, 0),
        quantity,
        total: parseNumber(product.price, 0) * quantity,
      });
    }

    writeJSON(STORAGE_KEYS.cart, cart);
    toast("Produit ajoute au panier", "success");
    return cart;
  },

  async updateCartItem(itemId, payload) {
    await delay();
    const quantity = Math.max(1, parseNumber(payload?.quantity, 1));
    const cart = readJSON(STORAGE_KEYS.cart, { items: [] });

    const item = cart.items.find((i) => i.id === itemId);
    if (!item) throw new Error("Article du panier introuvable");

    item.quantity = quantity;
    item.total = item.price * quantity;

    writeJSON(STORAGE_KEYS.cart, cart);
    toast("Panier mis a jour", "success");
    return cart;
  },

  async removeCartItem(itemId) {
    await delay();
    const cart = readJSON(STORAGE_KEYS.cart, { items: [] });
    cart.items = cart.items.filter((i) => i.id !== itemId);
    writeJSON(STORAGE_KEYS.cart, cart);
    toast("Article supprime du panier", "info");
    return cart;
  },

  async createOrder(payload) {
    await delay();
    const orders = readJSON(STORAGE_KEYS.orders, []);
    const cart = readJSON(STORAGE_KEYS.cart, { items: [] });

    const items =
      payload?.items && payload.items.length
        ? payload.items
        : cart.items;

    if (!items.length) throw new Error("Panier vide");

    const normalizedItems = items.map((i) => ({
      productId: i.productId,
      name: i.name,
      quantity: parseNumber(i.quantity, 1),
      price: parseNumber(i.price, 0),
    }));

    const total = normalizedItems.reduce((sum, i) => sum + i.quantity * i.price, 0);

    const order = {
      id: `ord_${Date.now()}`,
      status: "PENDING",
      createdAt: new Date().toISOString(),
      total,
      items: normalizedItems,
      customer: payload?.customer || null,
    };

    orders.push(order);
    writeJSON(STORAGE_KEYS.orders, orders);
    writeJSON(STORAGE_KEYS.cart, { items: [] });
    toast("Commande creee", "success");

    return order;
  },

  async getOrders() {
    await delay();
    return readJSON(STORAGE_KEYS.orders, []);
  },

  async cancelOrder(id) {
    await delay();
    const orders = readJSON(STORAGE_KEYS.orders, []);
    const order = orders.find((o) => o.id === id);
    if (!order) throw new Error("Commande introuvable");

    order.status = "CANCELED";
    writeJSON(STORAGE_KEYS.orders, orders);
    toast("Commande annulee", "info");

    return order;
  },

  async startPayment(payload) {
    await delay();
    toast("Paiement initialise", "success");
    return {
      status: "PENDING",
      provider: payload?.provider || "MOCK",
      checkoutUrl: "#mock-checkout",
      reference: `pay_${Date.now()}`,
    };
  },
};

ensureSeedData();

function usingMock() {
  return isMockEnabled();
}

export const productAPI = {
  getAll: () => (usingMock() ? mockAPI.getProducts() : request("/products")),
  getById: (id) => (usingMock() ? mockAPI.getProductById(id) : request(`/products/${id}`)),
};

export const categoryAPI = {
  getAll: () => (usingMock() ? mockAPI.getCategories() : request("/categories")),
};

export const authAPI = {
  login: (payload) =>
    usingMock()
      ? mockAPI.login(payload)
      : request("/auth/login", { method: "POST", body: JSON.stringify(payload) }),
  register: (payload) =>
    usingMock()
      ? mockAPI.register(payload)
      : request("/auth/register", { method: "POST", body: JSON.stringify(payload) }),
};

export const cartAPI = {
  get: () => (usingMock() ? mockAPI.getCart() : request("/cart")),
  add: (payload) =>
    usingMock()
      ? mockAPI.addCartItem(payload)
      : request("/cart/items", { method: "POST", body: JSON.stringify(payload) }),
  update: (itemId, payload) =>
    usingMock()
      ? mockAPI.updateCartItem(itemId, payload)
      : request(`/cart/items/${itemId}`, { method: "PATCH", body: JSON.stringify(payload) }),
  remove: (itemId) =>
    usingMock()
      ? mockAPI.removeCartItem(itemId)
      : request(`/cart/items/${itemId}`, { method: "DELETE" }),
};

export const orderAPI = {
  create: (payload) =>
    usingMock()
      ? mockAPI.createOrder(payload)
      : request("/orders", { method: "POST", body: JSON.stringify(payload) }),
  getUserOrders: () => (usingMock() ? mockAPI.getOrders() : request("/orders/me")),
  cancel: (id) =>
    usingMock()
      ? mockAPI.cancelOrder(id)
      : request(`/orders/${id}/cancel`, { method: "POST" }),
};

export const paymentAPI = {
  start: (payload) =>
    usingMock()
      ? mockAPI.startPayment(payload)
      : request("/payments", { method: "POST", body: JSON.stringify(payload) }),
};

export const apiConfig = {
  API_BASE_URL,
  TOKEN_KEY,
  MOCK_FLAG_KEY,
  enableMock() {
    localStorage.setItem(MOCK_FLAG_KEY, "1");
  },
  disableMock() {
    localStorage.removeItem(MOCK_FLAG_KEY);
  },
  isMockEnabled,
};
