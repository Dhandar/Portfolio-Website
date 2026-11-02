import { GraduationCap } from 'lucide-react';
import { portfolio as p } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Education() {
  return (
    <section id="education" className="section container" aria-labelledby="edu-h">
      <SectionHeading id="edu-h">Education</SectionHeading>
      <div className="edu">
        {p.education.map((e) => (
          <article className="card" key={e.degree}>
            <span className="icon-chip"><GraduationCap size={20} /></span>
            <h3>{e.degree}</h3>
            <p className="edu__school">{e.school}</p>
            <p className="edu__period">{e.period}</p>
            <ul className="chips chips--sm"><li>CGPA: {e.cgpa}</li><li>{e.result}</li></ul>
          </article>
        ))}
      </div>
    </section>
  );
}
