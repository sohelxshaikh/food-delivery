import React, { useContext, useEffect } from 'react'
import add_icon_white from "../../../public/add_icon_white.png"
import remove_icon_red from "../../../public/remove_icon_red.png"
import add_icon_green from "../../../public/add_icon_green.png"
import rating_starts from "../../../public/rating_starts.png"
import  { StoreContext } from '../../context/StoreContext'


const FoodItem = ({ id, name, description, price, image }) => {

    
    const {cartItems , addToCart , removeFromCart} = useContext(StoreContext)


    
    return (

        <div className='w-[18vw]  shadow-xl rounded-2xl my-5 h-[55vh] '>
            <div className='relative'>
                <img className='rounded-t-2xl  ' src={image} alt="" />


              {
                    !cartItems[id] ? <img className='add absolute h-10 bottom-2 right-2' onClick={()=>addToCart(id)} src={add_icon_white} /> :
                        <div className='flex w-fit bottom-2 right-1 absolute gap-2 p-1 rounded-3xl bg-white items-center '>
                            
                          

                            <img className='h-6' onClick={() =>removeFromCart(id)} src={remove_icon_red} alt="" />
                            <h3>{cartItems[id]}</h3>
                            <img className='h-6' onClick={()=> addToCart(id)} src={add_icon_green} alt="+" />
                        </div>
                }
            </div>




            <div className='mt-5'>
                <div className='flex justify-between mb-5 items-center px-5'>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <img className='w-16' src={rating_starts} alt="rating" />

                </div>
                <p className=' px-5 my-2 text-sm text-[#676767]'>{description}</p>
                <h4 className='px-5 text-[#EE6048] font-semibold text-[22px]'>${price}</h4>

            </div>

        </div>
    )
}

export default FoodItem