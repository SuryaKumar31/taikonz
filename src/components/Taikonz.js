import { tailkonz } from "../utils/data"
import TaikonzCards from "./TaikonzCards"

const Taikonz = () => {
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="flex-wrapper">
          <div className="w-11/12">
            <h1 className="mb-4 text-2xl lg:text-5xl text-primary-text">
              Why Tailkonz?
            </h1>
            <p className="text-gray-500 lg:text-xl">
              We build crypto products that are simple,eleggant and secure. <br />
              Whether you are an individual or an institution,we want to help you  <br />
              buy,sell,and store your bitcoin and certocurrency.
            </p>
          </div>
          {tailkonz.map((data) => {
            return (
              <TaikonzCards key={data.id} data={data} />
            )
          })}
        </div>
      </div>
    </section >
  )
}

export default Taikonz