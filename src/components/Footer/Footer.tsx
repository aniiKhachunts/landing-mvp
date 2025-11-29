import './footer.css'

const NAV = [
    {label: 'product', href: '#product'},
    {label: 'walkthrough', href: '#walkthrough'},
    {label: 'features', href: '#features'},
    {label: 'metrics', href: '#metrics'},
    {label: 'token', href: '#token'},
    {label: 'security', href: '#security'},
    {label: 'networks', href: '#networks'},
    {label: 'testimonials', href: '#testimonials'},
    {label: 'faq', href: '#faq'},
    {label: 'contact', href: '#contact'}
]

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="ftr" aria-labelledby="footer-title">
            <div className="ftr__top">
                <div className="ftr__brand">
                    <a href="#product" className="ftr__logo">FluxSim</a>
                    <p className="ftr__blurb">Unified liquidity routing and MEV protection for pro grade trading.</p>
                    <nav className="ftr__social" aria-label="social links">
                        <a href="#" className="ftr__socialLink">Twitter</a>
                        <a href="#" className="ftr__socialLink">GitHub</a>
                        <a href="#" className="ftr__socialLink">Docs</a>
                    </nav>
                </div>
                <nav className="ftr__nav" aria-label="sections">
                    {NAV.map(n => (
                        <a key={n.label} className="ftr__link" href={n.href}>{n.label}</a>
                    ))}
                </nav>
                <form
                    className="ftr__form"
                    onSubmit={e => {
                        e.preventDefault()
                        const input = e.currentTarget.elements.namedItem('email') as HTMLInputElement
                        window.location.href = `mailto:hello@example.com?subject=Subscribe&body=${encodeURIComponent(input.value)}`
                    }}
                    aria-label="subscribe for updates"
                >
                    <h3 className="ftr__formTitle">Get updates</h3>
                    <div className="ftr__row">
                        <input id="email" name="email" type="email" required placeholder="you@company.com"
                               className="ftr__input" aria-label="Email address"/>
                        <button className="btn btn--primary ftr__btn" type="submit">Subscribe</button>
                    </div>
                    <small className="ftr__hint">No spam. Unsubscribe anytime.</small>
                </form>
            </div>
            <div className="ftr__rule" aria-hidden="true"/>
            <div className="ftr__bar">
                <small>© {year} FluxSim. All rights reserved.</small>
                <div className="ftr__legal">
                    <a href="#" className="ftr__mini">Privacy</a>
                    <span aria-hidden="true">·</span>
                    <a href="#" className="ftr__mini">Terms</a>
                    <span aria-hidden="true">·</span>
                    <a href="#product" className="ftr__mini">Back to top ↑</a>
                </div>
            </div>
        </footer>
    )
}
