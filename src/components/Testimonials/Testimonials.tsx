import './testimonials.css';

type T = { name: string; role: string; quote: string; avatar?: string };

const items: T[] = [
    {
        name: 'Alex P.',
        role: 'Head of Trading, Helix',
        quote: 'Execution quality is stellar — routing beats our in-house smart order router most days.',
        avatar: '/avatars/alex.png',
    },
    {
        name: 'Jin S.',
        role: 'Core Dev, L2 Labs',
        quote: 'The MEV mitigation is the real deal. Our test flows showed consistent savings.',
        avatar: '/avatars/jin.png',
    },
    {
        name: 'Morgan R.',
        role: 'PM, Quant Desk',
        quote: 'Fast, predictable, and easy to integrate. Exactly what we wanted for launch.',
        avatar: '/avatars/morgan.png',
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="testis" aria-label="What people say">
            {items.map((t, i) => (
                <article key={i} className="testi">
                    <div className="testi__head">
                        <img
                            className="testi__avatar"
                            src={t.avatar || '/avatars/placeholder.png'}
                            alt=""
                            loading="lazy"
                            width={40}
                            height={40}
                        />
                        <div>
                            <div className="testi__name">{t.name}</div>
                            <div className="testi__role">{t.role}</div>
                        </div>
                    </div>
                    <p className="testi__quote">“{t.quote}”</p>
                </article>
            ))}
        </section>
    );
}

export default Testimonials;
