import './style.css'
import Product from './models/Product.ts'

const container = document.querySelector<HTMLDivElement>('#app')!;

const products: Product[] = [
  new Product(1, 'The Toxic Avenger', 'VHS Tape', 'Collectibles', 12, 5),
  new Product(2, 'Casablanca', 'DVD', 'Classic Films', 18, 3),
  new Product(3, 'Back to the Future', 'Blu-ray', 'Sci-Fi Classics', 25, 8),
  new Product(4, 'The Godfather', 'Vinyl Soundtrack', 'Music & Memorabilia', 35, 2)
]

function render(products: Product[]): void {
  container.innerHTML = products.map((prod) => {
    const total = prod.getPriceWithDiscount();
    return `
         <div class="product-card">
          <h2>${prod.title}</h2>
          <p><strong>ID:</strong> ${prod.id}</p>
          <p><strong>Description:</strong> ${prod.description}</p>
          <p><strong>Category:</strong> ${prod.category}</p>
          <p class="${total}"><strong>List Price:</strong> $${prod.price.toFixed(2)}</p>
          <p><strong>Discounted Total:</strong> $${total.toFixed(2)} (${prod.discountPercentage ?? 0}% off)</p>
        </div>
      `;
  })
    .join('');
}

render(products);

