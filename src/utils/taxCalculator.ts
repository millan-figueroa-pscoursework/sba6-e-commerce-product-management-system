import Product from '../models/Product';
import { ValidationError } from '../utils/errorHandler';

export function calculateTax(product: Product): number {
    if (!product || typeof product.price !== 'number' || product.price < 0) {
        throw new ValidationError('Invalid product data: price must be a positive number.');
    }

    let taxRate = 4.75;
    if (product.category === 'grocery') {
        taxRate = 3.0;
    }

    return product.price * (taxRate / 100);
}