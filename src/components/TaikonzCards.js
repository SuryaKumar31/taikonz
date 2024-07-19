const TaikonzCards = ({ data }) => {
  return (
    <div className="p-3 lg:p-2 lg:w-4/12">
      <div className="relative p-4 card-content">
        <div className="flex flex-col items-center justify-center w-full h-full card-content2">
          <img src={require(`../assets/${data.logo}`)} alt="logo" className="absolute -top-5 left-30 w-28 " />
          <h1 className="text-2xl text-primary-text">{data.title}</h1>
          <p className="pt-4 text-center ">{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default TaikonzCards