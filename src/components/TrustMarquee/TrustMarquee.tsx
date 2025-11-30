import Marquee from 'react-fast-marquee'
import './trust.css'

const logos = [
    'binance.svg',
    'coinbase.svg',
    'okx.png',
    'ledger.svg',
    'a16z.svg',
    'code4rena.svg',
    'trailofbits.png'
]

export function TrustMarquee() {
    return (
        <section className="trust" aria-label="trusted brands">
            <div className="trust__band">
                <div className="trust__chip">Trusted by teams across crypto</div>

                <div className="trust__row">
                    <Marquee gradient={false} speed={120} pauseOnHover>
                        {logos.concat(logos).map((l, i) => (
                            <figure key={`logo-${i}`} className="trust__logoWrap">
                                <img src={`/logos/${l}`} alt="" className="trust__logo" />
                            </figure>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default TrustMarquee
