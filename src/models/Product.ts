// interface product {
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     price: number;
//     discountPercentage: number;
// }

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
        return `ID: ${this.id} Title: ${this.title} Description: ${this.description} Category: ${this.category} Price: ${this.price}`
    }

    getPriceWithDiscount(): number {
        const discount = (this.discountPercentage ?? 0) / 100;
        return this.price * (1 - discount);
    }
}


