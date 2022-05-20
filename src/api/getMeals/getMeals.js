import axios from "axios";

export const getMeals = async (name) => {
  return await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}
`);
};
