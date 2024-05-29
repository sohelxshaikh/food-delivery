import React from 'react'


const Header = () => {
  return (
    <div className='animate-fadein relative header rounded-lg h-[70vh] bg-cover bg-center mt-[5vh] mx-auto ' >
      <div className='absolute bottom-14 gap-10 left-20 flex items-start justify-center flex-col'>
        <h2 className='text-white text-[70px] font-medium leading-[70px] max-w-[45vw]'>Order your favourite food here</h2>
        <p className='text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quibusdam excepturi odit porro blanditiis voluptas temporibus cumque in quasi. Nesciunt  in obcaecati deserunt mollitia.</p>
        <button className='bg-white py-3 px-6 text-gray-700 rounded-3xl hover:bg-orange-200  '>View Menu</button>
      </div>
    </div>
  )
}

export default Header