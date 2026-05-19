import { cartAPI } from "./api.js";
import { formatPrice } from "./components/utils.js";

export async function loadCart() {
  return cartAPI.get();
}

export function renderCart(container, cart) {
  if (!container) return;
  const items = cart?.items || [];
  container.innerHTML = items
    .map(
      (item) => `<div class="cart-item"><span>${item.name}</span><strong>${formatPrice(item.total || 0)}</strong></div>`
    )
    .join("");
}

export async function updateQuantity(itemId, quantity) {
  return cartAPI.update(itemId, { quantity });
}

export async function removeFromCart(itemId) {
  return cartAPI.remove(itemId);
}

export async function addToCart(productId, quantity = 1) {
  return cartAPI.add({ productId, quantity });
}

export async function updateCartCount(targetSelector = ".count-in-card") {
  const cart = await loadCart();
  const count = (cart?.items || []).reduce((acc, item) => acc + (item.quantity || 0), 0);
  document.querySelectorAll(targetSelector).forEach((el) => {
    el.textContent = String(count);
  });
}



