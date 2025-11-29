import { useEffect, useMemo, useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import './networks.css'

type Chain = { name: string; logo: string; tag: 'EVM' | 'L2' | 'Other' }

const chains: Chain[] = [
    { name: 'Ethereum', logo: '/logos/ethereum.svg', tag: 'EVM' },
    { name: 'Polygon', logo: '/logos/polygon.svg', tag: 'EVM' },
    { name: 'BNB Chain', logo: '/logos/bnb.svg', tag: 'EVM' },
    { name: 'Arbitrum', logo: '/logos/arbitrum.svg', tag: 'L2' },
    { name: 'Optimism', logo: '/logos/optimism.svg', tag: 'L2' },
    { name: 'Base', logo: '/logos/base.svg', tag: 'L2' },
    { name: 'Avalanche', logo: '/logos/avalanche.svg', tag: 'EVM' },
    { name: 'Solana', logo: '/logos/solana.svg', tag: 'Other' }
]

const filters = ['All', 'EVM', 'L2', 'Other'] as const
type Filter = typeof filters[number]

export default function NetworksMap() {
    const [active, setActive] = useState<Filter>('All')

    useEffect(() => {
        const read = () => {
            const sp = new URLSearchParams(location.search)
            const q = sp.get('net') as Filter | null
            setActive(filters.includes(q as Filter) ? (q as Filter) : 'All')
        }
        read()
        const onPop = () => read()
        window.addEventListener('popstate', onPop)
        return () => window.removeEventListener('popstate', onPop)
    }, [])

    const filtered = useMemo(() => (active === 'All' ? chains : chains.filter(c => c.tag === active)), [active])

    const onTabClick = (f: Filter) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setActive(f)
        const sp = new URLSearchParams(location.search)
        if (f === 'All') sp.delete('net')
        else sp.set('net', f)
        const next = `${location.pathname}?${sp.toString()}#networks`.replace(/\?$/, '')
        history.pushState({}, '', next)
        const el = document.getElementById('networks')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section id="networks" className="networks" aria-labelledby="networks-title">
            <header className="networks__hdr">
                <h2 id="networks-title">Supported networks</h2>
                <nav className="networks__tabs" aria-label="filters">
                    {filters.map(f => (
                        <a
                            key={f}
                            className={`networks__tab ${active === f ? 'is-active' : ''}`}
                            href={`?net=${encodeURIComponent(f)}#networks`}
                            onClick={onTabClick(f)}
                        >
                            {f}
                        </a>
                    ))}
                </nav>
            </header>

            <Tooltip.Provider delayDuration={120}>
                <ul className="networks__grid" role="list">
                    {filtered.map(c => (
                        <Tooltip.Root key={c.name}>
                            <Tooltip.Trigger asChild>
                                <li className="net" title={c.name}>
                                    <img src={c.logo} alt="" />
                                </li>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content className="net__tip">
                                    {c.name}
                                    <Tooltip.Arrow className="net__arrow" />
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    ))}
                </ul>
            </Tooltip.Provider>
        </section>
    )
}
