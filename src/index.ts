import "./style.css";
import Product from "./models/Product";
import { calculateTax } from "./utils/taxCalculator";
import { calculateDiscount } from "./utils/discountCalculator";
import { fetchProducts } from "./services/apiService";

const container = document.querySelector<HTMLDivElement>("#app")!;

function renderProducts(products: Product[]): void {
  container.innerHTML = products
    .map((prod) => {
      const hasDiscount = (prod.discountPercentage ?? 0) > 0;

      const discountedPrice = calculateDiscount(prod);

      const tax = calculateTax({ ...prod, price: discountedPrice });
      const totalWithTax = discountedPrice + tax;

      return `
        <div class="product-card">
          <h2>${prod.title}</h2>
          <p><strong>ID:</strong> ${prod.id}</p>
          <p><strong>Description:</strong> ${prod.description}</p>
          <p><strong>Category:</strong> ${prod.category}</p>
          <p><strong>List Price:</strong> $${prod.price.toFixed(2)}</p>
          <p class="${hasDiscount ? "discounted" : ""}">
            <strong>Discounted Price:</strong> $${discountedPrice.toFixed(2)} (${prod.discountPercentage ?? 0}% off)
          </p>
          <p><strong>Total (with tax):</strong> $${totalWithTax.toFixed(2)}</p>
        </div>
      `;
    })
    .join("");
}

try {
  const products: Product[] = await fetchProducts();
  if (products) renderProducts(products);
} catch (error) {
  console.error("Error loading products:", error);
}


