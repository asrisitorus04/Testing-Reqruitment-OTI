import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

function Sidebar() { 
  return (
    <>
    <Script/>
      <div className="container-sidebar">
        <div className="sidebar">
          <div className="header">
            <div className="list-item">
              <a href="#">
                <img src="" alt="" className="icon" />
                <span className="description-header">INI NAVBAR</span>
              </a>
            </div>
          </div>
          <div className="main">
            <div className="list-font">
              <a href="#">
                <span className="description-header">Analysis</span>
              </a>
            </div>
            <div className="list-item">
              <a href="#">
                <img src="dashboard-hitam.svg" alt="" className="icon" />
                <span className="description"> Dashboard</span>
              </a>
            </div>
            <div className="list-item">
              <a href="#">
                <img src="sales.svg" alt="" className="icon" />
                <span className="description"> Sales</span>
              </a>
            </div>

            <div className="list-font">
              <a href="#">
                <span className="description-header">Admin Access</span>
              </a>
            </div>
            <div className="list-item">
              <a href="#">
                <img src="user.svg" alt="" className="icon" />
                <span className="description"> User Management</span>
              </a>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div id="menu-button">
            <input type="checkbox" id="menu-checkbox"/>
            <label htmlFor="menu-checkbox" id="menu-label">
                <div id="hamburger"></div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
