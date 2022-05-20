import axios from "axios";

export const getRecipes = async (name) => {
  return await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}
`);
};
