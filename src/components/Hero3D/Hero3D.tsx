import { useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { animate, stagger } from 'framer-motion';
import AuroraShard from './AuroraShard';
import GradientBackdrop from './GradientBackdrop';
import { MagneticButton } from './MagneticButton';
import './hero3d.css';

export function Hero3D() {
    const words = useMemo(() => ['Instant', 'crypto', 'execution'], []);

    const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    useEffect(() => {
        if (prefersReduced) return;
        const spans = Array.from(document.querySelectorAll('#heroTitle .word'));
        animate(
            spans,
            { opacity: [0, 1], y: [10, 0] },
            { delay: stagger(0.06), duration: 0.6, ease: 'easeOut' }
        );
    }, [prefersReduced]);

    return (
        <section id="product" className="hero">
            {/* LEFT: copy */}
            <div className="hero__copy">
                <h1 id="heroTitle" aria-label="Instant crypto execution">
                    {words.map((w, i) => (
                        <span key={i} className="word">{w}</span>
                    ))}
                </h1>
                <p className="hero__subtitle">
                    Unified liquidity routing and MEV protection for pro grade trading
                </p>

                <div className="ctaRow">
                    <MagneticButton href="#demo" className="btn btn--primary">
                        Open demo
                    </MagneticButton>
                    <a className="btn" href="#docs">View docs</a>
                </div>
            </div>

            {/* RIGHT: 3D card */}
            <div className="hero__visual">
                {prefersReduced ? (
                    <div className="hero__fallback" aria-hidden="true" />
                ) : (
                    <Canvas
                        className="hero__canvas"
                        camera={{ position: [0, 0, 3.2], fov: 35 }}   // a touch farther for 16:9
                        gl={{ antialias: true, alpha: false }}        // opaque card (fills fully)
                        onCreated={({ gl }) => {
                            gl.toneMappingExposure = 0.95;
                        }}
                    >
                        {/* fill the card background */}
                        <color attach="background" args={['#0e151b']} />

                        {/* lights */}
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[2, 3, 4]} intensity={0.9} />

                        {/* oversized backdrop plane to avoid any “letterboxing” */}
                        <GradientBackdrop />

                        {/* object – centered & safe-scale for 16:9 */}
                        <Float speed={0.5} rotationIntensity={0.32} floatIntensity={0.36}>
                            <group scale={[1.05, 1.05, 1.05]} position={[0, -0.02, 0]}>
                                <AuroraShard />
                            </group>
                        </Float>

                        {/* soft shadow to ground it */}
                        <ContactShadows
                            position={[0, -1.05, 0]}
                            opacity={0.32}
                            scale={6}
                            blur={2.4}
                            far={2}
                        />

                        <Environment preset="city" />
                    </Canvas>
                )}
            </div>
        </section>
    );
}

export default Hero3D;
