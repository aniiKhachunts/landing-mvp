// src/components/NetworksMap/NetworksMap.tsx
import './networks.css';

type Net = { name: string; logo: string; note?: string };

const networks: Net[] = [
    { name: 'Ethereum',  logo: '/logos/ethereum.svg',  note: 'Mainnet' },
    { name: 'Arbitrum',  logo: '/logos/arbitrum.svg',  note: 'L2' },
    { name: 'Optimism',  logo: '/logos/optimism.svg',  note: 'L2' },
    { name: 'Base',      logo: '/logos/base.svg',      note: 'L2' },
    { name: 'Polygon',   logo: '/logos/polygon.svg',   note: 'PoS' },
    { name: 'BSC',       logo: '/logos/bnb.svg',  note: 'EVM' },
    { name: 'Avalanche', logo: '/logos/avalanche.svg', note: 'C-Chain' },
    { name: 'Solana',    logo: '/logos/solana.svg',    note: 'Non-EVM' },
];

export function NetworksMap() {
    return (
        <section id="networks" className="nets" aria-labelledby="nets-title">
            <div className="nets__hdr">
                <h2 id="nets-title">Supported networks</h2>
                <p className="nets__sub">Live or planned integrations (demo list)</p>
            </div>

            <div className="nets__grid">
                {networks.map((n) => (
                    <div key={n.name} className="net" title={`${n.name}${n.note ? ' — ' + n.note : ''}`}>
                        <img src={n.logo} alt="" className="net__logo" loading="lazy" />
                        <span className="net__name">{n.name}</span>
                        {n.note && <span className="net__note">{n.note}</span>}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NetworksMap;
