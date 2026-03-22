import { useReveal } from '../hooks/useReveal';
import './Work.css';

const PROJECTS = [
  {
    num: '01',
    title: 'Internal Audit System',
    desc: 'Developing an end-to-end web-based internal audit system, covering business analysis, system design, and implementation to support audit and risk management processes.',
    tags: ['Laravel (PHP)', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    status: 'In Development',
  },
  {
    num: '02',
    title: 'Vision+ x MRT – UX & UI Improvement',
    desc: 'Conducted UX research and redesigned user interface to improve usability and user experience for Vision+ partnership integration with MRT.',
    tags: ['Figma', 'UX Research', 'UI Design'],
    link: '#',
  },
  {
    num: '03',
    title: 'Meeting Room Booking System',
    desc: 'Developed a web-based meeting room booking system to streamline reservation processes and improve administrative efficiency.',
    tags: ['Laravel (PHP)', 'JavaScript', 'HTML', 'CSS'],
    link: '#',
  },
  {
    num: '04',
    title: 'HRIS Kreavoks – UI/UX Design',
    desc: 'Designed end-to-end HRIS product experience, from user research to wireframing and high-fidelity UI design, to enhance usability and employee experience.',
    tags: ['Figma', 'User Research', 'Wireframing', 'UI Design'],
    link: '#',
  },
];

export default function Work() {
  const headerRef = useReveal();

  return (
    <section id="work">
     <div className="work-header reveal" ref={headerRef}>
      <div className="work-header-left">
        <div className="section-label">Projects</div>
        <h2 className="work-heading">Projects & Case Studies</h2>
      </div>

      <div className="work-header-right">
        <a 
          href="https://www.figma.com/proto/o8ndRyrbv3DcQayvqFzBqv/Portofolio?node-id=153-473&page-id=74%3A119&starting-point-node-id=153%3A473&scaling=scale-down-width&content-scaling=fixed&t=eKW06zDIuxj8MiPN-1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="work-cta"
        >
          View Detailed Case Studies ↗
        </a>
      </div>
    </div>

      <div className="projects-list">
        {PROJECTS.map((p) => (
          <ProjectItem key={p.num} {...p} />
        ))}
      </div>
    </section>
  );
}

function ProjectItem({ num, title, desc, tags, link, status }) {
  const ref = useReveal();
  const isDisabled = !!status;

  return (
    <a
      href={isDisabled ? undefined : link}
      className={`project-item reveal ${isDisabled ? 'disabled' : ''}`}
      ref={ref}
      onClick={(e) => isDisabled && e.preventDefault()}
    >
      <span className="project-num">{num}</span>

      <div className="project-info">
        <h3>{title}</h3>
        <p>{desc}</p>
        {status && <span className="project-status">{status}</span>}
      </div>

      <div className="project-tags">
        {tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      {!isDisabled && <span className="project-arrow">↗</span>}
    </a>
  );
}