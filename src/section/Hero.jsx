import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images"
import Button from "../components/Button"
import ShoeCart from "./ShoeCart"


function Hero() {
  const [bigShoeImg,setBigShoeImg]=useState(bigShoe1)
  return (
    
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center
    min-h-screen gap-10 max-container  border-red-400 p-2">

        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-5">
         <p className="text-xl font-montserrat text-red-400">Our Summer Collections</p>
         <h1 className="mt-5 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-20 font-bold ">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival
              <br />
              <span className="text-red-400 mt-3 inline-block">Nike </span>   Shoes</span>
        </h1>
        <p className="text-slate-400 font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals ,quality comfort and innovation for your active</p>
        <Button label={"Shop Now"} imgUrl={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full m-20 gap-16">
          <div>
            <p className="text-4xl font-palanquin font-bold">1k+</p>
            <p className="leading-7 font-montserrat text-slate-400">Brands</p>
          </div>
          <div>
            <p className="text-4xl font-palanquin font-bold">500+</p>
            <p className="leading-7 font-montserrat text-slate-400">Shops</p>
          </div>
          <div>
            <p className="text-4xl font-palanquin font-bold">250k+</p>
            <p className="leading-7 font-montserrat text-slate-400">Customers</p>
          </div>
         
        </div>
        </div>
      {/* Other Half Section */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40  bg-blue-100 bg-cover bg-center ">
       <img src={bigShoeImg} alt="shoe collection" width={580} height={500} className="object-contain relative z-10" />

        <div className="flex  sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[20%] max-sm:px-6">
          <ShoeCart imgUrl={bigShoe1} changeBigShoeImage={(shoe)=>{setBigShoeImg(bigShoe1)}} bigShoeImage={bigShoeImg}/>
          <ShoeCart imgUrl={bigShoe2}  changeBigShoeImage={(shoe)=>{setBigShoeImg(bigShoe2)}} bigShoeImage={bigShoeImg}/>
          <ShoeCart imgUrl={bigShoe3} changeBigShoeImage={(shoe)=>{setBigShoeImg(bigShoe3)}} bigShoeImage={bigShoeImg}/>
        </div>
      </div>

       
    </section>
  )
}

export default Hero
