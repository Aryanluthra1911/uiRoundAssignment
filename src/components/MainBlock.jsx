import React from 'react'
import search from '../assets/search.svg'
import notification2 from '../assets/notification.svg'
import car from '../assets/car.svg'
import arrowdown from '../assets/arrowdown.svg'
import calender from '../assets/calender.svg'
import clock from '../assets/clock.svg'
import filter from '../assets/filter.svg'
import EarningBlock from './EarningBlock'

const MainBlock = () => {
    const carData = [
    {
        no: '01',
        carNo: '6465',
        driver: 'Alex Noman',
        status: 'Completed',
        earning: '$35.44',
        statusColor: 'bg-green-500'
    },
    {
        no: '02',
        carNo: '5665',
        driver: 'Razib Rahman',
        status: 'Pending',
        earning: '$0.00',
        statusColor: 'bg-blue-500'
    }
    ];
    return (
        <div className="h-full w-[60%] md:w-[58%] lg:w-[60%] bg-[#0b0d12] flex flex-col items-center justify-around">
            <div className="h-[10%] w-[90%] flex justify-end items-center space-x-6">
                <div className="relative">
                    <img src={notification2} alt="" className='w-8 h-full'/>
                </div>
                <div className="flex items-center w-72 bg-[#0f1115] border border-[#1f2937] rounded-full shadow-sm px-4 py-2">
                    <input
                        type="text"
                        placeholder="Search here"
                        className="flex-1 text-gray-200 text-sm outline-none bg-transparent"
                    />
                    <img src={search} alt="search" className="w-5 h-5 text-gray-400 cursor-pointer" />
                </div>
            </div>
            <div className='h-[20%] w-[90%] rounded-2xl p-3 bg-[#0f1115] shadow-md border border-[#1f2937] hover:border-gray-600'>
                <div className='w-full h-[30%] flex items-start font-bold text-gray-200'>
                    Car Availablity
                </div>
                <div className='w-full h-[60%] flex flex-wrap gap-3 justify-between items-center'>
                    <div className='border border-[#374151] h-[60%] w-[100%] md:w-[30%] rounded-2xl flex justify-around items-center px-2 bg-transparent'>
                        <img src={car} alt="" className='w-7 h-7'/>
                        <input type="text" placeholder='Car Number'className='w-[60%] outline-none bg-transparent text-gray-200 placeholder-gray-500'/>
                        <img src={arrowdown} alt="" className='w-7 h-7' />
                    </div>
                    <div className='border border-[#374151] h-[60%] w-[100%] md:w-[45%] rounded-2xl flex justify-around items-center gap-3 px-2'>
                        <div className='w-[50%] h-full flex justify-between items-center border-r-2 border-[#374151]'>
                            <img src={calender} alt="" className='w-5 h-5'/>
                            <input type="text" placeholder='Nov 20, 2022'className='w-full outline-none bg-transparent text-gray-200 placeholder-gray-500'/>
                        </div>
                        <div className='w-[50%] h-full flex justify-between items-center gap-6'>
                            <img src={clock} alt="" className='w-5 h-5'/>
                            <input type="text" placeholder='10am'className='w-full outline-none bg-transparent text-gray-200 placeholder-gray-500'/>
                            <img src={arrowdown} alt="" className='w-7 h-7' />
                        </div>
                    </div>
                    <button className='h-[60%] w-[100%] md:w-[20%] rounded-2xl bg-[#1d4ed8] hover:bg-[#2563eb] text-white font-bold'>Check</button>
                </div>
            </div>
            <div className='h-[30%] w-[90%] rounded-2xl p-3 bg-[#0f1115] shadow-md border border-[#1f2937] hover:border-gray-600'>
                <div className='w-full h-[10%]  flex items-center justify-between font-bold text-gray-200'>
                    <div>Live Car Status</div>
                    <div className='flex font-bold justify-center items-center'>
                        <img src={filter} alt="" className='w-5 h-5'/>
                        Filter
                    </div>
                </div>
                <div className='w-full hidden md:flex items-center py-2 border-b border-[#374151] text-sm font-medium text-gray-400'>
                    <div className='w-[10%]'>No.</div>
                    <div className='w-[15%]'>Car no.</div>
                    <div className='w-[25%]'>Driver</div>
                    <div className='w-[20%]'>Status</div>
                    <div className='w-[15%]'>Earning</div>
                    <div className='w-[15%]'></div>
                </div>
                <div className='flex-1'>
                    {carData.map((car, index) => (
                        <div key={index} className='w-full flex flex-wrap md:flex-nowrap items-center py-4 border-b border-[#1f2937] last:border-b-0 gap-2'>
                            <div className='w-auto md:w-[10%] text-sm text-gray-400'>{car.no}</div>
                            <div className='w-auto md:w-[15%] text-sm font-medium text-gray-200'>{car.carNo}</div>
                            <div className='w-auto md:w-[25%] flex items-center gap-2'>
                                <div className='w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold'>
                                    {car.driver.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className='text-sm font-medium text-gray-200'>{car.driver}</span>
                            </div>
                            <div className='w-auto md:w-[20%] flex items-center gap-2'>
                                <div className={`w-2 h-2 rounded-full ${car.statusColor}`}></div>
                                    <span className='text-sm text-gray-400'>{car.status}</span>
                                </div>
                                <div className='w-auto md:w-[15%] text-sm font-semibold text-gray-200'>{car.earning}</div>
                                <div className='w-full md:w-[15%] flex justify-end'>
                                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-transparent hover:border-gray-700'>
                                        Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            <EarningBlock/>
        </div>
    )
}

export default MainBlock
