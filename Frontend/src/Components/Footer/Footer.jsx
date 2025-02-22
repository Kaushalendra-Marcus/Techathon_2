import React from 'react'
import {BrowserRouter as Router, Route,Routes, Link,NavLink} from 'react-router-dom'
const Footer = () => {

  return (
    <>
    <div className='grid grid-cols-4 gap-9 '>
      <div className='bg-transparent'>
        <NavLink 
          to={'/'}
        >
          <img 
          className='rounded-full h-70 w-70'
          src="https://cdni.iconscout.com/illustration/premium/thumb/artificial-intelligence-robot-teaching-people-illustration-download-in-svg-png-gif-file-formats--ai-teacher-learning-pack-science-technology-illustrations-8041701.png?f=webp" alt="" />
        </NavLink>
      </div>
      <div className='text-white flex flex-col mt-10 gap-4 items-start ml-10'>
      <h1 className='text-gray-100 font-medium text-xl'>Quick Links</h1>
        <NavLink
        className='text-gray-300'
         to={'/'}>
          Home
        </NavLink>
        <NavLink
        className='text-gray-300'
         to={'/'}>
          AI Tutor
        </NavLink>
        <NavLink
        className='text-gray-300'
         to={'/'}>
          Home
        </NavLink>
        <NavLink
        className='text-gray-300'
         to={'/'}>
          Home
        </NavLink>
      </div>
      <div className='text-white flex flex-col mt-10 gap-4 items-start ml-10'>
      <h1 className='text-gray-100 font-medium text-xl'>Quick Links</h1>
        <NavLink
        className='text-gray-300'
         to={'/'}>
          Home
        </NavLink>
        <NavLink
        className='text-gray-300'
         to={'/'}>
          AI Tutor
        </NavLink>
        <NavLink
        className='text-gray-300'
         to={'/'}>
          Home
        </NavLink>
        <NavLink
        className='text-gray-300'
         to={'/'}>
          Home
        </NavLink>
      </div>
      <div className='text-white flex flex-col mt-10 gap-4 items-start ml-10'>
      <h1 className='text-gray-100 font-medium text-xl'>GET IN TOUCH</h1>
      <div className='flex gap-2 items-center justify-center'>
      <span className="material-icons" style={{ fontSize: "26px", color: "gray" }}>
        mail
      </span>
      <button className='text-gray-300 text-md hover:text-cyan-400 cursor-pointer hover:text-xl transition-all duration-300 ease-in-out transform hover:scale-90'>yadavkausha@gmail.com</button>
    </div>
      </div>
    </div>
    <div className='mb-4'>
      <span className='text-gray-200 text-base'>
        
    Copyright © {new Date().getFullYear()} AI TECH HELP Technologies Pvt Ltd. All Rights Reserved.
      </span>
    </div>
    </>
    
  )
}

export default Footer
