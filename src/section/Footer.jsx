import {footerLogo} from "../assets/images"

import { facebook, instagram, twitter } from "../assets/icons"

function Footer() {
  return (
    <footer className="max-container ">
      <div className=" flex justify-between items-start gap-20 flex-wrap mg-lg:flex-col">
         <div className=" flex flex-col items-start">
          <a href="/">
          <img src={footerLogo} alt="" width={140} height={46} />
          </a>
          <p className="text-white mt-6 text-base leading-7 font-montserrat sm:max-w-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, quod!</p>
          <div className="flex items-center gap-5 mt-8 bg-white rounded-full p-2 ">
             <img src={twitter} alt=""  width={24}/>
             <p>Lorem ipsum dolor sit amet.</p>
            
          </div>
          <div className="flex items-center gap-5 mt-8 bg-white rounded-full p-2  ">
             <img src={facebook} alt="" />
             <p>Lorem ipsum dolor sit amet.</p>
            
          </div>
          <div className="flex items-center gap-5 mt-8 bg-white rounded-full p-2 ">
             <img src={instagram} alt="" />
             <p>Lorem ipsum dolor sit amet.</p>
          </div>
         </div>
      </div>
    </footer>
  )
}

export default Footer
