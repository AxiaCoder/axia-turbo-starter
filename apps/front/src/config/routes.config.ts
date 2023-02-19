export const routes = {
  home: "",
  login: "/login",
  register: "/register",
  account: "/account",
  dashboard: "/dashboard",
  admin: {
    home: "/admin",
    page: {
      home: "/admin/pages",
      add: "/admin/pages/add",
      edit: "/admin/pages/edit/:id",
    },
  },
};
