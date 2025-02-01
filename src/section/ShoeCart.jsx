import { bigShoe1 } from "../assets/images"


function ShoeCart({imgUrl,changeBigShoeImage,bigShoeImage}) {
    const clickHandler=()=>{
        if(bigShoeImage!==imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
  return (

    <div className={`border-2 rounded-xl
        ${bigShoeImage===imgUrl?'border-red-400':
            'border-transparent'
        } cursor-pointer max-sm:flex-1
        `} onClick={clickHandler}>
        <div className="flex justify-center items-center bg-gray-400 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgUrl} alt="Shoe Collection" width={127} height={103} className="object-contain" />
        </div>
    </div>
  )
}

export default ShoeCart
