import { useEffect, useRef } from 'react';
import './Lanyard.css';

export default function Lanyard() {
  const cardRef = useRef(null);
  const tiltRef = useRef({ target: 0, current: 0, velocity: 0 });

  useEffect(() => {
    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      tiltRef.current.target = ((e.clientX - cx) / cx) * 10;
    };
    document.addEventListener('mousemove', onMove);

    const tick = () => {
      const t = tiltRef.current;
      const force = (t.target - t.current) * 0.07;
      t.velocity = (t.velocity + force) * 0.75;
      t.current += t.velocity;
      if (cardRef.current) {
        cardRef.current.style.transform = `rotate(${t.current}deg)`;
      }
      requestAnimationFrame(tick);
    };
    tick();

    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  const onHover = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.1s';
    cardRef.current.style.transform = 'rotate(0deg) scale(1.04)';
  };
  const onLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = '';
  };

  return (
    <div className="lanyard-wrap">
      {/* Tali */}
      <div className="lanyard-rope-container">
        <svg className="lanyard-svg" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow tali */}
          <path className="rope-shadow-left"  d="M 50 0 C 28 25, 14 60, 12 90 C 10 112, 18 128, 37 136"/>
          <path className="rope-shadow-right" d="M 50 0 C 72 25, 86 60, 88 90 C 90 112, 82 128, 63 136"/>
          {/* Tali kuning */}
          <path className="rope-left"  d="M 50 0 C 28 25, 14 60, 12 90 C 10 112, 18 128, 37 136"/>
          <path className="rope-right" d="M 50 0 C 72 25, 86 60, 88 90 C 90 112, 82 128, 63 136"/>
          {/* Metal clip */}
          <rect className="rope-clip" x="34" y="134" width="32" height="10" rx="4"/>
          <circle className="rope-ring-inner" cx="50" cy="139" r="5"/>
          <circle className="rope-ring" cx="50" cy="139" r="5"/>
        </svg>
      </div>

      {/* Kartu */}
      <div
        className="lanyard-card"
        ref={cardRef}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="lanyard-card-inner">
          <div className="lc-header">
            <span className="lc-event">PORTFOLIO 2026</span>
            <span className="lc-badge">DEV</span>
          </div>
          <div className="lc-photo">
            {/* Ganti dengan: <img src={require('../assets/foto.jpg')} alt="Gian" /> */}
            <div className="lc-photo-placeholder">GR</div>
          </div>
          <div className="lc-info">
            <p className="lc-hello">HELLO, I'M</p>
            <h3 className="lc-name">Gian Ramanda</h3>
            <p className="lc-role">Developer & UI/UX Designer</p>
          </div>
          <div className="lc-footer">
            <span className="lc-status">● Open to Work</span>
            <span className="lc-loc">📍 Indonesia</span>
          </div>
        </div>
      </div>
    </div>
  );
}