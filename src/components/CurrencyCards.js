

const CurrencyCards = ({ data }) => {
  return (
    <div className="flex items-center gap-5 py-5 mb-3 border border-borderColor rounded-xl">
      <div className="relative w-20 h-20 ml-4 rounded-full">
        <img src={require(`../assets/${data.img}`)} alt="currency-card-image" className="absolute self-center object-cover w-full h-full" />
        <h1>
        </h1>
      </div>
      <h1 className="text-2xl text-primary-text">{data.title} </h1>
      <h4>{data.subHeading}</h4>
      <p className="ml-auto text-green-600">{data.percentage}</p>
    </div>
  )
}

export default CurrencyCards