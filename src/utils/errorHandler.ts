// interface Order {
//     productId: string,
//     quantity: number,
//     price: number
// }


class NetworkError extends Error {
    constructor(message: string) {
        super(message); // call the built-in Error constructor
        this.name = "NetworkError";
    }
}


class DataError extends Error {
    constructor(message: string) {
        super(message); // call the built-in Error constructor
        this.name = "DataError";
    }
}


export function logError(error: unknown): void {
    if (error instanceof Error) {
        console.error(`[${error.name}] ${error.message}`);
    } else {
        console.error("[Unknown Error]", error);
    }
}


export function getUserMessage(error: unknown): string {
    if (error instanceof NetworkError) {
        return "Unable to connect to the server. Please check your internet connection.";
    }
    if (error instanceof DataError) {
        return "There was a problem loading product data. Please try again later.";
    }
    if (error instanceof Error) {
        return "Something went wrong. Please try again.";
    }
    return "An unknown error occurred.";
}
