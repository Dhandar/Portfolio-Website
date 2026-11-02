import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Download, Loader2 } from 'lucide-react';
import { portfolio as p } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

const empty = { name: '', email: '', subject: '', message: '', website: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.';
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject (at least 3 characters).';
  if (v.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', text: '' });
  const configured = Boolean(p.contactApiUrl);

  const change = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus({ type: 'loading', text: '' });
    try {
      const res = await fetch(p.contactApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        let msg = 'The server could not accept your message. Please try again or email me directly.';
        try { const d = await res.json(); if (d?.message || d?.error) msg = d.message || d.error; } catch { /* keep default */ }
        throw new Error(msg);
      }
      setStatus({ type: 'success', text: 'Message sent. Thank you, I will get back to you soon.' });
      setValues(empty);
    } catch (err) {
      const offline = err instanceof TypeError;
      setStatus({ type: 'error', text: offline ? 'Network error. Check your connection and try again, or email me directly.' : err.message });
    }
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {props.as === 'textarea' ? (
        <textarea id={name} name={name} rows={5} value={values[name]} onChange={change} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} />
      ) : (
        <input id={name} name={name} type={props.type || 'text'} value={values[name]} onChange={change} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} />
      )}
      {errors[name] && <p className="field__err" id={`${name}-err`}>{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section container" aria-labelledby="contact-h">
      <div className="cta card">
        <h2>Let's Build Something Together</h2>
        <p>I'm looking for opportunities to contribute my web development skills, collaborate with a development team, and grow as a software developer.</p>
        <a className="btn btn--primary" href={p.resumePath} download="Sushmita-Dhandar-Resume.pdf"><Download size={18} /> Download Resume</a>
      </div>

      <SectionHeading id="contact-h" sub="Have an opportunity or want to discuss a project? Feel free to get in touch.">Let's Connect</SectionHeading>
      <div className="contact">
        <ul className="contact__list">
          <li><Mail size={18} /><a href={`mailto:${p.email}`}>{p.email}</a></li>
          <li><Github size={18} /><a href={p.github} target="_blank" rel="noreferrer">{p.github.replace('https://', '')}</a></li>
          <li><Linkedin size={18} /><a href={p.linkedin} target="_blank" rel="noreferrer">{p.linkedin.replace('https://', '')}</a></li>
          <li><MapPin size={18} /><span>{p.location}</span></li>
        </ul>

        <form className="card form" onSubmit={submit} noValidate>
          {!configured && (
            <p className="notice" role="note">
              The contact form isn't connected to a backend yet. Please <a href={`mailto:${p.email}`}>email me directly</a>.
            </p>
          )}
          {field('name', 'Name')}
          {field('email', 'Email', { type: 'email' })}
          {field('subject', 'Subject')}
          {field('message', 'Message', { as: 'textarea' })}
          <div className="hp" aria-hidden="true">
            <label htmlFor="website">Leave this field empty</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={change} />
          </div>
          <button className="btn btn--primary" type="submit" disabled={!configured || status.type === 'loading'}>
            {status.type === 'loading' ? <><Loader2 size={18} className="spin" /> Sending…</> : 'Send message'}
          </button>
          <p className={`status status--${status.type}`} role="status" aria-live="polite">{status.text}</p>
        </form>
      </div>
    </section>
  );
}
