import Product from '../models/Product.ts'
import { ValidationError } from '../utils/errorHandler';

export function calculateDiscount(product: Product): number {
    if (!product || typeof product.price !== 'number' || product.price < 0) {
        throw new ValidationError('Invalid product data: price must be a positive number.');
    }

    const discountRate = (product.discountPercentage ?? 0) / 100;
    return product.price * discountRate;
}