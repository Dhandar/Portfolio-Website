import { Github, Linkedin, Mail, Download, FolderGit2, Send } from 'lucide-react';
import { portfolio as p } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="badge"><span className="badge__dot" aria-hidden="true" />{p.status}</p>
        <p className="hero__hi">{p.heroHeading}</p>
        <h1 id="hero-title">{p.heroHeadline}</h1>
        <p className="hero__text">{p.heroText}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects"><FolderGit2 size={18} /> View My Projects</a>
          <a className="btn btn--ghost" href={p.resumePath} download="Sushmita-Dhandar-Resume.pdf"><Download size={18} /> Download Resume</a>
          <a className="btn btn--ghost" href="#contact"><Send size={18} /> Contact Me</a>
        </div>
        <div className="hero__social">
          <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
          <a href={p.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href={`mailto:${p.email}`} aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>

      <div className="editor" aria-hidden="true">
        <div className="editor__bar">
          <i /><i /><i />
          <span>developer.js</span>
        </div>
        <pre className="editor__code">
<span className="c-k">const</span> <span className="c-v">sushmita</span> = {'{'}{'\n'}
{'  '}role: <span className="c-s">'MERN Stack Developer'</span>,{'\n'}
{'  '}location: <span className="c-s">'Pune, India'</span>,{'\n'}
{'  '}frontend: [<span className="c-s">'React.js'</span>, <span className="c-s">'Redux'</span>],{'\n'}
{'  '}backend: [<span className="c-s">'Node.js'</span>, <span className="c-s">'Express.js'</span>],{'\n'}
{'  '}database: [<span className="c-s">'MongoDB'</span>, <span className="c-s">'Mongoose'</span>],{'\n'}
{'  '}auth: <span className="c-s">'JWT'</span>,{'\n'}
{'  '}openToWork: <span className="c-k">true</span>,{'\n'}
{'}'};<span className="caret" />
        </pre>
      </div>
    </section>
  );
}
