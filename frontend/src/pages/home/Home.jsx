import React from 'react'
import Header from '../../components/header/Header'
import Menu_list from '../../components/menu_list/Menu_list'
import { useState } from 'react'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'

const Home = () => {



  const  [category , setCategory] = useState("All")
  return (
    <>
    <Header/>
    <Menu_list  category={category} setCategory={setCategory}/>
    <FoodDisplay category={category} />
    </>

  )
}

export default Home