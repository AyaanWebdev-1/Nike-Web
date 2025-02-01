import {headerLogo} from '../assets/images/'
import{hamburger} from '../assets/icons'
import Button from './Button'
function Nav() {
  return (
    
      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
               <li className=' cursor-pointer font-montserrat leading-normal text-lg  text-gray-400'>Home</li>
               <li className=' cursor-pointer font-montserrat leading-normal text-lg text-gray-400'>About Us</li>
               <li className=' cursor-pointer font-montserrat leading-normal text-lg  text-gray-400'>Contact Us</li>
               <li className='cursor-pointer font-montserrat leading-normal text-lg  text-gray-400'>Products</li>
               
            </ul>
            <div className='flex flex-end  max-lg:hidden'>
                <Button label={"Login"} backgroundColor={'bg-red-400 text-white '}/>
                <Button label={"Sign Up"} backgroundColor={'bg-white'} padding={"ml-5"} hoverEffect={" hover:bg-red-400 hover:text-white"} />
            </div>
           
            <div>
                <img src={hamburger} alt={hamburger} width={25} height={25} className="hidden max-lg:block" />
            </div>
            
        </nav>

      </header>
    
  )
}

export default Nav
