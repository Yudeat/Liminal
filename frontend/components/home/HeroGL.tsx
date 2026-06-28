"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function WaveMesh() {
  const mesh = useRef<THREE.Mesh>(null!);
  const { size } = useThree();

  const geometry = useMemo(() => {
    const g = new THREE.PlaneGeometry(2, 2, 64, 64);
    return g;
  }, []);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uAspect: { value: size.width / size.height },
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          float wave = sin(pos.x * 5.0 + uTime) * cos(pos.y * 4.0 + uTime * 0.8) * 0.012;
          pos.z += wave;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        void main() {
          float dist = distance(vUv, vec2(0.5));
          float ring = smoothstep(0.48, 0.5, dist) * smoothstep(0.52, 0.5, dist);
          float alpha = ring * 0.06 + sin(vUv.x * 12.0 + uTime) * 0.015 * (1.0 - dist * 2.0);
          gl_FragColor = vec4(1.0, 1.0, 1.0, max(0.0, alpha));
        }
      `,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.getElapsedTime() * 0.4;
  });

  return <mesh ref={mesh} geometry={geometry} material={material} />;
}

export default function HeroGL() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ alpha: true, antialias: false }}
      >
        <WaveMesh />
      </Canvas>
    </div>
  );
}
