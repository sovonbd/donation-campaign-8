import Swal from "sweetalert2";
import PropTypes from "prop-types";

const ItemCard = ({ card }) => {
  const { image, title, description, price, titleTextColor } = card || {};

  const handleClick = () => {
    const addedToDonation = [];
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (!donationItems) {
      addedToDonation.push(card);
      localStorage.setItem("donation", JSON.stringify(addedToDonation));
      Swal.fire({
        icon: "success",
        title: `$${price} Donated`,
        text: "Thank you for the donation !!!",
        confirmButtonColor: titleTextColor,
      });
    } else {
      addedToDonation.push(...donationItems, card);
      localStorage.setItem("donation", JSON.stringify(addedToDonation));
      Swal.fire({
        icon: "success",
        title: `$${price} Donated`,
        text: "Thank you for the donation !!!",
        confirmButtonColor: titleTextColor,
      });
    }
  };

  return (
    <div>
      <div className="">
        <div className="relative mx-auto">
          <img className="z-0 w-full h-[70vh] rounded-md" src={image} style={{ objectFit: "cover" }} alt="Shoes" />
          <div className="bg-[#0B0B0B80] rounded-md z-10 mx-auto absolute bottom-0 w-full p-9">
            <button onClick={handleClick} className="btn normal-case text-white rounded-md border-none px-6 py-4" style={{ backgroundColor: titleTextColor }}>
              Donate ${price}
            </button>
          </div>
        </div>
        <div className="card-body p-2 rounded-md rounded-t-none">
          <h2 className="card-title text-[#0B0B0B] text-4xl font-bold pt-14 pb-6">{title}</h2>
          <p className="text-[#0B0B0BB2] text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  card: PropTypes.object,
};
export default ItemCard;
