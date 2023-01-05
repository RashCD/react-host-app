import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";
import { useLocation, useNavigate } from "react-router-dom";

const routeConfig = [
  {
    title: "Host App",
    link: "/",
    icon: <DashboardIcon />,
  },
  {
    title: "Module A",
    link: "/module/a",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Module B",
    link: "/module/b",
    icon: <PeopleIcon />,
  },
  {
    title: "Module C",
    link: "/module/c",
    icon: <LayersIcon />,
  },
];

const MainListItems = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <React.Fragment>
      {routeConfig.map((route) => (
        <ListItemButton
          key={route.title}
          onClick={() => navigate(route.link)}
          sx={
            location.pathname === route.link
              ? {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[300]
                      : theme.palette.grey[600],
                }
              : {}
          }
        >
          <ListItemIcon>{route.icon}</ListItemIcon>
          <ListItemText primary={route.title} />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
};

export default MainListItems;
