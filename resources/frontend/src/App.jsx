import { Suspense } from "react";
import {
    Content,
    Header,
    Sidebar,
    Footer,
    React,
    LoadingBar,
    useSelector,
    LoadingContent,
    getItem,
} from "./components/index.jsx";
import { selectorThemes, selectorUtility } from "./reduxStore";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { Redirect } from "react-router-dom";
//Tes
const App = () => {
    const content = useSelector(selectorThemes.handleSetContent);
    const header = useSelector(selectorThemes.handleSetPageHeader);
    const sidebar = useSelector(selectorThemes.handleSetPageSidebar);
    const footer = useSelector(selectorThemes.handleSetFooter);
    const progress = useSelector(selectorUtility.progress);
    const loading = useSelector(selectorUtility.loading);
    const isAuthenticated = getItem("userdata");
    return (
        <Suspense fallback={<Skeleton width={"100%"} height={1000} />}>
            {isAuthenticated.length !== 0 ? (
                <div>
                    {header && <Header />}
                    {sidebar && <Sidebar />}
                    {content && <Content />}
                    {footer && <Footer />}
                    <LoadingBar color={"red"} progress={progress} />
                    {loading && <LoadingContent />}
                </div>
            ) : (
                <div>
                    {localStorage.clear()}
                    <Redirect to="/" />
                    {content && <Content />}
                </div>
            )}
        </Suspense>
    );
};

export default App;
