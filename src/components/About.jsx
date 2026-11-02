import { Layers, Puzzle, BookOpen } from 'lucide-react';
import { portfolio as p } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

const Icons = { Layers, Puzzle, BookOpen };

export default function About() {
  return (
    <section id="about" className="section container" aria-labelledby="about-h">
      <SectionHeading id="about-h">About Me</SectionHeading>
      <div className="about">
        <div className="about__text">{p.aboutParagraphs.map((t) => <p key={t}>{t}</p>)}</div>
        <div className="about__cards">
          {p.aboutCards.map((c) => {
            const Icon = Icons[c.icon];
            return (
              <article className="card info-card" key={c.title}>
                <span className="icon-chip"><Icon size={20} /></span>
                <div><h3>{c.title}</h3><p>{c.text}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
