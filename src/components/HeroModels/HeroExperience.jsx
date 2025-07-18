import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image – positioned to show more of the image */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-0 w-full flex items-end justify-center pointer-events-none">
        <div className="relative">
          <div className="absolute inset-0 z-[-1] w-full h-full rounded-full blur-[120px] bg-white opacity-30" />
          <img
            src="/images/HERO.png"
            alt="Hero"
            className="object-contain w-auto h-[80vh] md:h-[70vh] lg:h-[80vh] xl:h-[70vh] 2xl:h-[60vh]"
          />
        </div>
      </div>

      {/* Canvas with particles */}
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        className="absolute top-0 left-0 w-full h-full z-10"
      >
        <ambientLight intensity={0.2} color="#1a1a40" />
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <Suspense fallback={null}>
          <HeroLights />
          <Particles count={500} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;