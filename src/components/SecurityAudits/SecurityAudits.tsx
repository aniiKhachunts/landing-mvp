// src/components/SecurityAudits/SecurityAudits.tsx
import './audits.css';

type Audit = {
    name: string;
    logo: string;   // path from /public
    href: string;   // report url (placeholder ok)
};

const audits: Audit[] = [
    { name: 'Trail of Bits', logo: '/logos/trailofbits.png', href: '#' },
    { name: 'OpenZeppelin',  logo: '/logos/openzeppelin.png', href: '#' },
    { name: 'Quantstamp',    logo: '/logos/quantstamp.png', href: '#' },
    { name: 'Code4rena',     logo: '/logos/code4rena.svg', href: '#' },
];

export function SecurityAudits() {
    return (
        <section id="security" className="audits" aria-labelledby="audits-title">
            <div className="audits__hdr">
                <h2 id="audits-title">Security audits</h2>
                <p className="audits__sub">Independent reviews and contests (links are placeholders)</p>
            </div>

            <div className="audits__grid">
                {audits.map((a) => (
                    <article key={a.name} className="audit">
                        <img src={a.logo} alt={`${a.name} logo`} className="audit__logo" loading="lazy" />
                        <div className="audit__body">
                            <h3 className="audit__name">{a.name}</h3>
                            <p className="audit__meta">Smart contract & protocol surface</p>
                        </div>
                        <a className="btn audit__btn" href={a.href} target="_blank" rel="noreferrer">
                            View report
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default SecurityAudits;
