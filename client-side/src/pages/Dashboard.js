import React from "react";

function Dashboard({ email }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome {email}</h2>
      <h3>This is your dashboard</h3>
      <h4>You can see all your orders here</h4>
    </div>
  );
}

export default Dashboard;
