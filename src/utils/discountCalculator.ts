import Product from '../models/Product';
import { ValidationError } from '../utils/errorHandler';

type ProductType = { price: number; discountPercentage?: number };

export function calculateDiscount(product: ProductType): number {
    if (!product || typeof product.price !== 'number' || product.price < 0) {
        throw new ValidationError('Invalid product data: price must be a positive number.');
    }

    const discountRate = (product.discountPercentage ?? 0) / 100;
    const discountedPrice = product.price * (1 - discountRate);
    return discountedPrice;
}