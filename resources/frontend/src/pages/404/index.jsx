import { PanelContent, Link, React } from "../../components";
const PageNotFound = () => {
  return (
    <PanelContent headerContent>
        <div className='error-page container mt-5'>
        <h2 className='headline text-warning'> 404</h2>
        <div className='error-content'>
          <h3>
            <i className='fas fa-exclamation-triangle text-warning'></i> Oops! Page not found.
          </h3>
          <p>
            We could not find the page you were looking for. Meanwhile, you may{' '}
            <Link to='/dashboard'>return to dashboard</Link> or try using the search form.
          </p>
        </div>
      </div>
    </PanelContent>
  );
};

export default PageNotFound;
