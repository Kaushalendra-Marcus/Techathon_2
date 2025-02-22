import React from 'react'

const Card_2 = () => {
  return (
    <div className='flex w-80 h-110 bg-[#444]/40 backdrop-blur-3xl shadow-lg mt-10 rounded-4xl border border-white/10'>
        <div className='flex items-center flex-col gap-6 p-4'>
            <h1 className='text-white font-bold text-3xl pt-3 text-center'>
                Disease Risk Prediction
            </h1>
            <img
                className='w-40 h-40 block'
                src="https://cdn-icons-png.flaticon.com/512/2867/2867117.png"
                alt="Health Icon"
            />
            <p className='text-white text-md text-center px-4'>
                Here you can track your health with AI, Find the best doctors.
            </p>
            <button className='bg-cyan-400 px-6 py-2 rounded-3xl font-medium cursor-pointer shadow-md hover:bg-cyan-300 transition-all duration-200'>
                Report
            </button>
        </div>
    </div>

)
}

export default Card_2
