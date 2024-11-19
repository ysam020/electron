import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import NewJobOpening from "./NewJobOpening";
import useTabs from "../../../hooks/useTabs";

function JobOpenings() {
  const [value, setValue] = React.useState(0);
  const { a11yProps, CustomTabPanel } = useTabs();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="New Job Opening" {...a11yProps(1)} key={1} />,
          <Tab label="View Job Openings" {...a11yProps(0)} key={0} />,
        </Tabs>
      </Box>

      <Box>
        <CustomTabPanel value={value} index={0}>
          <NewJobOpening />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default React.memo(JobOpenings);
