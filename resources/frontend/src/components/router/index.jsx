import { Dashboard, DemoTabel, FormControl, Login } from "../../pages";
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
    path: "/form-control",
    exact: true,
    title: "Form Control",
    component: () => <FormControl />
  },

  {
    path: "/demo-tabel",
    exact: true,
    title: "Demo Tabel",
    component: () => <DemoTabel />
  },


];

export default MenuRoutes;
