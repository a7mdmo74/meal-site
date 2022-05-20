import axios from "axios";

export const filterMeal = async (letter) => {
  return await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}
`);
};
