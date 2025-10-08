// src/components/FeaturesGrid/FeaturesGrid.tsx
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import './features.css';

const items = [
    { title: 'Best price routing',  lottie: '/lottie/routing.json',  blurb: 'Aggregated liquidity across venues.' },
    { title: 'MEV shield',          lottie: '/lottie/shield.json',   blurb: 'Protects orders from toxic flow.' },
    { title: 'Non-custodial',       lottie: '/lottie/keys.json',     blurb: 'You keep the keys. Always.' },
    { title: 'Transparent fees',    lottie: '/lottie/fees.json',     blurb: 'Clear pricing with no surprises.' },
    { title: 'Open source',         lottie: '/lottie/code.json',     blurb: 'Auditable core components.' },
    { title: 'Mobile ready',        lottie: '/lottie/mobile.json',   blurb: 'Smooth experience on the go.' },
];

export function FeaturesGrid() {
    const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return (
        <section id="benefits" className="features" aria-label="Product benefits">
            <div className="features__grid">
                {items.map((it, i) => (
                    <motion.article
                        key={i}
                        className="feature"
                        whileHover={prefersReduced ? {} : { rotateX: 3, rotateY: -3, translateZ: 2 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="feature__icon" aria-hidden="true">
                            <Player
                                autoplay={!prefersReduced}
                                loop={!prefersReduced}
                                src={it.lottie}
                                style={{ height: 64, width: 64 }}
                            />
                        </div>
                        <h3 className="feature__title">{it.title}</h3>
                        <p className="feature__blurb">{it.blurb}</p>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}

export default FeaturesGrid;
