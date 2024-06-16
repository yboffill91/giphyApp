import { PropTypes } from "prop-types";

export const GifCard = ({ key, category }) => {
  return (
    <div className="card col-md-3" key={key}>
      <img src="../../public/uno.jpg" className="card-img-top" alt={category} />
      <div className="card-body">
        <p className="card-text">{category}</p>
      </div>
    </div>
  );
};

GifCard.propTypes = {
  key: PropTypes.any,
  category: PropTypes.string,
};
