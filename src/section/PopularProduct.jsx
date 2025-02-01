import { shoe4, shoe5, shoe6, shoe7 } from "../assets/images"
import PopularProducts from "../components/PopularProducts"

function PopularProduct() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-10 justify-start">
        <h2 className="text-6xl font-bold  font-palanquin "> <span className="text-red-400">Popular</span> Products</h2>
        <p className="text-slate-400 lg:max-w-lg mt-2 font-montserrat ">Experience top-notch qulaity and style with 
          our sought-after selections.<br/> Discover a world of comfort,design and value</p>

      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
           <PopularProducts imgUrl={shoe4} name={"Nike Air lordan-100"} price={"$230.20"}/>
           <PopularProducts imgUrl={shoe5} name={"Nike Air lordan-10"} price={"$250.20 "}/>
           <PopularProducts imgUrl={shoe6} name={"Nike Air lordan-101"} price={"$200.60"}/>
           <PopularProducts imgUrl={shoe7} name={"Nike Air lordan-001"} price={"$300.00"}/>
      </div>
      
    </section>
  )
}

export default PopularProduct
