import { chartData } from '@/lib/demo_data';
import { Area, AreaChart, CartesianGrid, createHorizontalChart, Tooltip, XAxis, YAxis } from 'recharts';

export default function RevenueChart({ isAnimationActive = true }) {

    return (
        <div className="m-8">
            <h2 className="font-bold">График дохода</h2>
            <h3 className="text-sm muted">Смотрите доход на графике</h3>
            <AreaChart className="mt-5"
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={chartData}
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
                <CartesianGrid stroke="#eef0f5" vertical={false} />
                <XAxis tick={{ fill: "#929bad", fontSize: 12 }} dataKey="day" />
                <YAxis tick={{ fill: "#929bad", fontSize: 12 }} width="auto" />
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
        </div>
    )
}