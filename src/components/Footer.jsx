import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolio as p } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>{p.name}</strong>
          <p>{p.title}</p>
          <p className="footer__copy">© {new Date().getFullYear()} {p.name}. All rights reserved.</p>
        </div>
        <div className="footer__right">
          <div className="hero__social">
            <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
            <a href={p.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href={`mailto:${p.email}`} aria-label="Email"><Mail size={20} /></a>
          </div>
          <a className="btn btn--ghost btn--sm" href="#home"><ArrowUp size={16} /> Back to top</a>
        </div>
      </div>
    </footer>
  );
}
