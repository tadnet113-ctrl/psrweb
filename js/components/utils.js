export function formatPrice(value) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "XAF", maximumFractionDigits: 0 }).format(value || 0);
}

export function formatDate(value) {
  return new Date(value).toLocaleDateString("fr-FR");
}

export function formatDateTime(value) {
  return new Date(value).toLocaleString("fr-FR");
}

export function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || ""));
}

export function isValidPhone(phone) {
  return /^\+?[0-9\s-]{7,20}$/.test(String(phone || ""));
}

export function truncateText(text, maxLength = 120) {
  const s = String(text || "");
  return s.length > maxLength ? `${s.slice(0, maxLength)}...` : s;
}

export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}



