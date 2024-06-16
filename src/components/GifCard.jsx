import { PropTypes } from "prop-types";

const fetchGif = async (gif) => {
  const request = await fetch(
    `https://api.giphy.com/v1/gifs/search/?api_key=fw44TykIaBxpG03ZW8rn5FrgnBGKYUYm&q=${gif}&limit=1`
  );
  const { data } = await request.json();
  console.log(data);
  return {
    id: data.id,
    title: data.title,
    gifUrl: data.images.downsized_still.url,
  };
};
export const GifCard = ({ key, category }) => {
  fetchGif(category);
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
