import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const vertex = `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = `
  precision mediump float;
  uniform float u_t;
  uniform vec2 u_res;
  varying vec2 vUv;

  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0,0.0));
    float c = hash(i + vec2(0.0,1.0));
    float d = hash(i + vec2(1.0,1.0));
    vec2 u = f*f*(3.0 - 2.0*f);
    return mix(a,b,u.x) + (c - a)*u.y*(1.0 - u.x) + (d - b)*u.x*u.y;
  }

  void main(){
    vec2 uv = vUv;
    float n = noise(uv*3.0 + u_t*0.08);

    // darker, subtler palette
    vec3 c1 = vec3(0.05, 0.20, 0.26);   // deep teal
    vec3 c2 = vec3(0.12, 0.85, 0.78);   // accent-teal
    vec3 col = mix(c1, c2, clamp(uv.y + n*0.15, 0.0, 1.0));

    // gentle vignette to avoid big flat slab
    float r = distance(uv, vec2(0.5));
    col *= smoothstep(0.9, 0.45, r);    // darken towards edges

    gl_FragColor = vec4(col, 0.9);      // a bit of transparency
  }
`;

export function GradientPlane() {
    const matRef = useRef<THREE.ShaderMaterial>(null);

    useFrame(({ clock, size }) => {
        if (!matRef.current) return;
        matRef.current.uniforms.u_t.value = clock.getElapsedTime();
        matRef.current.uniforms.u_res.value.set(size.width, size.height);
    });

    return (
        <mesh scale={[2.6, 1.6, 1]} position={[0, 0, 0]}>
            <planeGeometry args={[1, 1, 64, 64]}/>
            <shaderMaterial
                ref={matRef}
                transparent={true}
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={{
                    u_t: { value: 0 },
                    u_res: { value: new THREE.Vector2(1, 1) },
                }}
            />
        </mesh>
    );
}

