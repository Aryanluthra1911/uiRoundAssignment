import React from 'react'
import downward_arrow from '../assets/downward-arrow.svg'
import upward_arrow from '../assets/upward-arrow.svg'
const StatCard = ({title,amt,compareamt,previousamt,percentage}) => {
    
    return (
        <div className="w-[90%] shadow-md border border-[#1f2937] hover:border-gray-600 rounded-xl bg-[#0f1115] flex flex-col items-center p-4">
            <div className="flex justify-between w-full mb-2">
                <div className="text-lg text-gray-200 font-semibold">{title}</div>
                <div className="text-xs px-3 py-1 flex items-center justify-center  rounded-xl bg-[#0b0d12] border border-[#1f2937] text-gray-300">
                    Today
                </div>
            </div>

            <div className="border-b border-[#1f2937] w-full mb-2"></div>
            <div className="w-full flex justify-between items-center mb-2">
                <div className="text-2xl text-gray-100 font-bold">${amt}</div>
                <div className={`flex items-center ${percentage>0? 'text-[#4bc837]':' text-red-500'} text-sm font-semibold gap-1`}>
                    <img src={percentage>0? upward_arrow:downward_arrow} alt="" className="w-3 h-3" />
                    {percentage>0? percentage : -1*percentage}%
                </div>
            </div>
            <div className="w-full text-gray-400 text-sm mb-2">
                Compared to <span className="font-medium">${compareamt}</span> yesterday
            </div>
            <div className="w-full flex justify-between items-center font-semibold text-gray-300">
                <span>Last week {title}</span>
                <span>${previousamt}</span>
            </div>
        </div>
    )
}

export default StatCard
