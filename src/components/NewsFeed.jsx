import  { useEffect, useState } from "react";
import { fetchCryptoNews } from "../services/cryptoApi";
import "./NewsFeed.css";

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCryptoNews();
      setNews(data);
    };
    fetchData();
  }, []);

  return (
    <div className="news-feed">
      <h2>Crypto News</h2>
      {news.map((article, index) => (
        <div className="news-item" key={index}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;

