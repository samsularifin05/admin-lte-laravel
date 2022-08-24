// import { Logo } from "../../assets";
import { Link, Route, React } from "../../components";
import menuApps from "./menu";
import SidebarNavList from "./SidebarNavList";

const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link text-center">
                {/* <img src={Logo} alt="Logo App"
                    class="brand-image img-circle elevation-3"
                    style={{ opacity: "0.8" }}
                /> */}
                   
                <span className="brand-text font-weight-light text-center">
                    Laravel React
                </span>
            </Link>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        {menuApps.map((menu, i) => (
                            <Route
                                path={menu.path}
                                exact={menu.exact}
                                key={i}
                                children={({ match }) => (
                                    <SidebarNavList data={menu} key={i} />
                                )}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
