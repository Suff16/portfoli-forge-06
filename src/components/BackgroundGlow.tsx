import { useState, useEffect, JSX } from 'react';

// 1. Mendefinisikan interface untuk tipe data posisi agar lebih jelas dan aman
interface Position {
  x: number;
  y: number;
}

const BackgroundGlow = (): JSX.Element => {
  // 2. Memberikan tipe 'Position' pada state useState
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    // 3. Memberikan tipe 'MouseEvent' pada parameter 'e' di dalam event handler
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, hsl(var(--primary) / 0.15), transparent 80%)`,
      }}
    />
  );
};

export default BackgroundGlow;