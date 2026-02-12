import axios from "axios";

class ApiClient {
    constructor() {
        this.client = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL,
            timeout: 30000,
            headers: {
                "Content-Type": "application/json",
            },
        });
        this.setupInterceptors();
    }

    setupInterceptors() {
        this.client.interceptors.request.use(
            (config) => {
                const authToken = this.getAuthToken();
                if (authToken) {
                    config.headers.Authorization = `Bearer ${authToken}`
                }
                const token = this.getCsrfToken();
                if (token) {
                    config.headers['X-CSRFToken'] = token;
                }

                return config
            }
        );

        this.client.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response) {
                    const { status, data } = error.response;

                    switch (status) {
                        case 401:
                            if (typeof window !== "undefined") {
                                window.location.href = "/auth/login"
                            }
                            break;
                        case 403:
                            console.error("Forbidden:", data.detail);
                            break;
                        case 404:
                            console.error("Not Found:", data.detail);
                            break;
                        case 429:
                            console.error('Too many requests:', data.detail);
                            break;
                        case 500:
                            console.error('Server error:', data.detail);
                            break;
                    }
                } else if (error.request) {
                    console.error('Network error:', error.request);
                } else {
                    console.error('Error:', error.message);
                }

                return Promise.reject(error);
            }
        );
    }
    getAuthToken() {
        if (typeof window !== "undefined") {
            return localStorage.getItem("accessToken");
        }
        return null;
    }

    getCsrfToken() {
        if (typeof window !== "undefined") {
            const cookieValue = document.cookie.split("; ").find(row => row.startsWith("csrftoken="))?.split("=")[1];
            return cookieValue || null;
        }
        return null
    }

    async get(url, config) {
        const response = await this.client.get(url, config);
        return response.data
    }

    async post(url, data, config) {
        const response = await this.client.post(url, data, config);
        return response.data
    }

    async put(url, data, config) {
        const response = await this.client.put(url, data, config);
        return response.data   }

    async patch(url, data, config) {
        const response = this.client.patch(url, data, config);
        return response.data
    }

    async delete(url, config){
        const response = this.client.delete(url, config);
        return (await response).data
    }
}


export const apiClient = new ApiClient();