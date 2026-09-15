import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  ChevronRight,
  Download,
  Github,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { CV_PATH, EMAIL, PHONE, PHONE_HREF, SKILL_GROUPS } from "./data";
import "./portfolio-modern.css";

const navigation = ["About", "Experience", "Expertise", "Work"];

const projects = [
  {
    number: "01",
    kicker: "Endpoint engineering",
    title: "Autopilot-ready device delivery",
    summary:
      "Standardised Windows 11 provisioning with Microsoft Intune and Autopilot to create a smoother, more repeatable handover experience.",
    meta: ["Microsoft Intune", "Autopilot", "Windows 11"],
    outcome: "Consistent build process",
  },
  {
    number: "02",
    kicker: "Enterprise support",
    title: "High-priority user support",
    summary:
      "Delivered calm, discreet deskside and remote support for senior stakeholders across devices, Microsoft 365, identity and connectivity issues.",
    meta: ["Microsoft 365", "VIP Support", "ServiceNow"],
    outcome: "95%+ SLA compliance",
  },
  {
    number: "03",
    kicker: "Service improvement",
    title: "Knowledge that scales",
    summary:
      "Created practical SOPs and troubleshooting knowledge so recurring issues could be solved faster and more consistently across the support team.",
    meta: ["ITIL", "Knowledge Base", "ServiceNow"],
    outcome: "Faster repeat resolution",
  },
];

