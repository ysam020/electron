import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CompleteKYC from "./CompleteKYC";
import ViewKycList from "./ViewKycList";
import useTabs from "../../../hooks/useTabs";
import { UserContext } from "../../../contexts/UserContext";

function EmployeeKYC() {
  const [value, setValue] = React.useState(0);
  const { a11yProps, CustomTabPanel } = useTabs();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { user } = React.useContext(UserContext);

  return (
    <Box sx={{ width: "100%" }}>
      <>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="View Employee KYCs" {...a11yProps(1)} key={0} />
            <Tab label="Complete KYC" {...a11yProps(0)} key={1} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <ViewKycList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CompleteKYC username={user.username} />
        </CustomTabPanel>
      </>
    </Box>
  );
}

export default React.memo(EmployeeKYC);
