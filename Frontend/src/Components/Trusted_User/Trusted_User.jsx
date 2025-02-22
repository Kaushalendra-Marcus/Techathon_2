import React, { useEffect, useState } from 'react'
const Trusted_User = () => {
    const [user, setUser] = useState(0)
    
    useEffect(()=>{
        let target = 4000;
        let increament = Math.ceil(target/100)
        let interval = setInterval(()=>{
            setUser((prev)=>{
                if(prev + increament >= target){
                    clearInterval(interval)
                    return target
                }
                return prev + increament
            })
        },20)
        return ()=>{
            clearInterval(interval)
        }
    }

    )
  return (
    <div className='text-white text-2xl font-semibold'>
      {user}+
    </div>
  )
}

export default Trusted_User
