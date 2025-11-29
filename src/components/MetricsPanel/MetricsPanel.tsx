import CountUp from 'react-countup'
import { useMemo } from 'react'
import { ResponsiveContainer, LineChart, Line, YAxis, XAxis } from 'recharts'
import './metrics.css'

type Point = { x: number; v: number }

function Sparkline({ data }: { data: Point[] }) {
    return (
        <div className="metric__spark">
            <ResponsiveContainer width="100%" height={40}>
                <LineChart data={data} margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
                    <XAxis dataKey="x" hide />
                    <YAxis hide />
                    <Line type="monotone" dataKey="v" dot={false} stroke="var(--accent)" strokeWidth={2} isAnimationActive={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default function MetricsPanel() {
    const data = useMemo<Point[]>(
        () => Array.from({ length: 24 }).map((_, i) => ({ x: i, v: Math.sin(i / 3) + 5 + Math.random() })),
        []
    )
    return (
        <section id="metrics" className="metrics" aria-label="Key metrics (demo)">
            <article className="metric">
                <div className="metric__label">TVL</div>
                <div className="metric__value">
                    $<CountUp end={1234000000} duration={1.2} separator="," />
                </div>
                <Sparkline data={data} />
            </article>
            <article className="metric">
                <div className="metric__label">Trades (24h)</div>
                <div className="metric__value">
                    <CountUp end={48231} duration={1.2} separator="," />
                </div>
                <Sparkline data={data} />
            </article>
            <article className="metric">
                <div className="metric__label">p50 Latency</div>
                <div className="metric__value">
                    <CountUp end={135} duration={1.2} /> ms
                </div>
                <Sparkline data={data} />
            </article>
            <small className="metrics__note">Demo data, regenerated on load</small>
        </section>
    )
}
