import { Typography } from "@mui/material";
import React from "react";
import Button from "../Button/Button";
import "./header.scss";
const Header = ({ setSearch }) => {
  return (
    <div className="header">
      <div className="header__content">
        <Typography variant="p">PERSONALIZE YOUR EXPERIENCE</Typography>
        <Typography variant="h2">What are your favorite cuisines?</Typography>
      </div>
      <div className="header__search">
        <Button text={"Search 2M+ recipes"} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Header;
