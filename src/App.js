import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Category/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Recipes from "./pages/Recipes/Recipes";
import Meals from "./pages/Meals/Meals";
import Search from "./components/Search/Search";
import { useState } from "react";
import Filter from "./pages/Recipes/filter";

function App() {
  const [search, setSearch] = useState(false);
  return (
    <div className="App">
      <Router>
        <Search setSearch={setSearch} search={search} />
        <Navbar setSearch={setSearch} />
        <Header setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="recipes/:name" element={<Recipes />} />
          <Route path="recipes/filter/:letter" element={<Filter />} />
          <Route path="meals/:name" element={<Meals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
