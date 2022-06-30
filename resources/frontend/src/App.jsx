import {
  Content,
  Header,
  Sidebar,
  Footer,
  React,
  LoadingBar,
  useSelector,
  LoadingContent
} from "./components/index.jsx";
import { selectorThemes, selectorUtility } from "./reduxStore";
//Tes
const App = () => {
  const content = useSelector(selectorThemes.handleSetContent);
  const header = useSelector(selectorThemes.handleSetPageHeader);
  const sidebar = useSelector(selectorThemes.handleSetPageSidebar);
  const footer = useSelector(selectorThemes.handleSetFooter);
  const progress = useSelector(selectorUtility.progress);
  const loading = useSelector(selectorUtility.loading);
  return (
    <div>
      {header && <Header />}
      {sidebar && <Sidebar />}
      {content && <Content />}
      {footer && <Footer />}
      <LoadingBar color={"red"} progress={progress} />
      {loading && <LoadingContent />}
    </div>
  );
};

export default App;
