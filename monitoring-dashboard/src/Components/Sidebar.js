import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
    const data = ["Home", "App", "Jobs", "Dashboard", "Status", "Content"];
    return (
      <>
        <div className="sidebar_items">
          {data.map((item, index) => (
            <div key={index} className="sidebar_item">
              <p className="contentItem">
                {item}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  };
  
export default Sidebar;