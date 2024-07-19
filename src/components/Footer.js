import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className="py-10 lg:py-20">
      <div className="wrapper">
        <div className="flex-wrapper">
          <div className="w-full md:w-4/12">
            <img src={logo} alt="logo" className="w-32" />
            <p className="text-[#7a7a7a] my-3">&copy;2023 Taikonz All rights reserved</p>
          </div>
          <div className="w-full sm:w-8/12">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col w-full gap-4 md:w-5/12">
                <h3 className="text-xl text-primary-text">Pages</h3>
                <ul className="text-[#7a7a7a] mb-3 flex flex-col gap-4">
                  <li>Privacy Policy</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="flex flex-col w-full gap-4 mb-3 md:w-5/12">
                <h3 className="text-xl text-primary-text">Products</h3>
                <ul className="text-[#7a7a7a] mb-3 flex flex-col gap-4">
                  <li>Staking</li>
                  <li>P2P</li>
                  <li>Launchpad</li>
                  <li>Trade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer