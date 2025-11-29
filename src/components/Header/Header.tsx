import { useEffect, useState } from 'react'
import clsx from 'classnames'
import './header.css'

const SECTIONS = [
    'product',
    'features',
    'metrics',
    'token',
    'security',
    'networks',
    'testimonials',
    'faq',
    'contact',
] as const

export function Header() {
    const [active, setActive] = useState<(typeof SECTIONS)[number]>('product')

    useEffect(() => {
        const onScroll = () => {
            const headerH = document.querySelector<HTMLElement>('.hdr')?.offsetHeight ?? 56
            let current: (typeof SECTIONS)[number] = 'product'
            let best = -1e9
            for (const id of SECTIONS) {
                const el = document.getElementById(id)
                if (!el) continue
                const top = el.getBoundingClientRect().top - headerH - 1
                if (top <= 0 && top > best) {
                    best = top
                    current = id
                }
            }
            if (window.scrollY < 2) current = 'product'
            setActive(current)
        }
        onScroll()
        let raf = 0
        const handler = () => {
            cancelAnimationFrame(raf)
            raf = requestAnimationFrame(onScroll)
        }
        window.addEventListener('scroll', handler, { passive: true })
        window.addEventListener('resize', handler)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('scroll', handler)
            window.removeEventListener('resize', handler)
        }
    }, [])

    return (
        <header className="hdr">
            <div className="hdr__wrap">
                <a href="#product" className="hdr__logo">
                    <span className="hdr__mark" />
                    FluxSim
                </a>

                <nav className="hdr__nav" aria-label="Primary">
                    {SECTIONS.map(id => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={clsx('hdr__link', { 'is-active': active === id })}
                        >
                            {id}
                        </a>
                    ))}
                </nav>

                <a className="hdr__cta btn btn--primary" href="#demo">Open demo</a>
            </div>
        </header>
    )
}

export default Header
