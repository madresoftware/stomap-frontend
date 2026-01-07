import apiClient from "./client";

export const providersService = {
  getAll: async () => {
    const response = await apiClient.get('/providers');
    return response.data;
  }
};