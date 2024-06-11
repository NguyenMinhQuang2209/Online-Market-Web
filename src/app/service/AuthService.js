import axios from "axios";

const AuthAPI = {
  login: async ({ user }) => {
    return await axios.post("/api/auth/common/admin/login", user);
  },
};

export default AuthAPI;
