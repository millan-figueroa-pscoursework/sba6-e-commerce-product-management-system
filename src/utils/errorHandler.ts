interface Order {
    productId: string,
    quantity: number,
    price: number
}

// Custom error for invalid quantities, missing fields, etc.
class NetworkError extends Error {
    constructor(message: string) {
        super(message); // call the built-in Error constructor
        this.name = "NetworkError";
    }
}

// Custom error for invalid payments (like negative prices)
class DataError extends Error {
    constructor(message: string) {
        super(message); // call the built-in Error constructor
        this.name = "DataError";
    }
}

