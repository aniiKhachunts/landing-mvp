import { useCallback } from 'react'
import './final.css'

export default function FinalCTA() {
    const onPrimary = useCallback(() => {
        const el = document.querySelector('#demo')
        if (!el) return
        const y = window.scrollY + (el as HTMLElement).getBoundingClientRect().top - 72
        ;(window as any).lenis ? (window as any).lenis.scrollTo(y) : window.scrollTo({ top: y, behavior: 'smooth' })
    }, [])

    return (
        <section id="contact" className="cta">
            <div className="cta__card">
                <div className="cta__shine" aria-hidden="true" />
                <div className="cta__grid">
                    <div className="cta__copy">
                        <span className="cta__eyebrow">Ready to build?</span>
                        <h2 className="cta__title">Build the future of trading today</h2>
                        <p className="cta__sub">Start a guided demo and see how unified routing upgrades your execution quality.</p>
                        <div className="cta__actions">
                            <button className="btn btn--primary" onClick={onPrimary}>Open demo</button>
                            <a className="btn btn--ghost" href="#docs">View docs</a>
                        </div>
                    </div>
                    <div className="cta__viz" aria-hidden="true">
                        <div className="cta__orb cta__orb--a" />
                        <div className="cta__orb cta__orb--b" />
                        <div className="cta__mesh" />
                    </div>
                </div>
            </div>
        </section>
    )
}
