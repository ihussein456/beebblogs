// utils/getBaseUrl.ts

/**
 * Determines the base URL for API requests.
 * It checks if the code is running on the server or the client and sets the base URL accordingly.
 * In the server environment, you might want to fetch the base URL from environment variables or a config.
 * In the client environment, you can use an empty string for relative URLs or obtain from window.location.
 */
export function getBaseUrl(): string {
    // Check if running on server (window is undefined)
    if (typeof window === 'undefined') {
        // Server-side execution (Next.js or Node.js environment)
        // Here you can set your development or production URL based on environment variables
        // You can define these environment variables in your .env.local or similar files
        return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'; // Default to localhost for development
    } else {
        // Client-side execution
        // Use window.location to make it dynamic based on the current page's location
        return `${window.location.protocol}//${window.location.host}`;
    }
}
