import { Link } from "react-router-dom";

const DonationCard = ({ donationItem }) => {
  const { id, image, category, title, price, cardBackgroundColor, categoryNameBackgroundColor, titleTextColor } = donationItem;
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center px-12 md:p-0">
        <figure>
          <img className="w-[320px] md:w-[320px] h-[194px] rounded-md rounded-b-none md:rounded-br-none md:rounded-bl-md md:rounded-r-none" src={image} alt="Shoes" />
        </figure>
        <div className="p-2 w-full rounded-md rounded-l-none rounded-tr-none md:rounded-tr-md flex flex-col justify-start py-[14px] space-y-2" style={{ backgroundColor: cardBackgroundColor }}>
          <p className="w-max text-sm px-2 rounded-sm font-medium py-1" style={{ backgroundColor: categoryNameBackgroundColor, color: titleTextColor }}>
            {category}
          </p>
          <h2 className="card-title text-[#0B0B0B] font-semibold text-2xl">{title}</h2>
          <p style={{ color: titleTextColor }} className="font-semibold pb-3">
            ${price}
          </p>
          <Link to={`/${id}`}>
            <button className="btn w-max normal-case text-white text-lg rounded-md border-none px-4 py-2" style={{ backgroundColor: titleTextColor }}>
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
