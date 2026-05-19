import { orderAPI } from "./api.js";
import { formatDateTime, formatPrice } from "./components/utils.js";

export async function loadOrders() {
  return orderAPI.getUserOrders();
}

export function renderOrders(container, orders) {
  if (!container) return;
  container.innerHTML = (orders || [])
    .map(
      (order) => `<article class="order-card"><h3>Commande #${order.id}</h3><p>${formatDateTime(order.createdAt)}</p><p>${formatPrice(order.total || 0)}</p></article>`
    )
    .join("");
}

export async function cancelOrder(orderId) {
  return orderAPI.cancel(orderId);
}

export async function createOrder(payload) {
  return orderAPI.create(payload);
}



