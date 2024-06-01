import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/FoodItem'


const FoodDisplay = ({ category }) => {


    const { food_list } = useContext(StoreContext)
 

    return (
        <div>
            
            <h1 className='text-3xl font-semibold mt-10'>Top dishes near you</h1>
            <div className='h-screen w-full flex flex-wrap justify-between   rounded-lg my-10'>
                {food_list.filter((item) => {
       
                        if(category === "All"){
                            return item
                        }
                        else if (item.category === category){
                            return item
                        }
                        
                   

                       
                        // <FoodItem id = {item.id} name = {item.name} description={item.description} image={item.image} price ={item.price} />
                    

                }).map((item) => {
                    return <FoodItem id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} />
                })
                }

            </div>

        </div>
    )
}

export default FoodDisplay