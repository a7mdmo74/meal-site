import axios from "axios";

export const getCategory = async () => {
  return await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php
`);
};
