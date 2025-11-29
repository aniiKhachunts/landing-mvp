import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './phone.css'

export default function HeroPhone() {
    const sectionRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end']
    })

    const titleOpacity = useTransform(scrollYProgress, [0, 0.28, 0.5], [1, 1, 0])
    const titleY = useTransform(scrollYProgress, [0, 1], [0, -56])

    const rotateX = useTransform(scrollYProgress, [0, 1], [58, 0])
    const phoneY = useTransform(scrollYProgress, [0, 1], ['-8vh', '-18vh'])
    const scale = useTransform(scrollYProgress, [0, 1], [0.99, 1.02])

    const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.34, 0.6])
    const shadowScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.08])
    const shadowBlurVal = useTransform(scrollYProgress, [0, 1], [16, 24])
    const shadowFilter = useTransform(shadowBlurVal, v => `blur(${v}px)`)

    return (
        <section id="product" className="hp" ref={sectionRef}>
            <div className="hp__sticky">
                <motion.div className="hp__text" style={{ opacity: titleOpacity, y: titleY }}>
                    <div className="container">
                        <h1 className="hp__title">Instant crypto execution</h1>
                        <p className="hp__sub">Unified liquidity routing and MEV protection for pro grade trading</p>
                        <div className="hp__cta">
                            <a href="#demo" className="btn btn--primary">Open demo</a>
                            <a href="#docs" className="btn">View docs</a>
                        </div>
                    </div>
                </motion.div>

                <div className="hp__stage">
                    <motion.div
                        className="hp__phone"
                        style={{
                            y: phoneY,
                            scale,
                            rotateX,
                            transformOrigin: '50% 0px',
                            willChange: 'transform'
                        }}
                    >
                        <img className="hp__screen" src="/ui/hero-phone.svg" alt="Trading screen" draggable={false} />
                        <motion.div className="hp__shadow" style={{ scale: shadowScale, filter: shadowFilter }} />
                        <motion.div className="hp__glow" style={{ opacity: glowOpacity }} />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
