import Nav from './components/Nav'
import Hero from './section/Hero'
import PopularProduct from './section/PopularProduct'
import Quality from './section/Quality'
import ServiceCard from './components/ServiceCard'
import { copyrightSign, shieldTick, support, truckFast } from './assets/icons'
import Service from './section/Service'
import SpecialOffer from './section/SpecialOffer'
import Customer from './section/Customer'
import Suscribe from './section/Suscribe'
import Footer from './section/Footer'

function App() {
  return (
    <main>
    <Nav></Nav>
    <section className="xl:padding-l wide:padding-r padding-b ">
      
     <Hero/>
    </section>
    <section className='padding'>
      <PopularProduct/>
    </section>
    <section className='padding'>
     <Quality/>
    </section>
    <section className='padding-x py-10'>
      <Service/>
      
    </section>
    
    <section className='padding-x py-10'>
       <SpecialOffer/> 
    </section>
    <section className='bg-blue-100 padding'>
      <Customer/>
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Suscribe/>
    </section>
    <section className='bg-black padding-x padding-t pb-8'>
     <Footer/>
    </section>
  </main>
  )
}

export default App





