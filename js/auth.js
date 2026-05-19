import { authAPI } from "./api.js";

export function checkAuth() {
  const token = localStorage.getItem("token");
  document.body.classList.toggle("is-authenticated", Boolean(token));
  return Boolean(token);
}

export async function handleRegister(formElement) {
  const formData = new FormData(formElement);
  await authAPI.register(Object.fromEntries(formData.entries()));
  window.location.href = "./login.html";
}

export async function handleLogin(formElement) {
  const formData = new FormData(formElement);
  const data = await authAPI.login(Object.fromEntries(formData.entries()));
  if (data?.token) {
    localStorage.setItem("token", data.token);
  }
  window.location.href = "../index.html";
}

export function logout() {
  localStorage.removeItem("token");
  window.location.href = "../index.html";
}

export function protectPage() {
  if (!localStorage.getItem("token")) {
    window.location.href = "./login.html";
  }
}

export function isAdmin() {
  try {
    const payload = JSON.parse(atob((localStorage.getItem("token") || "").split(".")[1] || ""));
    return (payload?.roles || []).includes("ADMIN") || payload?.role === "ADMIN";
  } catch {
    return false;
  }
}



