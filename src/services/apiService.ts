import Product from "../models/Product";
import { NetworkError, DataError } from "../utils/errorHandler"; // or wherever your two classes live

const BASE_URL = "https://dummyjson.com/products";

export async function fetchProductsSafe(limit = 8): Promise<Product[]> {
    // 1) Try to reach the server
    let res: Response;
    try {
        res = await fetch(`${BASE_URL}?limit=${limit}`);
    } catch {
        throw new NetworkError("Unable to reach the product service. Please check your connection.");
    }
    if (!res.ok) {
        throw new NetworkError(`Product service error (${res.status}). Please try again later.`);
    }
    let data: any;
    try {
        data = await res.json();
    } catch {
        throw new DataError("Received unreadable data from the server.");
    }
    if (!data || !Array.isArray(data.products)) {
        throw new DataError("Received malformed product list.");
    }
}