import  { useEffect, useState } from "react";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { fetchBitcoinPriceHistory } from "../services/cryptoApi";
import "./BitcoinGraph.css";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const BitcoinGraph = () => {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const prices = await fetchBitcoinPriceHistory();
      setPriceData(prices);
    };
    fetchData();
  }, []);

  const chartData = {
    labels: priceData.map((p) => new Date(p[0]).toLocaleDateString()),
    datasets: [
      {
        label: "Bitcoin Price (USD)",
        data: priceData.map((p) => p[1]),
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="graph-container">
      <h2>Bitcoin Price Over 30 Days</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default BitcoinGraph;

