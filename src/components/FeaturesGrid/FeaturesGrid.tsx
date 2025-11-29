import { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion, useReducedMotion } from 'framer-motion'
import './features.css'

const items = [
    { title: 'Best price routing', lottie: '/lottie/routing.json', blurb: 'Aggregated liquidity across venues.' },
    { title: 'MEV shield', lottie: '/lottie/shield.json', blurb: 'Protects orders from toxic flow.' },
    { title: 'Non-custodial', lottie: '/lottie/keys.json', blurb: 'You keep the keys. Always.' },
    { title: 'Transparent fees', lottie: '/lottie/fees.json', blurb: 'Clear pricing with no surprises.' },
    { title: 'Open source', lottie: '/lottie/code.json', blurb: 'Auditable core components.' },
    { title: 'Mobile ready', lottie: '/lottie/mobile.json', blurb: 'Smooth experience on the go.' }
]

function LottieIcon({ src }: { src: string }) {
    const reduced = useReducedMotion()
    const [err, setErr] = useState(false)
    if (err) return <div style={{ width: 56, height: 56, display: 'grid', placeItems: 'center' }}>✨</div>
    return (
        <Player
            autoplay={!reduced}
            loop={!reduced}
            src={src}
            style={{ width: 56, height: 56 }}
            onEvent={e => {
                if (e === 'error') setErr(true)
            }}
        />
    )
}

export default function FeaturesGrid() {
    const reduced = useReducedMotion()
    return (
        <section id="features" className="features" aria-labelledby="features-title">
            <header className="features__hdr">
                <h2 id="features-title">Why FluxSim</h2>
                <a className="features__docs" href="#docs">Docs →</a>
            </header>
            <motion.ul
                className="features__grid"
                role="list"
                initial={reduced ? undefined : { opacity: 0, y: 8 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
            >
                {items.map((it, i) => (
                    <motion.li
                        key={i}
                        className="feature"
                        whileHover={reduced ? undefined : { rotateX: 2, rotateY: -2, y: -2 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    >
                        <div className="feature__iconWrap" aria-hidden="true">
                            <div className="feature__iconRing" />
                            <LottieIcon src={it.lottie} />
                        </div>
                        <h3 className="feature__title">{it.title}</h3>
                        <p className="feature__blurb">{it.blurb}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )
}
