import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function GradientBackdrop() {
    const mat = useRef<THREE.ShaderMaterial>(null);

    useFrame(({ size }) => {
        if (!mat.current) return;
        (mat.current.uniforms.u_res.value as THREE.Vector2).set(size.width, size.height);
    });

    const vertex = `
    varying vec2 vUv;
    void main(){
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

    const fragment = `
    precision mediump float;
    uniform vec2 u_res;
    varying vec2 vUv;

    void main(){
      // teal-ish gradient with a soft vignette
      vec3 top = vec3(0.05, 0.18, 0.22);
      vec3 bot = vec3(0.04, 0.10, 0.13);
      vec3 col = mix(top, bot, vUv.y);
      float r = distance(vUv, vec2(0.5));
      col *= smoothstep(1.0, 0.55, r); // vignette
      gl_FragColor = vec4(col, 1.0);
    }
  `;

    return (
        <mesh position={[0, 0, -0.5]} scale={[4.0, 2.6, 1]}>
            <planeGeometry args={[1, 1, 1, 1]} />
            <shaderMaterial
                ref={mat}
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={{ u_res: { value: new THREE.Vector2(1, 1) } }}
            />
        </mesh>
    );
}
