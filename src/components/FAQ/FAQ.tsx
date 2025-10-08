import * as Accordion from '@radix-ui/react-accordion';
import './faq.css';

const faqs = [
    { q: 'Is there a token?', a: 'This is a demo. Token plans are for illustration only.' },
    { q: 'How do you route orders?', a: 'We aggregate venues and simulate price impact to minimize slippage.' },
    { q: 'Do I custody funds?', a: 'Non-custodial by design. You keep control of keys.' },
    { q: 'How do you mitigate MEV?', a: 'Private orderflow + batch routing + venue selection reduce exposure.' },
    { q: 'Is the code open source?', a: 'Core components are open; integrations vary by venue requirements.' },
    { q: 'What networks do you support?', a: 'See “Supported networks” section for the current list.' },
    { q: 'What are the fees?', a: 'Transparent, flat routing fee shown before confirmation.' },
    { q: 'Is there an API?', a: 'Yes — demo docs are linked from the hero CTA.' },
];

export function FAQ() {
    return (
        <section id="faq" className="faq" aria-labelledby="faq-title">
            <h2 id="faq-title">FAQ</h2>
            <Accordion.Root type="single" collapsible className="faq__root">
                {faqs.map((f, i) => (
                    <Accordion.Item key={i} value={`q${i}`} className="faq__item">
                        <Accordion.Trigger className="faq__trigger">
                            {f.q}
                            <span className="faq__chev" aria-hidden>▾</span>
                        </Accordion.Trigger>
                        <Accordion.Content className="faq__content">
                            <p>{f.a}</p>
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </section>
    );
}

export default FAQ;
