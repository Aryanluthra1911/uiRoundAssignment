import React from 'react'
import StatCard from './StatCard'
import HireCancelCard from './HireCancelCard'

const StaticBlock = () => {
    return (
        <div className='w-[22%] h-full bg-[#0b0d12] flex flex-col items-center justify-around border-l border-[#1f2937]'>
            <div className='h-[10%] w-[90%] flex flex-col items-center justify-center'>
                <div className='w-full text-xl text-gray-200 font-semibold'>Todays Statistics</div>
                <div className='w-full text-md text-gray-400'>tue, 14 Nov, 2022, 11:30 AM</div>
            </div>
            <StatCard title={'Income'} amt={'9460.00'} compareamt={'9940'} previousamt={'25658.00'} percentage={-1.5}/>
            <StatCard title={'Expenses'} amt={'5660.00'} compareamt={'5240'} previousamt={'22658.00'} percentage={2.5}/>
            <HireCancelCard hired={52} canceled={22} pending={26}/>
        </div>
    )
}

export default StaticBlock