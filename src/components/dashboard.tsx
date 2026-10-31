"use client"

import { Area, AreaChart, CartesianGrid, createHorizontalChart, Tooltip, XAxis, YAxis } from 'recharts';

export const data = [
    { day: "Пн ", revenue: 42000, }, { day: "Вт", revenue: 58000 },
    { day: "Ср", revenue: 49000 }, { day: "Чт", revenue: 76000 },
    { day: "Пт", revenue: 65000 }, { day: "Сб", revenue: 91000 },
    { day: "Вс", revenue: 84000 }
];

const Dashboard = ({ isAnimationActive = true }) => (
    <AreaChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" />
        <YAxis width="auto" />
        <Tooltip />
        <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8b5cf6"
            activeDot={{ stroke: '#8b5cf6' }}
            fillOpacity={1}
            fill="url(#colorUv)"
            isAnimationActive={isAnimationActive}
            animationBegin={200}
            animationDuration={1000}
            strokeWidth={3}
        />
        <Area
            type="monotone"
            dataKey="y"
            stroke="#82ca9d"
            activeDot={{ stroke: '#82ca9d' }}
            fillOpacity={1}
            fill="url(#colorPv)"
            isAnimationActive={isAnimationActive}
        />
    </AreaChart>
);

export default Dashboard;