import Product from '../models/Product.ts'

export function calculateDiscount(product: Product): number {
    const discountRate = (product.discountPercentage ?? 0) / 100;
    return product.price * discountRate;
}