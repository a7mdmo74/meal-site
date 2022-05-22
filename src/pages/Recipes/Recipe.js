import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: blue,
  },
});

const Item = styled(Paper)(() => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#004d40",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.primary.main,
  cursor: "pointer",
}));

const Recipe = ({ recipe }) => {
  const { idMeal, strMealThumb, strMeal } = recipe;
  const navigate = useNavigate();
  const navigatePage = (name) => {
    navigate(`/meals/${name}`);
  };
  return (
    <Grid item xs={12} sm={6} md={4} id={idMeal} className="recipe">
      <Item className="recipe__item" onClick={() => navigatePage(strMeal)}>
        <div className="recipe__img">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="recipe__title">
          <Typography variant="p" component="div" className="desc">
            {strMeal}
          </Typography>
        </div>
      </Item>
    </Grid>
  );
};

export default Recipe;
