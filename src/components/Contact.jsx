import { useReveal } from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact">
      <div className="contact-bg" />
      <div className="reveal" ref={ref}>
        <div className="section-label">Let's Connect</div>
        <h2 className="contact-heading">Let's Build<br />Something<br />Great.</h2>
        <p className="contact-sub">
          Have an exciting project in mind or just want to say hello?
          My inbox is always open — I'd love to hear from you.
        </p>
        <a href="mailto:gianrmndn@gmail.com" className="btn-primary">
          <span>✦ Send a Message</span>
        </a>
        <div className="social-links">
         <a href="https://www.linkedin.com/in/gian-ramanda" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        </div>
      </div>
    </section>
  );
}