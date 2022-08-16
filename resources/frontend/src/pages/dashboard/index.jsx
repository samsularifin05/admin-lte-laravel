import { Card, Link, PanelContent, React } from "../../components";

const Dashboard = () => {
  return (
    <PanelContent headerContent title="Dashboard">
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <div className="count">150</div >
              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag"></i>
            </div>
            <Link to="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <div className="count">
                53<sup style={{ fontSize: "20px" }}>%</sup>
              </div>
              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars"></i>
            </div>
            <Link to="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <div className="count">44</div>
              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add"></i>
            </div>
            <Link to="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <div className="count">65</div>
              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph"></i>
            </div>
            <Link to="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </Link>
          </div>
        </div>

        <div className="col-lg-6 col-lg-6">
          <Card title="Card 1">ISI</Card>
        </div>
        <div className="col-lg-6 col-lg-6">
          <Card title="Card 2">ISI</Card>
        </div>
      </div>
    </PanelContent>
  );
};

export default Dashboard;
