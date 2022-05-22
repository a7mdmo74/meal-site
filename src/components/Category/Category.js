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

const Category = ({ cat }) => {
  const navigate = useNavigate();
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    cat;

  const navigatePage = async (name) => {
    navigate(`/recipes/${name}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} id={idCategory} className="category">
      <Item
        className="category__item"
        onClick={() => navigatePage(strCategory)}
      >
        <Typography variant="h4" component="h3" className="title">
          {strCategory}
        </Typography>
        <div className="category__img">
          <img src={strCategoryThumb} alt={strCategory} />
        </div>
        <div className="category__desc">
          <Typography variant="p" component="p" className="desc">
            {strCategoryDescription.slice(0, 200)}...
          </Typography>
        </div>
      </Item>
    </Grid>
  );
};

export default Category;
