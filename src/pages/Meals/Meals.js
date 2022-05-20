import { Box, Grid, Typography } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeals } from "../../api/getMeals/getMeals";
import Loader from "../../components/Loader/Loader";
import Meal from "./Meal";
import "./meal.scss";

const Recipes = () => {
  const [meals, setMeals] = useState([]);
  let { name } = useParams();
  const fetchMeals = async () => {
    const {
      data: { meals },
    } = await getMeals(name);
    setMeals(meals);
  };
  useEffect(() => {
    fetchMeals();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="meals">
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3" className="categories__title">
          {name}
        </Typography>
        <Grid
          sx={{ p: 3, display: "flex", justifyContent: "center" }}
          container
          spacing={4}
        >
          <Suspense fallback={<Loader />}>
            {meals.map((meal) => {
              const { idMeal } = meal;
              return <Meal key={idMeal} meal={meal} />;
            })}
          </Suspense>
        </Grid>
      </Box>
    </div>
  );
};

export default Recipes;
