
export class APIError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }

}

export class ValidationError extends Error {
    statusCode: number;

    constructor(message: string, statusCode = 400) {
        super(message);
        this.name = 'ValidationError';
        this.statusCode = statusCode;
    }
}


export function handleAPIError(error: APIError) {
    if (error instanceof APIError) {
        console.error('API Error:', error.message, 'Status Code:', error.statusCode);
    } else {
        console.error('An unexpected error occurred:', error);
    }
}

export function handleValidationError(error: ValidationError) {
    console.error(`[Validation Error] ${error.message}`);
    return {
        status: error.statusCode,
        message: error.message
    };
}