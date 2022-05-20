import { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Category from "./Category";

import "./category.scss";
import { getCategory } from "../../api/getCategory/getCategory";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    const {
      data: { categories },
    } = await getCategory();
    setCategories(categories);
  };

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="categories">
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3" className="categories__title">
          Our Categories
        </Typography>
        <Grid
          sx={{ p: 3, display: "flex", justifyContent: "center" }}
          container
          spacing={4}
        >
          {categories.map((cat) => {
            const { idCategory } = cat;
            return <Category key={idCategory} cat={cat} />;
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Categories;
