import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Download,
  Menu,
  X,
  MapPin,
  Monitor,
  ShieldCheck,
  Cloud,
  Check,
  Mail,
  Phone,
  Plus,
  Laptop,
  Layers,
  Award,
} from "lucide-react";
import { CV_PATH, EMAIL, PHONE, PHONE_HREF, SKILL_GROUPS } from "./data";

const navigation = ["About", "Experience", "Expertise", "Projects"];
const projects = [
  {
    number: "01",
    category: "Endpoint management",
    title: "A better start for every device.",
    summary:
      "Microsoft Intune and Autopilot deployment, from provisioning to a work-ready endpoint.",
    tools: ["Microsoft Intune", "Autopilot", "Windows 11"],
    Icon: Laptop,
    detail:
      "Supported device enrolment, configuration and deployment using Microsoft Intune and Windows Autopilot. The focus: consistent setup, less manual imaging and a smoother handover to end users.",
    approach: "Provision → Configure → Validate → Handover",
  },
  {
    number: "02",
    category: "Service improvement",
    title: "Solve it once. Share it widely.",
    summary: "Practical knowledge articles and SOPs that make everyday support more consistent.",
    tools: ["ServiceNow", "Knowledge management", "ITIL"],
    Icon: Layers,
    detail:
      "Created and maintained troubleshooting guides, technical SOPs and knowledge articles. Clear, repeatable steps help colleagues resolve familiar issues and support users with confidence.",
    approach: "Investigate → Document → Share → Improve",
  },
  {
    number: "03",
    category: "Enterprise support",
    title: "Keep people moving forward.",
    summary:
      "Responsive, discreet IT support for senior stakeholders in a demanding enterprise environment.",
    tools: ["Microsoft 365", "VIP support", "Troubleshooting"],
    Icon: ShieldCheck,
    detail:
      "Provided high-priority deskside and remote support for senior stakeholders. Combined clear communication with structured troubleshooting across devices, collaboration tools and connectivity issues.",
    approach: "Understand → Prioritise → Resolve → Follow up",
  },
];

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillIndex, setSkillIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const activeSkills = SKILL_GROUPS[skillIndex]!;
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <div className="portfolio">
      <a className="pf-skip" href="#main">
        Skip to content
      </a>
      <header className="pf-header">
        <div className="pf-container pf-nav">
          <a
            className="pf-brand"
            href="#home"
            aria-label="Gurwinder Singh home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="pf-monogram">
              gs<span>.</span>
            </span>
            <span>
              GURWINDER
              <br />
              SINGH
            </span>
          </a>
          <nav className="pf-desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
          <a className="pf-nav-contact" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
          <button
            className="pf-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="pf-mobile-nav"
            aria-label="Mobile navigation"
            onKeyDown={(event) => {
              if (event.key === "Escape") setMenuOpen(false);
            }}
          >
            {[...navigation, "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section id="home" className="pf-hero pf-container">
          <div className="pf-hero-copy">
            <p className="pf-eyebrow">
              <span className="pf-dot" /> SENIOR IT SUPPORT ENGINEER
            </p>
            <h1>
              Technology
              <br />
              that works.
              <br />
              <span>People who thrive.</span>
            </h1>
            <p className="pf-hero-intro">
              I’m <strong>Gurwinder Singh.</strong> I connect people with reliable
              technology—supporting enterprise users, managing endpoints and making complex IT feel
              simple.
            </p>
            <div className="pf-actions">
              <a className="pf-button pf-button-lime" href="#projects">
                Explore my work <ArrowUpRight size={19} />
              </a>
              <a className="pf-text-link" href={CV_PATH} download>
                Download CV <Download size={17} />
              </a>
            </div>
            <p className="pf-location">
              <MapPin size={14} /> London, UK <span>·</span> Open to relocation
            </p>
          </div>
          <div
            className="pf-hero-art"
            aria-label="Enterprise IT expertise: people, endpoints, cloud and identity"
          >
            <div className="pf-art-top">
              <span>THE CONNECTED WORKPLACE</span>
              <span>01 / GS</span>
            </div>
            <div className="pf-orbit pf-orbit-one" />
            <div className="pf-orbit pf-orbit-two" />
            <div className="pf-art-line pf-line-horizontal" />
            <div className="pf-art-line pf-line-vertical" />
            <div className="pf-art-core">
              <Monitor size={44} strokeWidth={1.2} />
              <span>
                People first.
                <br />
                <strong>Technology enabled.</strong>
              </span>
            </div>
            <div className="pf-art-node pf-node-cloud">
              <Cloud size={21} />
              <span>
                Microsoft 365<small>Cloud & collaboration</small>
              </span>
            </div>
            <div className="pf-art-node pf-node-device">
              <Laptop size={21} />
              <span>
                Intune & Autopilot<small>Endpoint management</small>
              </span>
            </div>
            <div className="pf-art-node pf-node-identity">
              <ShieldCheck size={21} />
              <span>
                Entra ID<small>Identity & access</small>
              </span>
            </div>
            <div className="pf-art-bottom">
              <span className="pf-dot" /> BUILT AROUND THE END USER
            </div>
          </div>
          <a className="pf-scroll" href="#about">
            <ArrowDown size={15} /> A little more about me
          </a>
        </section>
        <div className="pf-proof-strip">
          <div className="pf-container pf-proof-inner">
            <p>
              ENTERPRISE EXPERIENCE
              <br />
              <strong>Built on real-world support.</strong>
            </p>
            <div>
              <strong>
                6<span>+</span>
              </strong>
              <small>Years in enterprise IT</small>
            </div>
            <div>
              <strong>
                8,000<span>+</span>
              </strong>
              <small>Users supported</small>
            </div>
            <div>
              <strong>
                95<span>%+</span>
              </strong>
              <small>SLA compliance</small>
            </div>
          </div>
        </div>
        <section id="about" className="pf-section pf-light">
          <div className="pf-container pf-about-grid">
            <div>
              <p className="pf-eyebrow">01 / THE PERSON BEHIND THE SUPPORT</p>
              <h2>
                Calm under pressure.
                <br />
                <span>Curious by nature.</span>
              </h2>
            </div>
            <div className="pf-about-text">
              <p>
                I’m an IT professional with experience across the UK and India, working at the
                intersection of people, devices and enterprise technology.
              </p>
              <p>
                On-site at GSK through Intuited Ltd, I help people stay productive through reliable
                desktop support, Microsoft 365 troubleshooting, identity administration and endpoint
                management.
              </p>
              <p>
                My approach is simple: listen carefully, find the root cause, communicate clearly
                and leave things better than I found them.
              </p>
              <div className="pf-signoff">
                <span className="pf-small-monogram">GS</span>
                <span>
                  Gurwinder Singh<small>Senior IT Support Engineer · London</small>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="pf-section pf-light">
          <div className="pf-container">
            <div className="pf-section-heading">
              <div>
                <p className="pf-eyebrow">02 / EXPERIENCE</p>
                <h2>
                  Hands-on experience.
                  <br />
                  <span>Enterprise perspective.</span>
                </h2>
              </div>
              <a className="pf-text-link" href={CV_PATH} download>
                Full experience in my CV <Download size={17} />
              </a>
            </div>
            <div className="pf-experience">
              <div className="pf-role-label">
                <span className="pf-current">
                  <span className="pf-dot" /> CURRENT ROLE
                </span>
                <p>London, United Kingdom</p>
              </div>
              <div className="pf-role-content">
                <h3>Senior IT Support Engineer</h3>
                <p className="pf-company">
                  Intuited Ltd <span>↗ On-site at GSK plc</span>
                </p>
                <p>
                  Enterprise deskside and EUC support in a regulated pharmaceutical environment,
                  bringing together user support, endpoint operations and service delivery.
                </p>
                <ul>
                  <li>Microsoft 365, Windows 10/11 and VIP user support.</li>
                  <li>Device provisioning, Intune administration and Autopilot enrolment.</li>
                  <li>
                    Active Directory / Entra ID, access management and connectivity troubleshooting.
                  </li>
                  <li>
                    ServiceNow incident management, knowledge sharing and SLA-focused support.
                  </li>
                </ul>
                <div className="pf-tags">
                  <span>Enterprise IT</span>
                  <span>EUC & endpoints</span>
                  <span>Service delivery</span>
                </div>
              </div>
            </div>
            <details className="pf-previous">
              <summary>
                <span>
                  <small>EARLIER EXPERIENCE · INDIA</small>Steg Technologies
                </span>
                <span className="pf-expand-label">
                  View career progression <Plus size={20} />
                </span>
              </summary>
              <div className="pf-previous-grid">
                {[
                  {
                    title: "System Administrator",
                    date: "2019–2020",
                    text: "Windows Server, Active Directory, virtualisation, backups and Microsoft 365 administration.",
                  },
                  {
                    title: "Network Engineer",
                    date: "2018–2019",
                    text: "LAN/WAN, Wi-Fi and VPN support, connectivity troubleshooting and ISP coordination.",
                  },
                  {
                    title: "Desktop Support Engineer",
                    date: "2017–2018",
                    text: "End-user support, Windows deployment, hardware troubleshooting and incident management.",
                  },
                ].map((role) => (
                  <article key={role.title}>
                    <small>{role.date}</small>
                    <h3>{role.title}</h3>
                    <p>{role.text}</p>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>
        <section id="expertise" className="pf-section pf-expertise">
          <div className="pf-container">
            <div className="pf-section-heading">
              <div>
                <p className="pf-eyebrow">03 / MY TOOLKIT</p>
                <h2>
                  The right skills.
                  <br />
                  <span>For the real problem.</span>
                </h2>
              </div>
              <p>
                From a single device to an enterprise environment.
                <br />
                Explore the tools I work with.
              </p>
            </div>
            <div className="pf-skills-layout">
              <div className="pf-skill-tabs" role="tablist" aria-label="Technical expertise">
                {SKILL_GROUPS.map((group, i) => (
                  <button
                    type="button"
                    key={group.category}
                    id={`skill-tab-${i}`}
                    role="tab"
                    aria-selected={skillIndex === i}
                    aria-controls="skill-panel"
                    tabIndex={skillIndex === i ? 0 : -1}
                    className={skillIndex === i ? "active" : ""}
                    onClick={() => setSkillIndex(i)}
                    onKeyDown={(event) => {
                      const direction =
                        event.key === "ArrowRight" || event.key === "ArrowDown"
                          ? 1
                          : event.key === "ArrowLeft" || event.key === "ArrowUp"
                            ? -1
                            : 0;
                      if (direction || event.key === "Home" || event.key === "End") {
                        event.preventDefault();
                        const next =
                          event.key === "Home"
                            ? 0
                            : event.key === "End"
                              ? SKILL_GROUPS.length - 1
                              : (i + direction + SKILL_GROUPS.length) % SKILL_GROUPS.length;
                        setSkillIndex(next);
                        document.getElementById(`skill-tab-${next}`)?.focus();
                      }
                    }}
                  >
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {group.category}
                    <ArrowUpRight size={18} />
                  </button>
                ))}
              </div>
              <div
                id="skill-panel"
                className="pf-skill-panel"
                role="tabpanel"
                aria-labelledby={`skill-tab-${skillIndex}`}
                tabIndex={0}
              >
                <div className="pf-panel-icon">
                  <Layers size={32} strokeWidth={1.3} />
                </div>
                <small>PRACTICAL, EVERYDAY EXPERTISE</small>
                <h3>{activeSkills.category}</h3>
                <div className="pf-skill-pills">
                  {activeSkills.skills.map((skill) => (
                    <span key={skill}>
                      <Check size={13} />
                      {skill}
                    </span>
                  ))}
                </div>
                <p>
                  Tools are only part of the job. Clear communication, structured troubleshooting
                  and ownership bring them together.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="pf-section pf-light">
          <div className="pf-container">
            <div className="pf-section-heading">
              <div>
                <p className="pf-eyebrow">04 / SELECTED WORK</p>
                <h2>
                  Practical work.
                  <br />
                  <span>Meaningful improvements.</span>
                </h2>
              </div>
              <p>
                A few examples of how I contribute
                <br />
                to better everyday IT.
              </p>
            </div>
            <div className="pf-project-grid">
              {projects.map(
                ({ number, category, title, summary, tools, Icon, detail, approach }) => (
                  <article className="pf-project" key={number}>
                    <div className={`pf-project-art pf-project-art-${number}`} aria-hidden="true">
                      <span>{number} / FIELD NOTES</span>
                      <Icon size={72} strokeWidth={1} />
                      <div className="pf-art-caption">{category}</div>
                    </div>
                    <div className="pf-project-body">
                      <small>{category}</small>
                      <h3>{title}</h3>
                      <p>{summary}</p>
                      <div className="pf-tags">
                        {tools.map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>
                      <details>
                        <summary>
                          Read the approach <Plus size={18} />
                        </summary>
                        <p>{detail}</p>
                        <p className="pf-approach">{approach}</p>
                      </details>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
        <section id="credentials" className="pf-section pf-light pf-credentials">
          <div className="pf-container">
            <p className="pf-eyebrow">05 / CONTINUOUS LEARNING</p>
            <div className="pf-credential-grid">
              <div>
                <h2>
                  Grounded in knowledge.
                  <br />
                  <span>Driven by curiosity.</span>
                </h2>
                <p>
                  A foundation in computing, service management
                  <br />
                  and networking.
                </p>
              </div>
              <div className="pf-qualifications">
                <div>
                  <Award />
                  <span>
                    <strong>ITIL v4 Foundation</strong>
                    <small>IT service management</small>
                  </span>
                  <span className="pf-credential-type">CERTIFICATION</span>
                </div>
                <div>
                  <ShieldCheck />
                  <span>
                    <strong>Cisco CCNA</strong>
                    <small>Cisco Certified Network Associate</small>
                  </span>
                  <span className="pf-credential-type">CERTIFICATION</span>
                </div>
                <details>
                  <summary>
                    Education <Plus size={18} />
                  </summary>
                  <ul>
                    <li>
                      <strong>Master of Business Administration</strong>
                      <small>Leeds Beckett University · 2020–2022</small>
                    </li>
                    <li>
                      <strong>MSc Computer Science</strong>
                      <small>Guru Nanak Dev University · 2015–2017</small>
                    </li>
                    <li>
                      <strong>Bachelor of Computer Applications</strong>
                      <small>Guru Nanak Dev University · 2012–2015</small>
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="pf-contact">
          <div className="pf-container">
            <p className="pf-eyebrow">
              <span className="pf-dot" /> LET’S CONNECT
            </p>
            <div className="pf-contact-heading">
              <h2>
                Good technology starts
                <br />
                with a <span>conversation.</span>
              </h2>
              <a
                href={`mailto:${EMAIL}`}
                className="pf-contact-arrow"
                aria-label="Email Gurwinder Singh"
              >
                <ArrowUpRight size={46} strokeWidth={1.4} />
              </a>
            </div>
            <p>
              Looking for someone who takes ownership of IT and puts people first?
              <br />
              Let’s talk about your team’s next chapter.
            </p>
            <div className="pf-contact-details">
              <div>
                <small>EMAIL ME</small>
                <a href={`mailto:${EMAIL}`}>
                  <Mail size={18} />
                  {EMAIL}
                </a>
                <button type="button" onClick={copyEmail}>
                  {copied ? "Email copied ✓" : "Copy email address"}
                </button>
                <span className="pf-copy-status" role="status">
                  {copyError
                    ? `Please copy this address manually: ${EMAIL}`
                    : copied
                      ? "Email address copied to clipboard."
                      : ""}
                </span>
              </div>
              <div>
                <small>GIVE ME A CALL</small>
                <a href={`tel:${PHONE_HREF}`}>
                  <Phone size={18} />
                  {PHONE}
                </a>
              </div>
              <div>
                <small>BASED IN</small>
                <p>London, United Kingdom</p>
                <span>Open to UK relocation</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="pf-footer pf-container">
        <a className="pf-brand" href="#home">
          <span className="pf-monogram">
            gs<span>.</span>
          </span>
          <span>GURWINDER SINGH</span>
        </a>
        <p>© 2026 Gurwinder Singh</p>
        <a href="#home">
          Back to top <ArrowRight size={16} className="pf-up-arrow" />
        </a>
      </footer>
    </div>
  );
}
