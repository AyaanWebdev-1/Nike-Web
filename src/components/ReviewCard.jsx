import { star } from "../assets/icons"


function ReviewCard({imgUrl,customerName}) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={imgUrl} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
      <p className="mt-6 max-w-sm text-center text-slate-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptas.</p>
      <div><img src={star} />
      <p className="font-montserrat text-gray-400">(4.5)</p></div>
      <h3 className="text-2xl font-bold text-palanquin">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
