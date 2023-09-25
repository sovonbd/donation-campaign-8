import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Legend } from "recharts";

const Statistics = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [amount, setAmount] = useState([]);
  const [totalDonated, setTotalDonated] = useState(0);
  const [totalPrice, setTotalprice] = useState(0);

  const cards = useLoaderData();
  console.log(cards);

  useEffect(() => {
    if (cards) {
      const cardPrice = cards.map((card) => card.price);

      const totalPrice = cardPrice.reduce((init, current) => init + current, 0);
      console.log(totalPrice);
      setTotalprice(totalPrice);
    }
  }, []);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonation(donationItems);

      const prices = donationItems.map((donation) => donation.price);
      setAmount(prices);

      const total = prices.reduce((init, current) => init + current, 0);
      setTotalDonated(total);
      //   console.log(total);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  const data = [
    { name: "Total Donation", value: 100 - (totalDonated * 100) / totalPrice },
    { name: "Your Donation", value: (totalDonated * 100) / totalPrice },
  ];
  const data0 = [
    { name: "Total Donation", value: 100 },
    { name: "Your Donation", value: 0 },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="container py-40 mx-auto px-2 lg:px-32 flex justify-center items-center h-[60vh]">
      {noFound ? (
        <div className="flex justify-center items-center">
          <PieChart width={400} height={400}>
            <Pie data={data0} cx={200} cy={200} labelLine={false} label={renderCustomizedLabel} outerRadius={160} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend iconSize={5} wrapperStyle={{ margin: "-50px 0" }}></Legend>
          </PieChart>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <PieChart width={400} height={400}>
            <Pie data={data} cx={200} cy={200} labelLine={false} label={renderCustomizedLabel} outerRadius={160} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend iconSize={5} wrapperStyle={{ margin: "-50px 0" }}></Legend>
          </PieChart>
        </div>
      )}
    </div>
  );
};

export default Statistics;
