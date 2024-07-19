const InvestingCards = ({ data }) => {
  return (
    <div className="w-full p-3 mt-4 lg:p-2 lg:w-4/12 investing">
      <div className="investing-num">{data.logoNum}</div>
      <div className="investing-body">
        <h1 className="text-xl font-semibold lg:text-2xl text-primary-text"> {data.title}</h1>
        <p className="text-sm text-[#7a7a7a]">{data.description}</p>
      </div>
    </div>
  )
}

export default InvestingCards