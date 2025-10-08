import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function GradientBackdrop() {
    const mat = useRef<THREE.ShaderMaterial>(null);

    useFrame(({ size }) => {
        if (!mat.current) return;
        (mat.current.uniforms.u_res.value as THREE.Vector2).set(size.width, size.height);
    });

    const vertex = /* glsl */`
    varying vec2 vUv;
    void main(){
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

    const fragment = /* glsl */`
    precision mediump float;
    uniform vec2 u_res;
    varying vec2 vUv;

    void main(){
      // deep teal gradient + subtle vignette
      vec3 top = vec3(0.05, 0.18, 0.22);
      vec3 bot = vec3(0.04, 0.10, 0.13);
      vec3 col = mix(top, bot, vUv.y);
      float r = distance(vUv, vec2(0.5));
      col *= smoothstep(1.0, 0.58, r);
      gl_FragColor = vec4(col, 1.0);
    }
  `;

    return (
        // Make it BIG and slightly behind the shard so it always fills the view
        <mesh position={[0, 0, -1.2]} scale={[10, 6, 1]}>
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
