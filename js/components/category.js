import { categoryAPI } from "../api.js";

export function createCategoryCard(category) {
  return `<article class="category-card" data-id="${category.id}"><h3>${category.name}</h3></article>`;
}

export function displayCategories(container, categories) {
  if (!container) return;
  container.innerHTML = (categories || []).map(createCategoryCard).join("");
}

export async function loadCategoryFilters(selectElement) {
  const categories = await categoryAPI.getAll();
  if (!selectElement) return categories;

  selectElement.innerHTML = '<option value="">Toutes les categories</option>';
  (categories || []).forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    selectElement.appendChild(option);
  });
  return categories;
}