const expertiseIcons = [ServerCog, Laptop, ShieldCheck, Network];

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillIndex, setSkillIndex] = useState(0);
  const activeSkills = SKILL_GROUPS[skillIndex] ?? SKILL_GROUPS[0];

  return (
    <div className="nr-site">
      <a className="nr-skip" href="#main">
        Skip to content
      </a>

      <header className="nr-header">
        <div className="nr-shell nr-nav-wrap">
          <a className="nr-brand" href="#home" onClick={() => setMenuOpen(false)}>
            <span className="nr-brand-mark">GS</span>
            <span className="nr-brand-copy">
              Gurwinder Singh
              <small>Senior IT Support Engineer</small>
            </span>
          </a>

          <nav className="nr-desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>

          <div className="nr-nav-actions">
            <a className="nr-nav-cta" href="#contact">
              Let&apos;s talk <ArrowUpRight size={15} />
            </a>
            <button
              className="nr-menu-button"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="nr-mobile-nav" aria-label="Mobile navigation">
            {[...navigation, "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>0{index + 1}</span>
                {item}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        <section id="home" className="nr-hero nr-shell">
          <div className="nr-hero-topline">
            <p>
              <span className="nr-live-dot" /> London, United Kingdom
            </p>
            <p>Enterprise IT · EUC · Endpoint · Identity</p>
          </div>

          <div className="nr-hero-title" aria-label="Gurwinder Singh">
            <span>GURWINDER</span>
            <div className="nr-title-row">
              <div className="nr-hero-card" aria-hidden="true">
                <div className="nr-card-status">
                  <span>enterprise_support.exe</span>
                  <span className="nr-card-pulse">LIVE</span>
                </div>
                <div className="nr-card-orbit">
                  <div className="nr-orbit-ring nr-ring-one" />
                  <div className="nr-orbit-ring nr-ring-two" />
                  <div className="nr-core">
                    <ServerCog size={44} strokeWidth={1.2} />
                  </div>
                  <span className="nr-node nr-node-a">M365</span>
                  <span className="nr-node nr-node-b">INTUNE</span>
                  <span className="nr-node nr-node-c">ENTRA</span>
                </div>
                <p>
                  People-first support.
                  <br />
                  <strong>Enterprise-grade delivery.</strong>
                </p>
              </div>
              <span>SINGH</span>
            </div>
          </div>

          <div className="nr-hero-bottom">
            <div className="nr-hero-copy">
              <p className="nr-kicker">Senior IT Support Engineer · 6+ years</p>
              <p>
                I keep enterprise users productive by making complex technology feel simple — from
                Microsoft 365 and identity to endpoint management, device deployment and hands-on
                troubleshooting.
              </p>
            </div>

            <div className="nr-hero-actions">
              <a className="nr-primary-button" href="#work">
                View selected work <ArrowDownRight size={18} />
              </a>
              <a className="nr-secondary-button" href={CV_PATH} download>
                Download CV <Download size={17} />
              </a>
            </div>
          </div>

          <div className="nr-stats-grid" aria-label="Career highlights">
            <article>
              <span>01</span>
              <strong>6+</strong>
              <p>Years in IT</p>
            </article>
            <article>
              <span>02</span>
              <strong>8,000+</strong>
              <p>Users supported</p>
            </article>
            <article>
              <span>03</span>
              <strong>95%+</strong>
              <p>SLA compliance</p>
            </article>
            <article>
              <span>04</span>
              <strong>UK + India</strong>
              <p>Enterprise experience</p>
            </article>
          </div>
        </section>

        <section id="about" className="nr-section nr-shell">
          <div className="nr-section-label">
            <span>01</span>
            <p>Profile</p>
          </div>

          <div className="nr-about-layout">
            <div className="nr-sticky-heading">
              <p className="nr-micro">THE PERSON BEHIND THE TICKETS</p>
              <h2>
                Reliable support.
                <br />
                <em>Clear thinking.</em>
              </h2>
            </div>

            <div className="nr-about-content">
              <p className="nr-lead">
                I&apos;m a senior IT support professional focused on the point where people, devices,
                identity and enterprise systems meet.
              </p>
              <p>
                Based in London, I provide on-site enterprise support at GSK through Intuited Ltd,
                covering Microsoft 365, Windows, Intune, Autopilot, Active Directory, Entra ID,
                ServiceNow and everyday connectivity issues.
              </p>
              <p>
                My approach is straightforward: understand the user&apos;s problem, isolate the root
                cause, communicate clearly, fix it properly and document what will help the next
                person.
              </p>

              <div className="nr-principles">
                {["Listen first", "Own the issue", "Solve the cause", "Share the knowledge"].map(
                  (item, index) => (
                    <div key={item}>
                      <span>0{index + 1}</span>
                      <p>{item}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="nr-section nr-section-dark">
          <div className="nr-shell">
            <div className="nr-section-label nr-section-label-dark">
              <span>02</span>
              <p>Experience</p>
            </div>

            <div className="nr-dark-heading">
              <p className="nr-micro">CAREER / ENTERPRISE SUPPORT</p>
              <h2>
                Experience built
                <br />
                <em>where uptime matters.</em>
              </h2>
            </div>

            <div className="nr-experience-card nr-current-role">
              <div className="nr-role-meta">
                <span className="nr-live-pill">
                  <span className="nr-live-dot" /> CURRENT
                </span>
                <p>Nov 2024 — Present</p>
                <p>London, UK</p>
              </div>
              <div className="nr-role-main">
                <p className="nr-role-overline">Intuited Ltd · On-site at GSK plc</p>
                <h3>Senior IT Support Engineer</h3>
                <p>
                  Enterprise deskside and EUC support in a regulated pharmaceutical environment,
                  combining high-quality user support with endpoint operations, identity and service
                  delivery.
                </p>
                <div className="nr-role-grid">
                  <div>
                    <Check size={15} />
                    Microsoft 365, Windows 10/11 and VIP support
                  </div>
                  <div>
                    <Check size={15} />
                    Intune, Autopilot and device provisioning
                  </div>
                  <div>
                    <Check size={15} />
                    Active Directory, Entra ID and access support
                  </div>
                  <div>
                    <Check size={15} />
                    ServiceNow, incident ownership and SLA delivery
                  </div>
                </div>
              </div>
              <div className="nr-role-number">01</div>
            </div>

            <div className="nr-history-grid">
              <article>
                <span>02</span>
                <p>2019 — 2020</p>
                <h3>System Administrator</h3>
                <p>Windows Server, Active Directory, virtualisation, backups and Microsoft 365.</p>
              </article>
              <article>
                <span>03</span>
                <p>2018 — 2019</p>
                <h3>Network Engineer</h3>
                <p>LAN/WAN, Wi-Fi, VPN support, connectivity troubleshooting and ISP coordination.</p>
              </article>
              <article>
                <span>04</span>
                <p>2017 — 2018</p>
                <h3>Desktop Support Engineer</h3>
                <p>End-user support, Windows deployment, hardware troubleshooting and incidents.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="expertise" className="nr-section nr-shell">
          <div className="nr-section-label">
            <span>03</span>
            <p>Expertise</p>
          </div>

          <div className="nr-expertise-heading">
            <div>
              <p className="nr-micro">SERVICES / SKILLS / TOOLS</p>
              <h2>
                What I do
                <br />
                <em>best.</em>
              </h2>
            </div>
            <p>
              Broad enterprise IT support rather than one narrow specialism — practical skills that
              connect endpoint, identity, cloud, networking and users.
            </p>
          </div>

          <div className="nr-expertise-layout">
            <div className="nr-expertise-tabs" role="tablist" aria-label="Technical skill groups">
              {SKILL_GROUPS.map((group, index) => {
                const Icon = expertiseIcons[index % expertiseIcons.length] ?? ServerCog;
                return (
                  <button
                    key={group.category}
                    type="button"
                    role="tab"
                    aria-selected={skillIndex === index}
                    className={skillIndex === index ? "is-active" : ""}
                    onClick={() => setSkillIndex(index)}
                  >
                    <span className="nr-tab-index">{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={20} strokeWidth={1.5} />
                    <span>{group.category}</span>
                    <ChevronRight size={19} />
                  </button>
                );
              })}
            </div>

            <div className="nr-skill-panel" role="tabpanel">
              <div className="nr-skill-panel-top">
                <div>
                  <span>ACTIVE CAPABILITY</span>
                  <h3>{activeSkills.category}</h3>
                </div>
                <Sparkles size={24} />
              </div>
              <div className="nr-skill-cloud">
                {activeSkills.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <p>
                Strong technical support works when tools are backed by structured troubleshooting,
                good judgement and clear communication.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="nr-section nr-work-section">
          <div className="nr-shell">
            <div className="nr-section-label">
              <span>04</span>
              <p>Selected work</p>
            </div>

            <div className="nr-work-heading">
              <p className="nr-micro">PRACTICAL PROJECTS / REAL OUTCOMES</p>
              <h2>
                Work that makes
                <br />
                <em>support better.</em>
              </h2>
            </div>

            <div className="nr-project-list">
              {projects.map((project) => (
                <article key={project.number} className="nr-project-card">
                  <div className="nr-project-number">{project.number}</div>
                  <div className="nr-project-copy">
                    <p className="nr-project-kicker">{project.kicker}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="nr-project-tags">
                      {project.meta.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="nr-project-outcome">
                    <span>OUTCOME</span>
                    <strong>{project.outcome}</strong>
                    <ArrowUpRight size={22} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nr-section nr-shell nr-credentials">
          <div className="nr-section-label">
            <span>05</span>
            <p>Credentials</p>
          </div>

          <div className="nr-credential-grid">
            <article className="nr-credential-feature">
              <Award size={28} strokeWidth={1.4} />
              <p>CERTIFICATIONS</p>
              <h3>ITIL v4 Foundation</h3>
              <h3>CCNA</h3>
              <span>Service management + networking fundamentals</span>
            </article>
            <article>
              <p>EDUCATION</p>
              <h3>Master of Science</h3>
              <span>Postgraduate education</span>
            </article>
            <article>
              <p>EDUCATION</p>
              <h3>Bachelor of Computer Applications</h3>
              <span>Computing foundation</span>
            </article>
          </div>
        </section>

        <section id="contact" className="nr-contact">
          <div className="nr-shell">
            <div className="nr-contact-top">
              <p className="nr-micro">AVAILABLE FOR THE RIGHT OPPORTUNITY</p>
              <h2>
                Need someone who can
                <br />
                <em>keep IT moving?</em>
              </h2>
            </div>

            <div className="nr-contact-grid">
              <a href={`mailto:${EMAIL}`}>
                <span>
                  <Mail size={20} /> Email
                </span>
                <strong>{EMAIL}</strong>
                <ArrowUpRight size={22} />
              </a>
              <a href={`tel:${PHONE_HREF}`}>
                <span>
                  <Phone size={20} /> Phone
                </span>
                <strong>{PHONE}</strong>
                <ArrowUpRight size={22} />
              </a>
              <a href="https://github.com/cegurwinder" target="_blank" rel="noreferrer">
                <span>
                  <Github size={20} /> GitHub
                </span>
                <strong>@cegurwinder</strong>
                <ArrowUpRight size={22} />
              </a>
              <a href={CV_PATH} download>
                <span>
                  <Download size={20} /> Resume
                </span>
                <strong>Download CV</strong>
                <ArrowUpRight size={22} />
              </a>
            </div>

            <footer className="nr-footer">
              <div className="nr-footer-brand">
                <span className="nr-brand-mark nr-brand-mark-light">GS</span>
                <div>
                  Gurwinder Singh
                  <small>Senior IT Support Engineer</small>
                </div>
              </div>
              <div className="nr-footer-meta">
                <span>
                  <MapPin size={14} /> London, United Kingdom
                </span>
                <span>© {new Date().getFullYear()} Gurwinder Singh</span>
              </div>
              <a href="#home">
                Back to top <ArrowRight size={16} />
              </a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
