import Product from '../models/Product.ts'

export function calculateTax(product: Product): number {
    let tax = product.price * 4.75;
    if (product.category = 'grocery') {
        tax = product.price * 3.0;
    }
    return tax;
}
