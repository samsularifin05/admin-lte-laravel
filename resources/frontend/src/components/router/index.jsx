import { Dashboard, FormControl, Jenis, Kategori, Login } from "../../pages";
import Logout from "../../pages/logout";

const MenuRoutes = [
  {
    path: "/",
    exact: true,
    title: "Login",
    component: () => <Login />
  },
  {
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    component: () => <Dashboard />
  },
  {
    path: "/master-kategori",
    exact: true,
    title: "Master Kategori",
    component: () => <Kategori />
  },
  {
    path: "/master-jenis",
    exact: true,
    title: "Master Jenis",
    component: () => <Jenis />
  },
  {
    path: "/form-control",
    exact: true,
    title: "Form Control",
    component: () => <FormControl />
  },
  {
    path: "/logout",
    exact: true,
    title: "Form Control",
    component: () => <Logout />
  },
 
];

export default MenuRoutes;
