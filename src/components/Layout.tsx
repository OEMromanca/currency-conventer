// Import React and other required modules
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import AppHeader from "./AppHeader";
import { drawerWidth } from "../utils/mocks";
import SideBar from "./Sidebar";
import { Navigate, Route, Routes } from "react-router";
import BankData from "./BankData";
import CurrencyCalculator from "./CurrencyCalculator";
import Grid from "@mui/system/Unstable_Grid";
import CurrencyInfo from "./CurrencyInfo";
import { Paper, styled } from "@mui/material";
import { ILayoutProps } from "../types";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Layout: React.FC<ILayoutProps> = (props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen((prevMobileOpen) => !prevMobileOpen);
    }
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppHeader handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideBar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <SideBar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container spacing={2} columns={20} justifyContent="space-between">
          <Grid xs={6}>
            <Item>
              <CurrencyInfo />
            </Item>
          </Grid>
          <Grid xs={8}>
            <Item>
              <CurrencyCalculator />
            </Item>
          </Grid>
        </Grid>
        <Routes>
          <Route index element={<Navigate to="/Csob/1" replace />} />
          <Route path="/:to/:id" element={<BankData />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Layout;
