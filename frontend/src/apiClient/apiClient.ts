// src/api/apiClient.ts
export const API_BASE_URL = "https://sanuvishwakarma-yoga-pose-docker.hf.space/predict/"; // Corrected to use HTTPS

// Define custom error class
export class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = "ApiError";
  }
}

// API client function
export const apiClient = async <T>(
  endpoint: string,
  options: RequestInit = {},
  queryParams?: Record<string, string | number | boolean>
): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint}${queryParams ? buildQueryString(queryParams) : ""}`;
  
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new ApiError(errorMessage || "Unknown error", response.status);
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof ApiError) {
      console.error(`API Error: ${error.status} - ${error.message}`);
    } else {
      console.error(`Unexpected Error: ${error.message}`);
    }
    throw error;
  }
};

// Utility function to build query strings for GET requests
const buildQueryString = (params: Record<string, string | number | boolean> = {}) => {
  return (
    "?" +
    Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&")
  );
};
