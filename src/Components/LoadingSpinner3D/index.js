import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"

function SpinningRings() {
  const group = useRef(null)
  const ring1 = useRef(null)
  const ring2 = useRef(null)
  const ring3 = useRef(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (group.current) {
      group.current.rotation.y = time * 0.5
    }

    if (ring1.current) {
      ring1.current.rotation.x = time * 2
      ring1.current.rotation.z = time * 1.5
    }

    if (ring2.current) {
      ring2.current.rotation.y = time * -1.8
      ring2.current.rotation.z = time * -1.2
    }

    if (ring3.current) {
      ring3.current.rotation.x = time * -1.5
      ring3.current.rotation.y = time * 1.8
    }
  })

  return (
    <group ref={group}>
      {/* Outer ring */}
      <mesh ref={ring1}>
        <torusGeometry args={[2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Middle ring */}
      <mesh ref={ring2}>
        <torusGeometry args={[1.5, 0.08, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Inner ring */}
      <mesh ref={ring3}>
        <torusGeometry args={[1, 0.06, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Center sphere */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

const SimpleLoadingSpinner3D = ({ 
  width = "100vw", 
  height = "100vh",
  backgroundColor = "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)"
}) => {
  return (
    <div 
      style={{
        width,
        height,
        background: backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 50,
        }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

        <SpinningRings />
      </Canvas>

      {/* Loading text overlay */}
      <div style={{
        position: "absolute",
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
        bottom: "30%"
      }}>
        Loading...
      </div>

      {/* Loading dots */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "0.5rem"
      }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "rgba(255,255,255,0.6)",
              borderRadius: "50%",
              animation: `pulse 1.5s infinite ${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default SimpleLoadingSpinner3D