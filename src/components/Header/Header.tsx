import { useEffect, useState } from 'react';
import clsx from 'classnames';
import './header.css';

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
] as const;

export function Header() {
    const [active, setActive] = useState<string>('product');

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setActive(e.target.id);
                    }
                });
            },
            { root: null, threshold: 0.5 }
        );

        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });

        return () => obs.disconnect();
    }, []);

    return (
        <header className="hdr">
            <div className="hdr__logo">AURORA X1</div>

            <nav className="hdr__nav">
                {SECTIONS.map((id) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={clsx('hdr__link', { 'is-active': active === id })}
                    >
                        {id}
                    </a>
                ))}
            </nav>

            <a className="btn btn--primary" href="#demo">Open demo</a>
        </header>
    );
}

export default Header;
