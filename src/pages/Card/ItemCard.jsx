const ItemCard = ({ card }) => {
  const { id, image, title, description, price, titleTextColor } = card || {};

  const handleClick = () => {
    const addedToDonation = [];
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (!donationItems) {
      addedToDonation.push(card);
      localStorage.setItem("donation", JSON.stringify(addedToDonation));
      alert('items added')
    } else {
      addedToDonation.push(...donationItems, card);
      localStorage.setItem("donation", JSON.stringify(addedToDonation));
    }
  };

  return (
    <div>
      <div className="card rounded-md container py-10 mx-auto px-0 lg:px-32 z-20">
        <div className="relative mx-auto">
          <img className="z-0 w-full rounded-md" src={image} alt="Shoes" />
          <div className="bg-[#0B0B0B50] z-10 mx-auto absolute bottom-0 w-full p-9">
            <button onClick={handleClick} className="btn normal-case text-white rounded-md border-none px-6 py-4" style={{ backgroundColor: titleTextColor }}>
              Doanate ${price}
            </button>
          </div>
        </div>
        <div className="card-body p-2 rounded-md rounded-t-none">
          <h2 className="card-title text-[#0B0B0B] text-4xl font-bold pt-14 pb-6">{title}</h2>
          <p className="#0B0B0BB2 text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
