import { Suspense, useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

const ACCENT = "#5b6cff";
const INK = "#1a1a1a";

/* The centerpiece: a slowly morphing blob that reacts to the pointer */
function Blob() {
  const group = useRef();
  const mat = useRef();

  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      // gentle parallax toward the cursor
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        y * 0.4,
        0.05
      );
      group.current.position.x = THREE.MathUtils.lerp(
        group.current.position.x,
        x * 0.35,
        0.05
      );
    }
    if (mat.current) {
      // breathe the distortion in and out
      mat.current.distort = 0.34 + Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
        <mesh castShadow>
          <icosahedronGeometry args={[1.35, 64]} />
          <MeshDistortMaterial
            ref={mat}
            color={ACCENT}
            roughness={0.18}
            metalness={0.35}
            clearcoat={1}
            distort={0.34}
            speed={1.6}
          />
        </mesh>
        {/* faint wireframe shell that echoes the reference's geometric feel */}
        <mesh scale={1.55}>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshBasicMaterial color={INK} wireframe transparent opacity={0.08} />
        </mesh>
      </Float>
    </group>
  );
}

/* A few satellite shapes drifting around the blob */
function Satellites() {
  const shapes = useMemo(
    () => [
      { geo: "torus", pos: [2.6, 1.3, -1], scale: 0.5, color: INK },
      { geo: "octa", pos: [-2.8, -0.8, -0.5], scale: 0.55, color: ACCENT },
      { geo: "knot", pos: [2.2, -1.6, 0.5], scale: 0.4, color: "#97a3ff" },
      { geo: "octa", pos: [-2.2, 1.7, -1.5], scale: 0.4, color: INK },
    ],
    []
  );

  return shapes.map((s, i) => (
    <Float
      key={i}
      speed={1 + i * 0.25}
      rotationIntensity={1.2}
      floatIntensity={1.4}
    >
      <mesh position={s.pos} scale={s.scale} castShadow>
        {s.geo === "torus" && <torusGeometry args={[0.7, 0.26, 24, 64]} />}
        {s.geo === "octa" && <octahedronGeometry args={[0.9, 0]} />}
        {s.geo === "knot" && <torusKnotGeometry args={[0.55, 0.2, 96, 16]} />}
        <meshStandardMaterial
          color={s.color}
          roughness={0.25}
          metalness={0.5}
        />
      </mesh>
    </Float>
  ));
}

export default function Scene3D() {
  // Kick R3F's ResizeObserver right after first paint so the canvas sizes to
  // its container even on a cold mount (avoids the default 300x150 buffer).
  useEffect(() => {
    const id = requestAnimationFrame(() =>
      window.dispatchEvent(new Event("resize"))
    );
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[4, 6, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, -3, 2]} intensity={30} color={ACCENT} />
        <Blob />
        <Satellites />
        <ContactShadows
          position={[0, -2.3, 0]}
          opacity={0.25}
          scale={12}
          blur={2.6}
          far={4}
          color="#6b6bff"
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
