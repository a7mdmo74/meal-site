import { Box, Grid, Typography } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filterMeal } from "../../../api/filterMeal/filterMeal";
import Loader from "../../../components/Loader/Loader";
import Recipe from "../Recipe";
import "../recipes.scss";
const Filter = () => {
  const [recipes, setRecipes] = useState([]);
  let { letter } = useParams();
  const fetchRecipes = async () => {
    const {
      data: { meals },
    } = await filterMeal(letter);
    setRecipes(meals);
  };
  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="recipes">
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3" className="recipes__title">
          {letter}
        </Typography>
        <Grid
          sx={{ p: 3, display: "flex", justifyContent: "center" }}
          container
          spacing={4}
        >
          <Suspense fallback={<Loader />}>
            {recipes.map((recipe) => {
              const { idMeal } = recipe;
              return <Recipe key={idMeal} recipe={recipe} />;
            })}
          </Suspense>
        </Grid>
      </Box>
    </div>
  );
};

export default Filter;
