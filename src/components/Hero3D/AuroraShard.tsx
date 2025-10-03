import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AuroraShard() {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        ref.current.rotation.x = Math.sin(t * 0.25) * 0.35;
        ref.current.rotation.y = t * 0.45;
    });

    return (
        <group>
            <mesh ref={ref} castShadow receiveShadow>
                <icosahedronGeometry args={[0.95, 0]} />
                <meshStandardMaterial
                    metalness={0.45}
                    roughness={0.2}
                    color="#46e6d8"
                    envMapIntensity={1.2}
                />
            </mesh>

            <mesh>
                <icosahedronGeometry args={[1.05, 0]} />
                <meshBasicMaterial color="#5ee0ff" transparent opacity={0.12} />
            </mesh>

            <mesh>
                <icosahedronGeometry args={[1.05, 0]} />
                <meshBasicMaterial color="#5ee0ff" wireframe transparent opacity={0.18} />
            </mesh>
        </group>
    );
}
