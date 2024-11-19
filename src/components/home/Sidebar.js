import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sidebar.scss";
import { Avatar, IconButton, ListItemButton, Tooltip } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import FeedbackIcon from "@mui/icons-material/Feedback";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { UserContext } from "../../contexts/UserContext";

function Sidebar() {
  const navigate = useNavigate();
  const { user, handleLogout } = useContext(UserContext);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const navItems = [
    { title: "Dashboard", icon: <SpaceDashboardIcon />, path: "/" },
    { title: "Modules", icon: <ViewModuleIcon />, path: "/modules" },
    { title: "Assign Module", icon: <AssignmentIndIcon />, path: "/assign" },
    { title: "Feedback", icon: <FeedbackIcon />, path: null },
    { title: "Help", icon: <LiveHelpIcon />, path: "/help" },
  ];

  return (
    <div className="sidebar">
      <Tooltip
        title={`Welcome ${user.first_name}`}
        enterDelay={0}
        placement="right"
      >
        <IconButton onClick={() => handleNavigation("/profile")}>
          <Avatar src={user.employee_photo} alt="Employee Photo" />
        </IconButton>
      </Tooltip>

      {navItems.map((item, index) => (
        <Tooltip key={index} title={item.title} placement="right">
          <ListItemButton
            className="appbar-links"
            aria-label="list-item"
            onClick={() => handleNavigation(item.path)}
          >
            <IconButton sx={{ color: "#ffffff9f" }} aria-label="icon">
              {item.icon}
            </IconButton>
          </ListItemButton>
        </Tooltip>
      ))}

      <Tooltip title="Logout" enterDelay={0} placement="right">
        <ListItemButton
          sx={{ textAlign: "left" }}
          className="appbar-links"
          aria-label="list-item"
          onClick={handleLogout}
        >
          <IconButton sx={{ color: "#ffffff9f" }} aria-label="icon">
            <LogoutRoundedIcon />
          </IconButton>
        </ListItemButton>
      </Tooltip>
    </div>
  );
}

export default React.memo(Sidebar);
