import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">GR.</a>
      <ul className="nav-links">
        {['about', 'work', 'contact'].map(id => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'nav-active' : ''}>
              {id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}