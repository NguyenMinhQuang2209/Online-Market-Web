import axios from "axios";

const CategoryAPI = {
  create: async ({ registration }) => {
    try {
      const response = await axios.post(
        "/api/admin/registration-plans/create",
        registration
      );
      return response.data;
    } catch (error) {
      console.error("Failed to create registration:", error);
      throw error;
    }
  },
};
export default CategoryAPI;
