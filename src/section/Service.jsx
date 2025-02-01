import { support,truckFast,shieldTick } from "../assets/icons"
import ServiceCard from "../components/ServiceCard"

function Service() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
          <ServiceCard imgUrl={support} label={"Love to help you"}/>
          <ServiceCard imgUrl={truckFast} label={"Secure Payment"}/>
          <ServiceCard imgUrl={shieldTick} label={"Free Shiping"}/>
    </section>
  )
}

export default Service
