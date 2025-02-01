import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

function Quality() {
  return (
    <div className="flex justify-between items-center  max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col pl-7">
      <h2 className=" font-palanquin text-4xl lg:max-w-lg font-bold ">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We Provide You 
              <br />
              <span className="text-red-400 inline-block mt-4">Super Quality</span>  Shoes</span>
        </h2>
        <p className="text-slate-400 font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dicta fuga ullam libero eius pariatur accusamus veniam voluptas laudantium assumenda!</p>
        
        <p className="text-slate-400 font-montserrat text-lg leading-7  mb-14 sm:max-w-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="mt-2"><Button label={"View Now"} /></div>
        
      </div>
      <div className="flex-1 flex justify-center items-center ">
           <img src={shoe8} alt="shoe 8" height={522} width={570} className="object-contain"/>
      </div>
      
    </div>
  )
}

export default Quality
