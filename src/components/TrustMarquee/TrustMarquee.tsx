import Marquee from 'react-fast-marquee';
import './trust.css';

const logos = [
    { name: 'Binance',  file: 'binance.svg' },
    { name: 'Coinbase', file: 'coinbase.svg' },
    { name: 'OKX',      file: 'okx.svg' },
    { name: 'Ledger',   file: 'ledger.svg' },
    { name: 'a16z',     file: 'a16z.svg' },
];

export function TrustMarquee() {
    return (
        <section className="trust" aria-label="Trusted by">
            <Marquee gradient={false} speed={50} pauseOnHover>
                {logos.map((l, i) => (
                    <img
                        key={i}
                        src={`/logos/${l.file}`}
                        className="trust__logo"
                        alt={l.name}
                        loading="lazy"
                        width={140}
                        height={40}
                    />
                ))}
            </Marquee>
        </section>
    );
}

export default TrustMarquee;
