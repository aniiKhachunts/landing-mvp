import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './pms.css';

gsap.registerPlugin(ScrollTrigger);

export function ProductMockScroll() {
    const ref = useRef<HTMLDivElement>(null);

    const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    useLayoutEffect(() => {
        if (prefersReduced || !ref.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top top',
                    end: '+=1500',
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    pinSpacing: true,
                },
            });

            tl.to('.frame--1', { autoAlpha: 1, scale: 1, duration: 1 })
                .to('.frame--2', { autoAlpha: 1, scale: 1, duration: 1 })
                .to('.frame--3', { autoAlpha: 1, scale: 1, duration: 1 });

        }, ref);

        return () => ctx.revert();
    }, [prefersReduced]);

    return (
        <section id="features" ref={ref} className="pms" aria-label="Product walkthrough">
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
    );
}

export default ProductMockScroll;
