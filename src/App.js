import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';

export default function App() {
  return (
    <div>
      <p>
        test
      </p>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 4] }}>

      </Canvas>
      </div>
  )

}