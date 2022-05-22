import { Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

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
}));

const Meal = ({ meal }) => {
  const {
    idMeal,
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strTags,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
  } = meal;

  return (
    <Grid item xs={12} id={idMeal} className="meal">
      <Item className="meal__item">
        <div className="meal__title">
          <Typography variant="h5" component="div" className="desc">
            {strMeal}
          </Typography>
        </div>
        <div className="meal__img">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="meal__desc">
          <hr />
          <Typography variant="h5" component="h5" className="desc">
            Let's make {strMeal}
          </Typography>
          <hr />
          <Typography variant="p" component="p" className="desc">
            {strInstructions}{" "}
            <a
              href={strYoutube}
              className="meal__video"
              target="_blank"
              rel="noreferrer"
            >
              Show Video
            </a>
          </Typography>
        </div>
        <div className="meal__ingre">
          <hr />
          <Typography variant="h5" component="h5" className="desc">
            Ingredient
          </Typography>
          <hr />
          <Container>
            <Grid container spacing={2}>
              {strIngredient1 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient1}</Item>
                </Grid>
              )}
              {strIngredient2 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient2}</Item>
                </Grid>
              )}
              {strIngredient3 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient3}</Item>
                </Grid>
              )}
              {strIngredient4 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient4}</Item>
                </Grid>
              )}
              {strIngredient5 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient5}</Item>
                </Grid>
              )}
              {strIngredient6 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient6}</Item>
                </Grid>
              )}
              {strIngredient7 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient7}</Item>
                </Grid>
              )}
              {strIngredient8 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient8}</Item>
                </Grid>
              )}
            </Grid>
            <Grid container spacing={2} sx={{ py: 1 }}>
              {strIngredient9 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient9}</Item>
                </Grid>
              )}
              {strIngredient10 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient10}</Item>
                </Grid>
              )}
              {strIngredient11 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient11}</Item>
                </Grid>
              )}
              {strIngredient12 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient12}</Item>
                </Grid>
              )}
              {strIngredient13 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient13}</Item>
                </Grid>
              )}
              {strIngredient14 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient14}</Item>
                </Grid>
              )}
            </Grid>
            <Grid container spacing={2} sx={{ py: 1 }}>
              {strIngredient15 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient15}</Item>
                </Grid>
              )}
              {strIngredient16 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient16}</Item>
                </Grid>
              )}
              {strIngredient17 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient17}</Item>
                </Grid>
              )}
              {strIngredient18 && (
                <Grid item xs={3} md={3}>
                  <Item>{strIngredient18}</Item>
                </Grid>
              )}
            </Grid>
          </Container>
        </div>

        <div className="meal__category">
          <Typography className="tag">
            {strTags ? strTags : strCategory}
          </Typography>
        </div>
        <div className="meal__area">
          <Typography className="area">Area: {strArea}</Typography>
        </div>
      </Item>
    </Grid>
  );
};

export default Meal;
