import { useEffect, useRef, useState } from 'react'
import './testimonials.css'

type T = { name: string; role: string; quote: string; avatar?: string }

const items: T[] = [
    { name: 'Alex P.', role: 'Head of Trading, Helix', quote: 'Execution quality is stellar — routing beats our in-house smart order router most days.', avatar: '/avatars/alex.png' },
    { name: 'Jin S.', role: 'Core Dev, L2 Labs', quote: 'The MEV mitigation is the real deal. Our test flows showed consistent savings.', avatar: '/avatars/jin.png' },
    { name: 'Morgan R.', role: 'PM, Quant Desk', quote: 'Fast, predictable, and easy to integrate. Exactly what we wanted for launch.', avatar: '/avatars/morgan.png' },
    { name: 'Lina S.', role: 'Risk, Radian Labs', quote: 'Transparent routing with consistent fills. Easy to reason about and defend.', avatar: '/avatars/lina.png' },
    { name: 'Omar R.', role: 'Product, OrbitEX', quote: 'Mobile execution finally feels smooth. Latency spikes are rare now.', avatar: '/avatars/omar.png' }
]

export default function Testimonials() {
    const railRef = useRef<HTMLDivElement>(null)
    const [canLeft, setCanLeft] = useState(false)
    const [canRight, setCanRight] = useState(true)

    const update = () => {
        const el = railRef.current
        if (!el) return
        const max = el.scrollWidth - el.clientWidth - 2
        setCanLeft(el.scrollLeft > 2)
        setCanRight(el.scrollLeft < max)
    }

    useEffect(() => {
        update()
        const el = railRef.current
        if (!el) return
        const onScroll = () => update()
        el.addEventListener('scroll', onScroll, { passive: true })
        const onResize = () => update()
        window.addEventListener('resize', onResize)
        return () => {
            el.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    const nudge = (dir: 1 | -1) => {
        const el = railRef.current
        if (!el) return
        const step = Math.max(340, Math.floor(el.clientWidth * 0.84))
        el.scrollBy({ left: dir * step, behavior: 'smooth' })
    }

    return (
        <section id="testimonials" className="testis" aria-labelledby="testis-title">
            <header className="testis__hdr">
                <h2 id="testis-title">What teams say</h2>
            </header>
            <div className="testis__wrap">
                <button className="testis__edge testis__edge--left" aria-label="Previous testimonials" onClick={() => nudge(-1)} disabled={!canLeft}>
                    <span className="testis__chev">‹</span>
                </button>
                <div className="testis__rail" ref={railRef} tabIndex={0} aria-roledescription="carousel">
                    {items.map((t, i) => (
                        <article key={i} className="testi" role="group" aria-label={`${t.name}, ${t.role}`}>
                            <div className="testi__badge" aria-hidden="true">
                                <svg width="28" height="28" viewBox="0 0 28 28" className="testi__quote">
                                    <path d="M10.2 6.5c-2.8 0-5 2.3-5 5.1 0 2.4 1.6 4.3 3.8 4.9-.2 2.9-2.1 5.2-4.8 5.9.7.9 1.9 1.2 3 .8 3.3-1.1 5.7-4.5 5.7-8.4V11.6c0-2.8-2.2-5.1-4.7-5.1Zm12 0c-2.8 0-5 2.3-5 5.1 0 2.4 1.6 4.3 3.8 4.9-.2 2.9-2.1 5.2-4.8 5.9.7.9 1.9 1.2 3 .8 3.3-1.1 5.7-4.5 5.7-8.4V11.6c0-2.8-2.2-5.1-4.7-5.1Z" />
                                </svg>
                            </div>
                            <p className="testi__quoteText">“{t.quote}”</p>
                            <div className="testi__head">
                                <img className="testi__avatar" src={t.avatar || '/avatars/placeholder.png'} alt="" loading="lazy" width={40} height={40} />
                                <div className="testi__meta">
                                    <div className="testi__name">{t.name}</div>
                                    <div className="testi__role">{t.role}</div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <button className="testis__edge testis__edge--right" aria-label="Next testimonials" onClick={() => nudge(1)} disabled={!canRight}>
                    <span className="testis__chev">›</span>
                </button>
            </div>
        </section>
    )
}
