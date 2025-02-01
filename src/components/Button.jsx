

function Button({label,imgUrl,backgroundColor,textColor,borderColor,padding,hoverEffect}) {
  return (
    
      <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full
        ${
          backgroundColor ?
          `${backgroundColor}
           ${textColor} 
           ${borderColor}
           ${padding}
           ${hoverEffect}`
          : "text-white bg-red-400 rounded-full border-red-400"}`}
          >
       {label}
       {imgUrl &&<img src={imgUrl} alt="arrowRight" className="ml-2 rounded-full w-5 h-5" />}
      </button>
    
  )
}

export default Button
