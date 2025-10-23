export default class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage?: number;

    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;


    }

    displayDetails(): string {
        return `ID: ${this.id}, Title: ${this.title}, Description: ${this.description}, Category: ${this.category}, Price: ${this.price}`
    }

    getPriceWithDiscount(): number {
        return this.price * (0.08 + 1);
    }

}

const product1 = new Product(1, 'Toxic Avengers', 'VHS Tape', 'Collectibles', 12, 5);
console.log(product1);