import apiClient from "./client";

export const providersService = {
  getAll: async (query) => {
    const response = await apiClient.get(`/providers?q=${query}`);
    return response.data;
  }
};