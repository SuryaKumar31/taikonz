import Bitcoin from "../assets/bitcoin.png";
import Dogecoin from "../assets/dogecoin.png"
import Tron from "../assets/tron.png"
import Maker from "../assets/maker.png"
import Uni from "../assets/uniswap.png"
import Link from "../assets/chainlink.png"
import XRP from "../assets/maker.png"
import Binance from "../assets/binance.png"
import Mana from "../assets/decentraland.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import './Slider.css';

const Slider = () => {
  return (
    <section className="slider">
      <div className="gap-3 p-4 wrapper">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 1200, disableOnInteraction: false }}
          breakpoints={{
            300: { slidesPerView: 1 },
            400: { slidesPerView: 2 },
            700: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-20 py-5 text-center border rounded-2xl border-borderColor">
              <div className="relative w-20 h-20 mb-5 rounded-full">
                <img src={Bitcoin} alt="logo" className="absolute self-center object-cover w-full h-full" />
                <img src={Bitcoin} alt="logo" className="absolute self-center object-cover w-full h-full blur-image -z-10 -left-2 top-5" />
              </div>

              <h1 className="font-semibold text-primary-text">Bitcoin</h1>
              <h4 className="text-primary-text">BTC</h4>
              <p className="text-primary-text">64625</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-20 py-5 text-center border rounded-2xl border-borderColor">
              <div className="relative w-20 h-20 mb-5 rounded-full">
                <img src={Tron} alt="logo" className="absolute self-center object-cover w-full h-full" />
                <img src={Tron} alt="logo" className="absolute self-center object-cover w-full h-full blur-image -z-10 -left-2 top-5" />
              </div>
              <h1 className="font-semibold text-primary-text">Tron</h1>
              <h4 className="text-primary-text">TRX</h4>
              <p className="text-primary-text">0.14</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-20 py-5 text-center border rounded-2xl border-borderColor">
              <div className="relative w-20 h-20 mb-5 rounded-full">
                <img src={Maker} alt="logo" className="absolute self-center object-cover w-full h-full" />
                <img src={Maker} alt="logo" className="absolute self-center object-cover w-full h-full blur-image -z-10 -left-2 top-5" />
              </div>
              <h1 className="font-semibold text-primary-text">Maker</h1>
              <h4 className="text-primary-text">MKR</h4>
              <p className="text-primary-text">2748.68</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-20 py-5 text-center border rounded-2xl border-borderColor">
              <div className="relative w-20 h-20 mb-5 rounded-full">
                <img src={Uni} alt="logo" className="absolute self-center object-cover w-full h-full" />
                <img src={Uni} alt="logo" className="absolute self-center object-cover w-full h-full blur-image -z-10 -left-2 top-5" />
              </div>
              <h1 className="font-semibold text-primary-text">Uniswap</h1>
              <h4 className="text-primary-text">UNI</h4>
              <p className="text-primary-text">7.78</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-20 py-5 text-center border rounded-2xl border-borderColor">
              <div className="relative w-20 h-20 mb-5 rounded-full">
                <img src={Link} alt="logo" className="absolute self-center object-cover w-full h-full" />
                <img src={Link} alt="logo" className="absolute self-center object-cover w-full h-full blur-image -z-10 -left-2 top-5" />
              </div>
              <h1 className="font-semibold text-primary-text">ChainLink</h1>
              <h4 className="text-primary-text">LINK</h4>
              <p className="text-primary-text">13.55</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-20 py-5 text-center border rounded-2xl border-borderColor">
              <div className="relative w-20 h-20 mb-5 rounded-full">
                <img src={Binance} alt="logo" className="absolute self-center object-cover w-full h-full " />
                <img src={Binance} alt="logo" className="absolute self-center object-cover w-full h-full blur-image -z-10 -left-2 top-5" />
              </div>
              <h1 className="font-semibold text-primary-text">Binance</h1>
              <h4 className="text-primary-text">BNB</h4>
              <p className="text-primary-text">581.99</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-20 py-5 text-center border rounded-2xl border-borderColor">
              <div className="relative w-20 h-20 mb-5 rounded-full">
                <img src={XRP} alt="logo" className="absolute self-center object-cover w-full h-full" />
                <img src={XRP} alt="logo" className="absolute self-center object-cover w-full h-full blur-image -z-10 -left-2 top-5" />
              </div>
              <h1 className="font-semibold text-primary-text">XRP</h1>
              <h4 className="text-primary-text">XRP</h4>
              <p className="text-primary-text">0.55</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-20 py-5 text-center border rounded-2xl border-borderColor">
              <div className="relative w-20 h-20 mb-5 rounded-full">
                <img src={Dogecoin} alt="logo" className="absolute self-center object-cover w-full h-full" />
                <img src={Dogecoin} alt="logo" className="absolute self-center object-cover w-full h-full blur-image -z-10 -left-2 top-5" />
              </div>
              <h1 className="font-semibold text-primary-text">Dogecoin</h1>
              <h4 className="text-primary-text">DOGE</h4>
              <p className="text-primary-text">0.12</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-20 py-5 text-center border rounded-2xl border-borderColor">
              <div className="relative w-20 h-20 mb-5 rounded-full">
                <img src={Mana} alt="logo" className="absolute self-center object-cover w-full h-full" />
                <img src={Mana} alt="logo" className="absolute self-center object-cover w-full h-full blur-image -z-10 -left-2 top-5" />
              </div>
              <h1 className="font-semibold text-primary-text">Decentraland</h1>
              <h4 className="text-primary-text">MANA</h4>
              <p className="text-primary-text">0.34</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
