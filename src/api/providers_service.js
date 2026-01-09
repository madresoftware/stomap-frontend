import { turso } from "../db/connection";

export const providersService = {
  getAll: async (query) => {
    const response = await turso.execute("SELECT * FROM providers");
    return response.rows;
  }
};