import { useState } from "react";
import { SearchForm } from "./SearchForm";
import { GifCard } from "./GifCard";
export const GipfyApp = () => {
  const [categories, setCategories] = useState(["Audi", "Lada"]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="container-md">
      <div className="row">
        <div className="col-12 bg-secondary">
          <h1 className="display-2">Giphy App Search</h1>
        </div>
        <SearchForm onNewCategory={addCategory} />
      </div>
      <div className="row mt-3">
        {categories.map((cat) => (
          <GifCard key={cat} category={cat} />
        ))}
      </div>
    </div>
  );
};
