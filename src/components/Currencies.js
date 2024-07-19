import { currencyCards } from "../utils/data"
import CurrencyCards from "./CurrencyCards"

const Currencies = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="flex-wrapper">
          <div className="w-full lg:w-6/12">
            <h1 className="text-2xl lg:text-5xl text-primary-text">Available Currencies</h1>
            <p className="my-4 text-primary-text">There are various crypto currencies available in Taikonz, <br /> and youz may easily trade andinvest in all of them.</p>
            <button className="mt-4 primary-btn">Explore all</button>
          </div>
          <div className="w-full mt-5 lg:w-6/12">
            {currencyCards.map((currencyCard) => {
              return (
                <CurrencyCards
                  key={currencyCard.id}
                  data={currencyCard} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Currencies