import { Github, ExternalLink, Code2 } from 'lucide-react';

export default function ProjectCard({ project: p }) {
  return (
    <article className="card project">
      <div className="project__visual">
        {p.image ? <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" /> : (
          <div className="project__placeholder" aria-hidden="true"><Code2 size={34} /><span>{p.category}</span></div>
        )}
      </div>
      <div className="project__body">
        <p className="project__cat">{p.category}</p>
        <h3>{p.name}</h3>
        <p>{p.description}</p>
        <ul className="chips chips--sm">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
        <ul className="project__features">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <div className="project__links">
          {p.github && <a className="btn btn--ghost btn--sm" href={p.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>}
          {p.live && <a className="btn btn--primary btn--sm" href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live Demo</a>}
        </div>
      </div>
    </article>
  );
}
