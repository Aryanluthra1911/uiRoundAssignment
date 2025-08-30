import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const EarningBlock = () => {
    const data = [
        { month: 'May', currentYear: 250000, lastYear: 120000 },
        { month: 'Jun', currentYear: 250000, lastYear: 180000 },
        { month: 'Jul', currentYear: 150000, lastYear: 190000 },
        { month: 'Aug', currentYear: 240000, lastYear: 150000 },
        { month: 'Sep', currentYear: 200000, lastYear: 140000 },
        { month: 'Oct', currentYear: 250000, lastYear: 160000 }
    ];

    const formatYAxis = (value) => {
        if (value >= 1000) {
            return `$${value / 1000}k`;
        }
        return `$${value}`;
    };

    return (
        <div className='h-[35vh] w-[90%] max-w-full rounded-2xl p-3 bg-[#0f1115] shadow-md border border-[#1f2937] hover:border-gray-600 flex flex-col overflow-hidden'>
            <div className="flex items-center justify-between mb-2 flex-shrink-0">
                <h3 className="text-sm font-semibold text-gray-200">Earning Summary</h3>
                <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-400">Mar 2022 - Oct 2022</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 mb-2 flex-shrink-0">
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">Last 6 months</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">Same period last year</span>
                </div>
            </div>
            <div className="flex-1 min-h-0 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                        data={data} 
                        margin={{ top: 10, right: 5, left: 5, bottom: 10 }}
                    >
                        <XAxis 
                            dataKey="month" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 9, fill: '#9CA3AF' }}
                            interval={0}
                        />
                        <YAxis 
                            tickFormatter={formatYAxis}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 9, fill: '#9CA3AF' }}
                            domain={[0, 300000]}
                            tickCount={4}
                            width={35}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="currentYear" 
                            stroke="#60A5FA"
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 3, fill: '#60A5FA' }}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="lastYear" 
                            stroke="#9CA3AF"
                            strokeWidth={2}
                            strokeDasharray="4 2"
                            dot={false}
                            activeDot={{ r: 2, fill: '#9CA3AF' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default EarningBlock;