import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'


const Menu_list = ({category,setCategory}) => {

   
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1 className='text-3xl font-semibold mt-10'>Explore our menu</h1>
        <p className='text-xl my-10 max-w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda perferendis quidem blanditiis quo, voluptatibus dolor repudiandae qui. Sint necessitatibus  Ullam, voluptas.</p>
        <div className='flex items-center text-center gap-10 overflow-x-scroll scrollbar-hide cursor-grab '>
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='flex flex-col gap-4 items-center min-w-48'>
                        <img src={item.menu_image} className={category === item.menu_name?"p-1 rounded-full border-4 border-orange-600":""} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                   
                   
                )
            })}
            
        </div>
        <hr  className='h-[2px] my-10 bg-gray-300 w-full'></hr>

    </div>
    
  )
}

export default Menu_list