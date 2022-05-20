import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./search.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export { getMeal } from "../../api/getMeal/getMeal";

const Search = ({ search, setSearch }) => {
  const [meal, setMeal] = useState("");
  const navigate = useNavigate();
  const fetchMeal = async (letter) => {
    if (meal !== "") {
      navigate(`/recipes/filter/${letter}`);
      setSearch(false);
      setMeal("");
    } else {
      toast.error("meal can't be empty!");
    }
  };

  return (
    <div className={search ? "search open" : "search"}>
      <div className="search__content">
        <Typography variant="h4">Search for meals</Typography>
        <Typography variant="p">try letters or name of meal</Typography>
        <TextField
          id="outlined-basic"
          fullWidth
          sx={{ pb: 1 }}
          label="meal"
          variant="outlined"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
        <Button variant="contained" onClick={() => fetchMeal(meal)}>
          Submit
        </Button>
      </div>
      <ToastContainer />
      <div className="search__close">
        <Button
          variant="contained"
          color="error"
          onClick={() => setSearch(false)}
        >
          X
        </Button>
      </div>
    </div>
  );
};

export default Search;
