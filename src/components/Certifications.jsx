import { Award } from 'lucide-react';
import { portfolio as p } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Certifications() {
  return (
    <section id="certifications" className="section container" aria-labelledby="cert-h">
      <SectionHeading id="cert-h">Certifications</SectionHeading>
      <div className="certs">
        {p.certifications.map((c) => (
          <article className="card info-card" key={c.name}>
            <span className="icon-chip"><Award size={20} /></span>
            <div>
              <h3>{c.name}</h3>
              {c.issuer && <p>{c.issuer}{c.date ? `, ${c.date}` : ''}</p>}
              {c.url && <a href={c.url} target="_blank" rel="noreferrer">View credential</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
