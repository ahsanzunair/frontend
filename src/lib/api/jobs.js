import { apiClient } from "./client";

export class JobsApi {
    async getJobs(filters = {}) {
        const params = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== "") {
                if (Array.isArray(value)) {
                    value.forEach(v => params.append(key, v));
                } else {
                    params.append(key, value.toString());
                }
            }
        });

        const url = `/jobs/${params.toString() ? `?${params.toString()}` : ''}`;
        return apiClient.get(url);
    }

    async getJobBySlug(slug) {

        const response = await this.getJobs({ slug: slug });

        if (response.results && Array.isArray(response.results)) {

            const exactMatch = response.results.find(j => j.slug === slug);
            if (exactMatch) return exactMatch;

            return response.results.length > 0 ? response.results[0] : null;
        }

        if (Array.isArray(response)) {
            const exactMatch = response.find(j => j.slug === slug);
            return exactMatch || (response.length > 0 ? response[0] : null);
        }

        return response;
    }



    async getJobById(id) {
        return apiClient.get(`/jobs/${id}/`);
    }


    // async getJobBySlug(slug) {
    //     return apiClient.get(`/jobs/job-details/?slug=${slug}`);
    // }

    async createJob(data) {
        return apiClient.post("/jobs/", data);
    }

    async updateJob(id, data) {
        return apiClient.put(`/jobs/${id}/`, data);
    }

    async patchJob(id, data) {
        return apiClient.patch(`/jobs/${id}/`, data);
    }

    async deleteJob(id) {
        return apiClient.delete(`/jobs/${id}/`);
    }

    async incrementViews(id) {
        return apiClient.post(`/jobs/${id}/increment_views/`);
    }

    async getStats() {
        return apiClient.get(`/jobs/stats`);
    }

    async getFeaturedJobs() {
        return apiClient.get('/jobs/featured/');
    }

    async getRecentJobs() {
        return apiClient.get('/jobs/recent/');
    }

    async getUrgentJobs() {
        return apiClient.get('/jobs/urgent/');
    }

    async getEmployerJobs() {
        const params = company ? `company=${encodeURIComponent(company)}` : "";
        return apiClient.get(`/jobs/employer-jobs/${params}`);
    }

    async getSearchSuggestions(query) {
        return apiClient.get(`/jobs/search_suggestions/?q=${encodeURIComponent(query)}`);
    }

    async toggleJobStatus(id, activate) {
        const endpoint = activate ? "activate" : "deactivate";
        return apiClient.post(`/jobs/${id}/${endpoint}/`);
    }
}

export const jobsApi = new JobsApi();