import  { useEffect, useState } from "react";
import { fetchTopCryptos } from "../services/cryptoApi";
import "./TopCryptos.css";

const TopCryptos = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopCryptos();
      setCryptos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="crypto-list">
      {cryptos.map((crypto) => (
        <div className="crypto-card" key={crypto.id}>
          <h3>{crypto.name}</h3>
          <p>Price: ${crypto.current_price.toLocaleString()}</p>
          <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default TopCryptos;

