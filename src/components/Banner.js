import BANNER_IMG from "../assets/bannerimg.png"

const Banner = () => {
  return (
    <section className="banner">
      <div className="wrapper">
        <div className="flex-wrapper">
          {/* left */}
          <div className="banner-left">
            <h1 className="banner-heading"> Begin Trading with your <br /> Favorite Coins </h1>
            <p className="banner-content">
              Welcome to Taikonz! A next-gen Blockchain and Crypto Exchange platform that offers trader with an endless assets buy and selling feature with real money.
            </p>
            <button className="primary-btn">Get Started</button>
          </div>
          <div className="banner-right">
            <div className="inline">
              <img src={BANNER_IMG} alt="bannerImg" className="banner-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner