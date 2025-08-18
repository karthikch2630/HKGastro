import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";

// Loader component with progress
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-lg">{Math.round(progress)}% Loading...</div>
    </Html>
  );
};

// Digestive 3D Model with slow rotation
const DigestiveModel: React.FC = () => {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/adult_digestive_system/model.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={window.innerWidth < 640 ? 6 : window.innerWidth < 1024 ? 8 : 10} // responsive scaling
      position={[0, 0.5, 0]}
    />
  );
};

// Responsive Viewer
const DigestiveViewer: React.FC = () => {
  return (
    <div
      className="
        w-full 
        h-[300px]   /* mobile */
        sm:h-[400px] /* small tablets */
        md:h-[500px] /* tablets */
        lg:h-[600px] /* laptops */
        xl:h-[700px] /* large screens */
        overflow-hidden
      "
    >
      <Canvas
        shadows={false}
        camera={{ position: [0, 1, 6], fov: 40 }}
        dpr={[0.8, 1]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <DigestiveModel />
          <Environment preset="sunset" />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={8}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DigestiveViewer;

// Preload model
useGLTF.preload("/adult_digestive_system/model.glb");
