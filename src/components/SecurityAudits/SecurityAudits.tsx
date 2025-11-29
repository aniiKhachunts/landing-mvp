import './audits.css'

type Audit = { name: string; logo: string; href: string; status: 'passed' | 'ongoing' | 'scheduled' }

const audits: Audit[] = [
    { name: 'CertiK', logo: '/audits/certik.png', href: '#', status: 'passed' },
    { name: 'Quantstamp', logo: '/audits/quantstamp.jpg', href: '#', status: 'ongoing' },
    { name: 'Hacken', logo: '/audits/hacken.png', href: '#', status: 'scheduled' },
    { name: 'OpenZeppelin', logo: '/audits/openzeppelin.jpeg', href: '#', status: 'passed' },
    { name: 'PeckShield', logo: '/audits/peckshield.jpg', href: '#', status: 'scheduled' }
]

const label = { passed: 'Passed', ongoing: 'Ongoing', scheduled: 'Scheduled' }

export default function SecurityAudits() {
    return (
        <section id="security" className="audits" aria-labelledby="audits-title">
            <header className="audits__hdr">
                <h2 id="audits-title">Security audits</h2>
                <a className="audits__all" href="#docs">All reports →</a>
            </header>
            <ul className="audits__grid" role="list">
                {audits.map(a => (
                    <li key={a.name} className="audit">
                        <div className="audit__logo">
                            <img src={a.logo} alt={`${a.name} logo`} />
                        </div>
                        <div className="audit__info">
                            <h3 className="audit__name">{a.name}</h3>
                            <span className={`audit__badge audit__badge--${a.status}`}>{label[a.status]}</span>
                        </div>
                        <a className="audit__link" href={a.href}>View report</a>
                    </li>
                ))}
            </ul>
        </section>
    )
}
