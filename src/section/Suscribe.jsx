import Button from "../components/Button"

function Suscribe() {
  return (
    <section className="max-container flex justify-center items-center max-lg:flex-col gap-10 " id="contact-us">
      
          <h3 className="text-4xl font-bold leading-[60px] lg:max-w-md font-palanquin "> Sign up for <span className="text-red-400"> Updates</span> & Newsletters
          </h3>
          <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border border-slate-500 rounded-full  justify-between" >
            <input type="text" placeholder="abc@gmail.com" className="ml-5"/>
            <div className="flex max-sm:justify-end items-center max-sm:w-full">
              <Button label={"Sign Up"}></Button>
            </div>
          </div>
    </section>
  )
}

export default Suscribe
