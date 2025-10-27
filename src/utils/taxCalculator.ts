import Product from '../models/Product';
import { ValidationError } from '../utils/errorHandler';

type Taxable = { price: number; category: string };

export function calculateTax(product: Taxable): number {
    if (!product || typeof product.price !== 'number' || product.price < 0) {
        throw new ValidationError('Invalid product data: price must be a positive number.');
    }

    let taxRate = 4.75;
    if (product.category === 'grocery') {
        taxRate = 3.0;
    }

    return product.price * (taxRate / 100);
}