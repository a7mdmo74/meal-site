import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Button from "../Button/Button";
import "./navbar.scss";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#00796b",
    },
    secondary: blue,
  },
});

const Navbar = styled(AppBar)(() => ({
  backgroundColor: theme.palette.primary.main,
}));

const NavList = styled(Toolbar)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "2rem",
  textAlign: "center",
}));

export default function TopNavbar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <Navbar className="navbar">
          <NavList>
            <Button text={"Search"} setSearch={props.setSearch} />
            <div>
              <Typography variant="h6">
                <Link to="/">Humii!🍴</Link>
              </Typography>
            </div>
          </NavList>
        </Navbar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
