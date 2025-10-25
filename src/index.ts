import "./style.css";
import Product from "./models/Product";
import { fetchProductsSafe } from "./services/apiService";
import { NetworkError, DataError } from "./utils/errorHandler";

const container = document.querySelector<HTMLDivElement>('#app')!;

function renderProducts(products: Product[]): void {
  container.innerHTML = products
    .map((prod) => {
      const total = prod.getPriceWithDiscount();
      return `
        <div class="product-card">
          <h2>${prod.title}</h2>
          <p><strong>ID:</strong> ${prod.id}</p>
          <p><strong>Description:</strong> ${prod.description}</p>
          <p><strong>Category:</strong> ${prod.category}</p>
          <p><strong>List Price:</strong> $${prod.price.toFixed(2)}</p>
          <p><strong>Discounted Total:</strong> $${total.toFixed(2)} (${prod.discountPercentage ?? 0}% off)</p>
        </div>
      `;
    })
    .join("");
}

renderProducts(products);

