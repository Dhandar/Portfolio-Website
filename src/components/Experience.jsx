import { Briefcase } from 'lucide-react';
import { portfolio as p } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section container" aria-labelledby="exp-h">
      <SectionHeading id="exp-h">Professional Experience</SectionHeading>
      <ol className="timeline">
        {p.experience.map((e) => (
          <li key={e.company} className="timeline__item">
            <span className="timeline__dot"><Briefcase size={16} /></span>
            <article className="card">
              <div className="exp__head">
                <div><h3>{e.role}</h3><p className="exp__company">{e.company}</p></div>
                <time className="pill">{e.period}</time>
              </div>
              <p>{e.summary}</p>
              <ul className="bullets">{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
