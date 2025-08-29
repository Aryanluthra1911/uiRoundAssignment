import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const HireCancelCard = ({ hired=54, canceled=20, pending=26 }) => {
    const data = [
        { name: 'Hired', value: hired, color: '#1d4ed8' },
        { name: 'Canceled', value: canceled, color: '#22c55e' },
        { name: 'Pending', value: pending, color: '#ef4444' },
    ]

    return (
        <div className="w-[90%] shadow-md border border-[#1f2937] hover:border-gray-600 rounded-xl bg-[#0f1115] flex flex-col items-center p-3">
            <div className="flex justify-between w-full mb-2">
                <div className="text-lg text-gray-200 font-semibold">Hire vs Cancel</div>
                <div className="text-xs px-3 py-1 flex items-center justify-center rounded-xl bg-[#0b0d12] border border-[#1f2937] text-gray-300">Today</div>
            </div>

            <div className="w-full flex flex-col items-center gap-3">
                <div className="relative w-32 h-32">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={data} dataKey="value" innerRadius={34} outerRadius={50} startAngle={90} endAngle={-270} paddingAngle={2} stroke="none">
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#0f1115] rounded-full"></div>
                </div>

                <div className="w-full mt-2">
                    <div className="flex items-center justify-between text-gray-300 mb-2">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#1d4ed8]"></span>
                            <span>Total Hired</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#22c55e] font-semibold">{hired}% <span>↑</span></div>
                    </div>
                    <div className="flex items-center justify-between text-gray-300 mb-2">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#22c55e]"></span>
                            <span>Total Canceled</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#22c55e] font-semibold">{canceled}% <span>↑</span></div>
                    </div>
                    <div className="flex items-center justify-between text-gray-300">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ef4444]"></span>
                            <span>Total Pending</span>
                        </div>
                        <div className="flex items-center gap-1 text-red-500 font-semibold">{pending}% <span>↓</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireCancelCard


