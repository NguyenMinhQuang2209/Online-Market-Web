import AxiosCustom from "../component/axios_custom/AxiosCustom";

const CategoryAPI = {
  create: async ({ registration }) => {
    return await AxiosCustom.post(
      "/api/admin/registration-plans/create",
      registration
    );
  },
};
export default CategoryAPI;
