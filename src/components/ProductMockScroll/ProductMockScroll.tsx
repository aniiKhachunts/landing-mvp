import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './pms.css'

gsap.registerPlugin(ScrollTrigger)

export default function ProductMockScroll() {
    const ref = useRef<HTMLDivElement>(null)
    const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

    useLayoutEffect(() => {
        if (prefersReduced || !ref.current) return

        const ctx = gsap.context(() => {
            const f1 = '.frame--1'
            const f2 = '.frame--2'
            const f3 = '.frame--3'

            gsap.set([f1, f2, f3], { autoAlpha: 0, scale: 0.94 })
            gsap.set(f1, { autoAlpha: 1, scale: 1 })

            const tl = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top top',
                    end: '+=1400',
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    pinSpacing: true
                }
            })

            tl
                .to(f2, { autoAlpha: 1, scale: 1, duration: 1 })
                .to(f1, { autoAlpha: 0, scale: 0.9, duration: 1 }, '-=0.6')
                .to(f3, { autoAlpha: 1, scale: 1, duration: 1 })
                .to(f2, { autoAlpha: 0, scale: 0.9, duration: 1 }, '-=0.6')
                .to({}, { duration: 0.5 })
        }, ref)

        return () => ctx.revert()
    }, [prefersReduced])

    return (
        <section id="walkthrough" ref={ref} className="pms" aria-label="Product walkthrough">
            <div className="pms__inner">
                <figure className="frame frame--1">
                    <img src="/ui/step1.png" alt="Step 1 — Select trading pair" />
                </figure>
                <figure className="frame frame--2">
                    <img src="/ui/step2.png" alt="Step 2 — Confirm trade details" />
                </figure>
                <figure className="frame frame--3">
                    <img src="/ui/step3.png" alt="Step 3 — Execution result" />
                </figure>
            </div>
        </section>
    )
}
