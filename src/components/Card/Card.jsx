const Card = ({ card }) => {
  const { id, image, title, category, cardBackgroundColor, categoryNameBackgroundColor, titleTextColor } = card;

  return (
    <div>
      <div className="card rounded-md">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body p-2 rounded-md rounded-t-none" style={{ backgroundColor: cardBackgroundColor }}>
          <p className="w-max text-sm px-2 rounded-sm font-medium py-1" style={{ backgroundColor: categoryNameBackgroundColor, color: titleTextColor }}>
            {category}
          </p>
          <h2 style={{ color: titleTextColor }} className="card-title">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
