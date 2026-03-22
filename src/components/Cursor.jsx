import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 5 + 'px';
        dotRef.current.style.top = e.clientY - 5 + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x - 18) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y - 18) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }
      requestAnimationFrame(animate);
    };
    animate();

    const grow = () => {
      dotRef.current && (dotRef.current.style.transform = 'scale(2.5)');
      ringRef.current && (ringRef.current.style.transform = 'scale(1.4)');
      ringRef.current && (ringRef.current.style.opacity = '1');
    };
    const shrink = () => {
      dotRef.current && (dotRef.current.style.transform = 'scale(1)');
      ringRef.current && (ringRef.current.style.transform = 'scale(1)');
      ringRef.current && (ringRef.current.style.opacity = '0.6');
    };
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}