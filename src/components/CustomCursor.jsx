import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const el = e.target;
      setHovered(
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.role === 'button'
      );
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-[#2563EB] hidden md:block"
      animate={{
        x: pos.x - (hovered ? 14 : 7),
        y: pos.y - (hovered ? 14 : 7),
        width: hovered ? 28 : 14,
        height: hovered ? 28 : 14,
        opacity: 0.85,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.5 }}
    />
  );
}
