import React from "react";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import DashboardComp from "../../layouts/DashboardComp/DashboardComp";
import { Box } from "@mui/system";

const Dashboard = () => {
  return (
    <>
      <Box>
        {/* <Sidebar /> */}
        <DashboardComp />
      </Box>
    </>
  );
};

export default Dashboard;
