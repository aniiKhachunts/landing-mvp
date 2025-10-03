import { motion, useMotionValue, useSpring } from 'framer-motion';
import { type PropsWithChildren, useRef } from 'react';

type Props = PropsWithChildren<{ href: string; className?: string }>;

export function MagneticButton({ children, href, className }: Props) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 300, damping: 20 });
    const sy = useSpring(y, { stiffness: 300, damping: 20 });
    const ref = useRef<HTMLAnchorElement>(null);

    const onMove = (e: React.MouseEvent) => {
        const r = ref.current!.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        x.set(dx * 0.25);
        y.set(dy * 0.25);
    };
    const onLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            className={className ?? 'btn btn--primary'}
            style={{ x: sx, y: sy }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
        >
            {children}
        </motion.a>
    );
}

export default MagneticButton;
