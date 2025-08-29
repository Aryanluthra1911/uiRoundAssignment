import React, { useEffect, useState } from 'react'

const NavbarCard = ({src,title}) => {
    const [active,setactive]=useState(false)
    useEffect(() => {
        if (title === 'Dashboard') {
            setactive(true)
        }
    }, [title])
    return (
        <div  className={`${active?'bg-[#1e293b] pl-2 border-l-4 border-blue-500 rounded':''} h-[15%] w-full flex items-center gap-5 justify-start hover:bg-[#111827] hover:border-l-4 hover:border-gray-700 transition-colors`} >
            <img src={src} alt=""  className='h-full w-[15%]'/>
            <div className='text-xl text-gray-200 h-full flex justify-center items-center'>{title}</div>
        </div>
    )
}

export default NavbarCard