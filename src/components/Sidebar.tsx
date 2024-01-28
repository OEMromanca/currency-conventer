import { bankList } from "../utils/mocks";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  styled,
} from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = styled(RouterNavLink)(({ theme }) => ({
  color: theme.palette.grey[600],
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
  "&.active": {
    color: "#007FFF",
    textDecoration: "none",
  },
}));

const SideBar: React.FC = () => {
  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        {bankList.map((bank) => (
          <ListItem disablePadding key={bank.id}>
            <ListItemButton>
              <NavLink to={`${bank.to}/${bank.id}`}>
                <ListItemText>{bank.text}</ListItemText>
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SideBar;
