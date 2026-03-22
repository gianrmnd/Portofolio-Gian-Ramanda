import { useReveal } from '../hooks/useReveal';
import './About.css';

const SKILLS = [
  { name: 'System & Development', desc: 'Laravel (PHP), C# .NET, JavaScript, React' },
  { name: 'Data & Database',  desc: 'SQL, MySQL, Microsoft Excel, Power BI' },
  { name: 'Product & UI/UX',   desc: 'Figma, User Journey, Wireframing, Prototyping' },
  { name: 'Audit & Risk',    desc: 'Internal Audit Support, Risk Assessment, Risk Register' },
  { name: 'Tools & Others',     desc: 'Microsoft Visio, Draw.io, Flowcharts, ERD, FSD', wide: true },
];

export default function About() {
  const leftRef  = useReveal();
  const rightRef = useReveal();

  return (
    <section id="about">
     <div className="about-left reveal" ref={leftRef}>
        <div className="section-label">About</div>
        <h2 className="about-heading">A little<br />about me</h2>
        <p className="about-text">
          Hi! I'm an Information Systems graduate with a strong interest in <strong>Product, System Analysis, and UI/UX</strong>. I have hands-on experience in system development, ERP, as well as <strong>internal audit and risk management</strong> processes.
        </p>
        <p className="about-text">
          I’m passionate about bridging business needs with technology solutions and collaborating with cross-functional teams to create products that are efficient, scalable, and meaningful.
        </p>
      </div>

      <div className="skills-grid reveal" ref={rightRef}>
        {SKILLS.map(s => (
          <div key={s.name} className={`skill-item${s.wide ? ' wide' : ''}`}>
            <div className="skill-name">{s.name}</div>
            <div className="skill-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}