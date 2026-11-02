import { Monitor, Server, Database, Wrench } from 'lucide-react';
import { skills } from '../data/skills.js';
import SectionHeading from './SectionHeading.jsx';

const Icons = { Monitor, Server, Database, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="section container" aria-labelledby="skills-h">
      <SectionHeading id="skills-h" sub="Technologies I work with, grouped by area.">Technical Skills</SectionHeading>
      <div className="skills">
        {skills.map((g) => {
          const Icon = Icons[g.icon];
          return (
            <article className="card" key={g.category}>
              <h3 className="skills__title"><span className="icon-chip"><Icon size={18} /></span>{g.category}</h3>
              <ul className="chips">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
