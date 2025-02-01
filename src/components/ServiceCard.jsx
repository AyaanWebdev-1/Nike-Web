

function ServiceCard({imgUrl,label}) {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16 " >
      <div className="w-11 h-11 flex justify-center items-center bg-red-400 rounded-full">
     <img src={imgUrl} alt={label} width={24} height={24}/>
      </div>
      <h3 className="text-3xl font-palanquin mt-5 leading-normal font-bold">{label}</h3>
      <p className="text-slate-400 font-montserrat leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste,</p>
    </div>
  )
}

export default ServiceCard
