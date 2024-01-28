import { useSelector } from "react-redux";
import { selectBankData } from "../redux/slices/bankDataSlices";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { drawerWidth } from "../utils/mocks";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppHeaderProps } from "../types";

const AppHeader: React.FC<AppHeaderProps> = ({ handleDrawerToggle }) => {
  const bankData = useSelector(selectBankData);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography>bank:</Typography>
        <Typography variant="h5" noWrap sx={{ flexGrow: 1, ml: 2 }}>
          {bankData.currencyList?.banka}
        </Typography>
        <Typography>date: </Typography>
        <Typography variant="h5" noWrap sx={{ ml: 2 }}>
          {bankData.currencyList?.denc}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
