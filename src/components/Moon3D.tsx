import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';

function MoonSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/moon-nasa-hd.jpg');
  
  // 配置纹理 - 使用高质量设置
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 16;
  texture.colorSpace = THREE.SRGBColorSpace;
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.03; // 更缓慢的自转
    }
  });

  return (
    <group>
      {/* 月球本体 */}
      <mesh ref={meshRef} position={[0.5, -0.2, 0]}>
        <sphereGeometry args={[3.5, 512, 512]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.85}
          metalness={0.0}
          bumpMap={texture}
          bumpScale={0.15}
          displacementMap={texture}
          displacementScale={0.08}
          displacementBias={-0.04}
        />
      </mesh>
      
      {/* 月球大气光晕 - 内层 */}
      <mesh position={[0.5, -0.2, 0]}>
        <sphereGeometry args={[3.7, 64, 64]} />
        <meshBasicMaterial
          color="#D0D0E0"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* 月球大气光晕 - 外层 */}
      <mesh position={[0.5, -0.2, 0]}>
        <sphereGeometry args={[4.5, 64, 64]} />
        <meshBasicMaterial
          color="#B8B8D0"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0.3, 8);
    camera.lookAt(0, -0.2, 0);
  }, [camera]);

  return (
    <>
      {/* 环境光 - 极弱，让主光源主导 */}
      <ambientLight intensity={0.08} />
      
      {/* 主光源（模拟太阳光）- 从斜上方照射，产生强烈明暗对比 */}
      <directionalLight
        position={[12, 8, 8]}
        intensity={3}
        color="#FFF8F0"
        castShadow
      />
      
      {/* 补光（模拟地球反光）- 淡蓝色，照亮暗面 */}
      <directionalLight
        position={[-8, -4, -8]}
        intensity={0.6}
        color="#A0B8D0"
      />
      
      {/* 边缘轮廓光 - 让月球边缘更突出 */}
      <pointLight
        position={[0, 3, 10]}
        intensity={0.3}
        color="#E8E8F8"
        distance={25}
      />
      
      {/* 月球 */}
      <MoonSphere />
      
      {/* 背景星星 */}
      <Stars
        radius={400}
        depth={200}
        count={15000}
        factor={10}
        saturation={0}
        fade
        speed={0.2}
      />
    </>
  );
}

export default function Moon3D() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none overflow-hidden"
      style={{ height: '40vh' }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="w-full h-full"
            initial={{ y: '130%', opacity: 0, scale: 0.6 }}
            animate={{ y: '0%', opacity: 1, scale: 1 }}
            transition={{ 
              duration: 4, 
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Canvas
              camera={{ 
                fov: 45,
                near: 0.1,
                far: 1000
              }}
              style={{ 
                background: 'transparent',
                width: '100%',
                height: '100%'
              }}
              gl={{ 
                alpha: true, 
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.2
              }}
            >
              <Scene />
            </Canvas>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
