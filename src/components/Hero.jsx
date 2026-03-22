import { useEffect, useRef, useState } from 'react';
import Lanyard from './Lanyard';
import './Hero.css';

const TYPING_TEXTS = [
  'Available for Work — 2026',
  'System & Software Developer',
  'Product & UI/UX Designer',
  'Internal Audit & Risk',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef(null);
  const lanyardRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const phrase = TYPING_TEXTS[phraseIdx];
    let timeout;
    if (!isDeleting) {
      if (displayText.length < phrase.length) {
        timeout = setTimeout(() => setDisplayText(phrase.slice(0, displayText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setPhraseIdx((phraseIdx + 1) % TYPING_TEXTS.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIdx]);

  // Hide lanyard on scroll
  useEffect(() => {
    const hero = heroRef.current;
    const lanyard = lanyardRef.current;
    if (!hero || !lanyard) return;
    const onScroll = () => {
      const bottom = hero.getBoundingClientRect().bottom;
      lanyard.classList.toggle('hide', bottom < window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-bg-text">'Tech, Audit & Risk Enthusiast'</div>

      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-tag">
            ✦ <span>{displayText}</span>
            <span className="hero-cursor">|</span>
          </p>

          <h1 className="hero-title">
            Gian<br />Ramanda
            <em>Product & System Developer | Internal Audit & Risk Aware</em>
          </h1>

          <div className="hero-bottom">
            <p className="hero-desc">
              I design intuitive user experiences and transform them into real,
              functional digital products. Combining thoughtful UI/UX design with
              clean and efficient code, I build solutions that are both visually
              engaging and practical to use.
            </p>
            <div className="hero-scroll">
              <div className="scroll-line" />
              <span>Scroll</span>
            </div>
          </div>
        </div>

        {/* Lanyard — kanan */}
        <div ref={lanyardRef} style={{ display: 'contents' }}>
          <Lanyard />
        </div>
      </div>
    </section>
  );
}