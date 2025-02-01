import  Button  from "../components/Button"
import {offer} from "../assets/images"



function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container pl-10">
      <div className="flex-1"><img src={offer} alt="" width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col mb-15">
      <h1 className="mt-5 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-20 font-bold ">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              <br />
              <span className="text-red-400 mt-3 inline-block">Special  </span>  Offer</span>
        </h1>
        <p className="text-slate-400 font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm flex flex-1">Discover stylish Nike arrivals ,quality comfort and innovation for your active Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed enim recusandae temporibus exercitationem quas veniam tempore autem quidem minima provident animi numquam, ipsa reprehenderit molestiae quasi minus asperiores nulla quam explicabo neque aperiam sequi placeat. Et, tempore? Earum eum possimus necessitatibus inventore deleniti reprehenderit incidunt labore eveniet. Optio, vero.</p>
        <div className="flex flex-wrap gap-4">
        <Button label={"Shop Now"}></Button>
        <Button label={"Learn More"} backgroundColor={"bg-white"} textColor={"text-slate-400"} borderColor={'border-gray-400'}></Button>
        </div>
        
      </div>
      
    </section>
  )
}

export default SpecialOffer
