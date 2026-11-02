import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section container" aria-labelledby="projects-h">
      <SectionHeading id="projects-h">Projects I've Built</SectionHeading>
      <div className="projects">{projects.map((p) => <ProjectCard key={p.name} project={p} />)}</div>
    </section>
  );
}
