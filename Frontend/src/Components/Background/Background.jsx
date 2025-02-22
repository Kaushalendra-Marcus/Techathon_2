import React from 'react'
import './Background.css'
import logo_image from '../../assets/AI image logo.png'
import Background_image from '../../assets/Background_Image.png'
import Trusted_User from '../Trusted_User/Trusted_User'
import Card_1 from '../Card_Components/Card_1'
import Card_2 from '../Card_Components/Card_2'
import Card_3 from '../Card_Components/Card_3'
import Slider_Doc from '../Slider/Slider_Doc'
import Footer from '../Footer/Footer'
import ChatBot from './ChatBot/ChatBot'



const Background = () => {
  return (
    <div className='scrollbar-hide'>
    <div className='flex w-full items-center justify-between'>
      <div className='first_half_bg'>
        <img className='logo_image' src='https://finanteq.com/wp-content/uploads/2023/10/AI-in-finance-and-banking-naglowek.png' alt="" />
      </div>
      <div className='second_half_bg'>
        <div className='hero_section'>
          <div className=''>
            <h1 className='text-6xl font-bold text-white'>Track Your Health with AI</h1>
          </div>
        </div>
{/* Connect with api  */}
        <div>
          <ChatBot />
        </div>
{/* end with api  */}
      <div>
        <h1 className='text-white font-bold text-3xl'>Trusted Users</h1>
        <Trusted_User />
      </div>
      </div>
    </div>
    <div className='flex justify-between'>
    <Card_1 />
    <Card_2 />
    <Card_3 />
    </div>
    <div className='flex justify-between'>
    <Card_1 />
    <Card_2 />
    <Card_3 />
    </div>
    <div className= 'pt-16 pb-16'>
      <Slider_Doc />
    </div>
    <div>
      <Footer />
    </div>
    </div>
  )
}


export default Background
