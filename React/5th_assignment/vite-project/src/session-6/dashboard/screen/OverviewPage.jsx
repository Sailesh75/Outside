import React from "react";
import Overview from "./overview/Overview";
import Header from "./header/header";

const OverviewPage = () => {
  return (
      <div className="dashboard-screen">
        <Header headerTitle={`Overview`} />
      <Overview />
    </div>
  );
};

export default OverviewPage;
