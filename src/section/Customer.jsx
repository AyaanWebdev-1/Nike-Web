import { customer1, customer2 } from "../assets/images"
import ReviewCard from "../components/ReviewCard"


function Customer() {
  return (
    <section className="max-container">
       <h3 className="font-palanquin text-center text-4xl font-bold ">
          What Our
          <span className="text-red-400"> Customers </span>
          Say?
       </h3>
       <p className="mt-4 m-auto max-w-lg text-center text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, molestiae blanditiis! Ullam, quos non. Nisi, doloribus? Quis est quia quasi!</p>
       <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
           <ReviewCard imgUrl={customer1} customerName={"Andro Pirlo"}/>
           <ReviewCard imgUrl={customer2} customerName={"Erika karkushapka"}/>
           
       </div>
    </section>
  )
}

export default Customer
