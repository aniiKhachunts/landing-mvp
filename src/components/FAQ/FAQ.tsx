import * as Accordion from '@radix-ui/react-accordion'
import './faq.css'

const items = [
    { q: 'Is there a token?', a: 'No. This demo focuses on execution UX and routing. If a token appears in the future, docs will reflect it clearly.' },
    { q: 'How do you route orders?', a: 'Orders are split across venues using a price–impact model with depth snapshots. The router prefers predictable fills over micro-arb spikes.' },
    { q: 'Do you protect against MEV?', a: 'Flows can be shipped via private relays and batch submitters where available. The goal is to reduce sandwich opportunities and keep quotes honest.' },
    { q: 'What does integration look like?', a: 'Use a thin REST layer or a lightweight SDK. You pass pairs and slippage, we return a plan and a prepared transaction.' },
    { q: 'Which networks are supported?', a: 'Major EVM chains and a few non-EVM L1s. The Networks section shows current coverage; more rollups are queued.' },
    { q: 'Can I self-host parts of the stack?', a: 'Yes. Core routing can run in your infra with a small set of managed services for market data and relays.' }
]

export default function FAQ() {
    return (
        <section id="faq" className="faq">
            <header className="faq__hdr">
                <h2>FAQ</h2>
                <p className="faq__sub">Short answers to common questions</p>
            </header>
            <Accordion.Root type="single" collapsible className="faq__root">
                {items.map((it, i) => (
                    <Accordion.Item key={i} value={`q${i}`} className="faq__item">
                        <Accordion.Header className="faq__header">
                            <Accordion.Trigger className="faq__trigger">
                                <span className="faq__q">{it.q}</span>
                                <svg className="faq__chev" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                                    <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="faq__content">
                            <div className="faq__inner">
                                <div className="faq__a">{it.a}</div>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </section>
    )
}
