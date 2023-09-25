import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  const handleSeeAllBtn = () => {
    setDataLength(donation.length);
  };
  //   console.log(donation);
  return (
    <div className="container py-10 mx-auto px-2 lg:px-32 z-20">
      {noFound ? (
        <p className="flex justify-center items-center h-[60vh]">{noFound}</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
          {donation.slice(0, dataLength).map((donationItem, idx) => (
            <DonationCard key={idx} donationItem={donationItem}></DonationCard>
          ))}
          <div className="lg:col-span-2 text-center">
            <div className={(donation.length < 4 || dataLength === donation.length) && "hidden"}>
              <button onClick={handleSeeAllBtn} className="btn bg-[#009444] rounded-md text-white px-7 py-3 normal-case">
                See All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
