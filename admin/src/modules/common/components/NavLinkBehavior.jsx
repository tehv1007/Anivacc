import { blue } from "@mui/material/colors";
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const NavLinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return (
    <NavLink
      ref={ref}
      to={href}
      {...other}
      style={({ isActive }) => {
        return {
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? blue[300] : "white",
        };
      }}
    />
  );
});

export default NavLinkBehavior;
