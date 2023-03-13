import { Box, Tab, Tabs } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Likes } from "./Likes";
import { ProfileReviews } from "./ProfileReviews";
import { SavedCountries } from "./SavedCountries";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function ProfileTabs(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100vw', bgcolor: 'background.paper', height: "100vh", borderRadius: "8px" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          centered
        >
          <Tab label="Reviews" {...a11yProps(0)} />
          <Tab label="Likes" {...a11yProps(1)} />
          <Tab label="Saved Countries" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <ProfileReviews />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Likes />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SavedCountries />
      </TabPanel>
    </Box>
  );
}

