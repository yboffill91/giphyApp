import { useState } from "react";
import { PropTypes } from "prop-types";

export const SearchForm = ({ onAddCategories, categories }) => {
  const [value, setValue] = useState("");

  const onImputChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!value || value === " " || value.length < 1) return;
    onAddCategories([value, ...categories]);
    setValue("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="inputSearch" className="form-label">
        Search a word for a giphy world
      </label>
      <input
        type="text"
        id="inputSearch"
        className="form-control"
        aria-describedby="inputHelpBlock"
        value={value}
        onChange={onImputChange}
      />
      <div id="inputHelpBlock" className="form-text">
        Feel free to search what you want!!!
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  onAddCategories: PropTypes.any,
  categories: PropTypes.array,
};
