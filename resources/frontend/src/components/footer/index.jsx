import { Link, openTab, React } from "../../components";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        Version : 3.2.0
      </div>
      <strong>
        Copyright &copy; 2014-{year}{" "}
        <Link to="#" onClick={()=>openTab('https://adminlte.io')}>AdminLTE.io</Link>.
      </strong>{" "}
      All rights reserved.
    </footer>
  );
};

export default Footer;
