// src/components/Tokenomics/Tokenomics.tsx
import './tokenomics.css';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
    { name: 'Team',        value: 20 },
    { name: 'Investors',   value: 18 },
    { name: 'Community',   value: 40 },
    { name: 'Liquidity',   value: 12 },
    { name: 'Ecosystem',   value: 10 },
];

const colors = ['#67e8f9', '#22d3ee', '#34d399', '#bef264', '#f0abfc'];

export function Tokenomics() {
    const total = data.reduce((a, b) => a + b.value, 0);

    return (
        <section id="token" className="tokenomics" aria-labelledby="tokenomics-title">
            <div className="tokenomics__container">
                <header className="tokenomics__header">
                    <h2 id="tokenomics-title">Tokenomics</h2>
                    <p className="tokenomics__sub">High-level allocation overview (demo values)</p>
                </header>

                <div className="tokenomics__grid">
                    <div className="tokenomics__chart" role="img" aria-label="Token allocation pie chart">
                        <ResponsiveContainer width="100%" height={260}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={70}
                                    outerRadius={110}
                                    paddingAngle={1.5}
                                >
                                    {data.map((entry, i) => (
                                        <Cell key={`slice-${entry.name}`} fill={colors[i % colors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(v: number, n: string) => [`${v}%`, n]}
                                    contentStyle={{ background: '#0b0f14', border: '1px solid rgba(255,255,255,.08)' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <ul className="tokenomics__legend" aria-label="Legend">
                        {data.map((d, i) => (
                            <li key={d.name}>
                                <span className="tokenomics__dot" style={{ background: colors[i % colors.length] }} />
                                <span className="tokenomics__name">{d.name}</span>
                                <span className="tokenomics__value">{d.value}%</span>
                            </li>
                        ))}
                        <li className="tokenomics__total">
                            <span>Total</span>
                            <span>{total}%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Tokenomics;
