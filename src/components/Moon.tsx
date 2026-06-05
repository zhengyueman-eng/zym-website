import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// 月球球体组件
function MoonSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  // 仅加载颜色纹理
  const colorMap = useTexture('/moon_8k.jpg');

  // 纹理配置
  useMemo(() => {
    if (colorMap) {
      colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
      colorMap.anisotropy = 16;
      colorMap.colorSpace = THREE.SRGBColorSpace;
    }
  }, [colorMap]);

  // 自转：每秒1.5度
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (1.5 * Math.PI / 180);
    }
  });

  return (
    <group>
      {/* 月球本体 - 完美圆形轮廓 */}
      <mesh
        ref={meshRef}
        position={[0, -3.2, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <sphereGeometry args={[4.5, 256, 256]} />
        <meshStandardMaterial
          map={colorMap}
          roughness={0.9}
          metalness={0.0}
          color={new THREE.Color(0.95, 0.95, 1.0)}
        />
      </mesh>

      {/* 微弱边缘光晕 - 仅增强边缘受光 */}
      <mesh position={[0, -3.2, 0]}>
        <sphereGeometry args={[4.55, 64, 64]} />
        <meshBasicMaterial
          color={new THREE.Color(0.9, 0.9, 1.0)}
          transparent
          opacity={0.04}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// 场景设置
function Scene() {
  const { camera } = useThree();

  // 固定相机位置
  useMemo(() => {
    camera.position.set(0, 1.5, 8);
    camera.lookAt(0, -2, 0);
  }, [camera]);

  return (
    <>
      {/* 环境光 - 极弱，仅照亮暗部 */}
      <ambientLight intensity={0.08} color={new THREE.Color(0.3, 0.35, 0.5)} />

      {/* 主光源 - 来自右上方，模拟太阳光 */}
      <directionalLight
        position={[8, 6, 4]}
        intensity={2.2}
        color={new THREE.Color(1.0, 0.98, 0.95)}
        castShadow={false}
      />

      {/* 补光 - 模拟地球反光，淡蓝色 */}
      <directionalLight
        position={[-5, -2, -5]}
        intensity={0.35}
        color={new THREE.Color(0.6, 0.7, 0.85)}
      />

      {/* 月球 */}
      <MoonSphere />
    </>
  );
}

// 星空背景组件
function StarField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, sizes, opacities } = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const opacities = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // 球形分布
      const radius = 50 + Math.random() * 100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // 大小变化 - 远近层次感
      const distance = radius / 150;
      sizes[i] = (0.5 + Math.random() * 1.5) * (1 - distance * 0.5);

      // 亮度变化
      opacities[i] = 0.3 + Math.random() * 0.5;
    }

    return { positions, sizes, opacities };
  }, []);

  // 极其缓慢的闪烁
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const material = pointsRef.current.material as THREE.ShaderMaterial;
      if (material.uniforms) {
        material.uniforms.time.value = clock.getElapsedTime() * 0.05;
      }
    }
  });

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0.9, 0.95, 1.0) }
      },
      vertexShader: `
        attribute float size;
        attribute float opacity;
        varying float vOpacity;
        void main() {
          vOpacity = opacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying float vOpacity;
        void main() {
          // 极慢闪烁
          float twinkle = 0.95 + 0.05 * sin(time + gl_FragCoord.x * 0.01);
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = (1.0 - dist * 2.0) * vOpacity * twinkle;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-opacity"
          count={opacities.length}
          array={opacities}
          itemSize={1}
        />
      </bufferGeometry>
      <primitive object={shaderMaterial} attach="material" />
    </points>
  );
}

// 主组件
export default function Moon() {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        background: 'linear-gradient(180deg, #0a0a12 0%, #12121c 50%, #1a1a28 100%)'
      }}
    >
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          alpha: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene />
        <StarField />
      </Canvas>
    </div>
  );
}
