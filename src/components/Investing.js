import { investing } from "../utils/data"
import InvestingCards from "./InvestingCards"

const Investing = () => {
  return (
    <section className="py-28 bg-grey">
      <div className="wrapper">
        <div className=" flex-wrapper">
          <div className="w-11/12">
            <h1 className="mb-4 text-2xl lg:text-5xl text-primary-text">Investing in crypto will <br /> be easier than ever </h1>
            <p className="text-gray-500 lg:text-xl">Taikonz makes it easier to invest and trade in crypto currency than <br />any platform.</p>
          </div>
          {investing.map((invest) => {
            return (
              <InvestingCards key={invest.id} data={invest} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Investing