import Admin from "../admin/Admin";

export const publicRouter = [
  {
    element: Admin,
    path: "/:slug",
  },
];
export const adminRouter = [];
