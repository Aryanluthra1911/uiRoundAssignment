import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import dashboard from '../assets/dashboard.svg'
import car from '../assets/car.svg'
import booking from '../assets/booking.svg'
import notification from '../assets/notification.svg'
import settings from '../assets/settings.svg'
import NavbarCard from './NavbarCard.Jsx'
import payment from '../assets/payment.svg'
import transaction from '../assets/transaction.svg'
import report from '../assets/report.svg'
import logout from '../assets/logout.svg'

const Navbar = () => {
    const navbarcomponents = [{src:dashboard,title:"Dashboard"},{src:car,title:"Drivers"},{src:booking,title:"Booking"},{src:notification,title:"Notification"},{src:settings,title:"Settings"}]
    const reportcomponents = [{src: payment, title:'Payment Details'},{src: transaction, title:'Transaction'},{src: report, title:'Car Report'}]
    return (
        <div className='w-[18%] md:w-[22%] lg:w-[18%] h-full bg-[#0f1115] flex items-center flex-col border-r border-[#1f2937]'>
            <img src={logo} alt=""  className='w-[80%] h-20'/>
            <div className=' w-[80%] h-[35%] flex flex-col justify-around items-center  border-[#7a7a7a]'>
                {navbarcomponents.map((idx,key)=>(
                    <NavbarCard src={idx.src} title={idx.title} key={key}/>
                ))}
            </div>
            <div className=' h-[5%] w-[80%] border-b-2 border-[#7a7a7a]'></div>
            <div className=' w-[80%] h-[35%] flex flex-col justify-start gap-4 items-center pt-6 border-[#7a7a7a]'>
                <div className='text-[#6a6a6a] h-[5%] pb-5 w-full'>Report</div>
                {reportcomponents.map((idx,key)=>(
                    <NavbarCard src={idx.src} title={idx.title} key={key}/>
                ))}
            </div>
            <button className='text-2xl text-white bg-[#9a9a9a] w-[90%] rounded-2xl h-15 flex justify-center items-center'>
                <img src={logout} alt="" className='w-8 h-8'/>
                Logout
            </button>
        </div>
    )
}

export default Navbar