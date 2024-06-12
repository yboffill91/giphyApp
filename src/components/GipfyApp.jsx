import { useState } from "react";
import { SearchForm } from "./SearchForm";
export const GipfyApp = () => {
  const [categories, setCategories] = useState(["Audi", "Lada"]);
  const onAddCategories = () => {
    setCategories(["Renault", ...categories]);
  };
  return (
    <div className="container-md">
      <div className="row">
        <div className="col-12 bg-secondary">
          <h1 className="display-2">Giphy App Search</h1>
        </div>
        <SearchForm onAddCategories={setCategories} categories={categories} />
      </div>
      <div className="row mt-3">
        <div className="col">
          <h3 className="display-5">Categorias</h3>
          <ol>
            {categories.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
