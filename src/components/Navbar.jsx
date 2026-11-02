import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Certifications', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main">
        <a href="#home" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__mark">SD</span> {portfolio.name}
        </a>
        <button className="navbar__toggle" aria-expanded={open} aria-controls="nav-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <ul id="nav-menu" className={`navbar__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
          <li>
            <a className="btn btn--primary btn--sm" href={portfolio.resumePath} download="Sushmita-Dhandar-Resume.pdf" onClick={() => setOpen(false)}>
              <Download size={16} /> Download Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
