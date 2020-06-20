import React, { useEffect } from "react";
import setPageTitle from "../utils/pageTitle";
import PageWrapper from "../components/pageWrapper";

function Dashboard() {
  useEffect(() => {
    setPageTitle("Dashboard");
  });
  return (
    <PageWrapper pageTitle="Dashboard">
    </PageWrapper>
  );
}

export default Dashboard;
