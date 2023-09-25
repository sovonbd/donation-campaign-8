import { useEffect } from "react";
import { useState } from "react";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState("");

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  //   console.log(donation);
  return <div>{noFound ? <p className="flex justify-center items-center h-[60vh]">{noFound}</p> : <div></div>}</div>;
};

export default Donation;
