import axios from "axios";

const API_BASE = "https://api.coingecko.com/api/v3";
const CRYPTOCOMPARE_API = "https://min-api.cryptocompare.com/data/v2/news/";
const API_CATEGORY = "Bitcoin";

// Fetch Bitcoin price history
export const fetchBitcoinPriceHistory = async () => {
  const { data } = await axios.get(`${API_BASE}/coins/bitcoin/market_chart`, {
    params: { vs_currency: "usd", days: "30" },
  });
  return data.prices;
};

// Fetch top 12 cryptocurrencies
export const fetchTopCryptos = async () => {
  const { data } = await axios.get(`${API_BASE}/coins/markets`, {
    params: { vs_currency: "usd", order: "market_cap_desc", per_page: 12 },
  });
  return data;
};


export const fetchCryptoNews = async () => {
    try {
      const { data } = await axios.get(CRYPTOCOMPARE_API, {
        params: {
          categories: API_CATEGORY,
        },
      });
  
      // Map and limit the response to 10 articles
      return data.Data.slice(0, 10).map((article) => ({
        title: article.title,
        url: article.url,
        source: article.source_info.name,
        publishedAt: new Date(article.published_on * 1000).toLocaleDateString(), // Convert Unix timestamp
      }));
    } catch (error) {
      console.error("Error fetching news:", error);
      return [];
    }
  };
