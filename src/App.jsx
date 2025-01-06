import "react";
import BitcoinGraph from "./components/BitcoinGraph";
import TopCryptos from "./components/TopCryptos";
import NewsFeed from "./components/NewsFeed";
import "./styles/global.css";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="app">
    <div>
      <h1>Bitcoin And Crypto News</h1>
        <NewsFeed />
        <br />
        <BitcoinGraph />
        <br />
        <TopCryptos />
        <Footer />
    </div>
    </div>
  );
};

export default App;
