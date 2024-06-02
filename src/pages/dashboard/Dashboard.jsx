import React from "react";
import Orders from "./Order";

const Dashboard = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="container mx-auto">
        <div className="py-10 px-6">
          <Orders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
