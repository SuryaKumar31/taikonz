import Banner from "./components/Banner";
import CryptoExchange from "./components/CryptoExchange";
import Currencies from "./components/Currencies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Investing from "./components/Investing";
import Slider from "./components/Slider";
import Taikonz from "./components/Taikonz";

const App = () => {
  return (
    <main>
      <Header />
      <Banner />
      <Slider />
      <Taikonz />
      <Currencies />
      <Investing />
      <CryptoExchange />
      <Footer />
    </main>
  );
}

export default App