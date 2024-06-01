import React from 'react'


const Header = () => {
  return (
    <div className='animate-fadein relative header rounded-lg h-[70vh] bg-cover bg-center mt-[5vh] mx-auto ' >
      <div className='absolute bottom-14 gap-10 left-20 flex items-start justify-center flex-col'>
        <h2 className='text-white text-[70px] font-medium leading-[70px] max-w-[45vw]'>Order your favourite food here</h2>
        <p className='text-white '>Order your favorite dishes, made fresh and delivered fast. From hearty meals to light snacks and sweet treats, we've got it all. Enjoy great food from the comfort of your home.</p>
        <button className='bg-white py-3 px-6 text-gray-700 rounded-3xl hover:bg-orange-200  '>View Menu</button>
      </div>
    </div>
  )
}

export default Header