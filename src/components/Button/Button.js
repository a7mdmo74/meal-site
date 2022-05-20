import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./button.scss";
const Button = ({ text, setSearch }) => {
  return (
    <button onClick={() => setSearch(true)} className="button">
      <span className="icon">
        <SearchIcon />
      </span>
      <span className="text">{text}</span>
    </button>
  );
};

export default Button;
