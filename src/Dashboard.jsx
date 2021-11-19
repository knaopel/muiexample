import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
const mdTheme = createTheme();

const Dashboard = () => {
  const [open, setOpen] = useState();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <div>Dasboard</div>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
