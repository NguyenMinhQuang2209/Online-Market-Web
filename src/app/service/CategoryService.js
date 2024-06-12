import AxiosCustom from "../component/axios_custom/AxiosCustom";

const CategoryService = {
  create: async (registration) => {
    console.log(registration);
    return await AxiosCustom.post(
      "/api/admin/registration-plans/create",
      registration
    );
  },
};
export default CategoryService;
