import { Briefcase, CalendarDays, MapPin, TrendingUp } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const ROLES = [
  {
    title: "Senior IT Infrastructure Engineer",
    company: "Intuited Ltd — On-site at GSK plc",
    period: "May 2023 – Present",
    location: "London, UK",
    current: true,
    summary:
      "Senior EUC specialist providing on-site field and deskside support across GSK's London campus in a highly regulated pharmaceutical environment with 8,000+ users.",
    responsibilities: [
      "First- and second-line EUC support",
      "VIP and C-suite support",
      "Microsoft Intune / Endpoint Manager",
      "Intune Autopilot enrolment",
      "Compliance policies",
      "300+ endpoint oversight",
      "Active Directory",
      "Azure AD / Entra ID",
      "Microsoft 365",
      "Windows 10/11",
      "PowerShell scripting",
      "LAN / Wi-Fi / VPN troubleshooting",
      "GlobalProtect / Cisco AnyConnect",
      "DNS / DHCP / TCP/IP",
      "SCCM / MDT",
      "EDR / endpoint security",
      "BitLocker encryption",
      "Patch management",
      "Vulnerability remediation",
      "ServiceNow incident & request management",
    ],
    impact: [
      "8,000+ users supported",
      "85%+ first-time-fix rate",
      "300+ devices managed through Autopilot",
      "95%+ SLA compliance",
      "Intune / Endpoint Manager administration",
      "Active Directory & Entra ID management",
      "Windows 10/11 & Microsoft 365 support",
      "PowerShell automation reducing resolution time",
      "Network troubleshooting (LAN/Wi-Fi/VPN/DNS/DHCP)",
      "SCCM/MDT & Autopilot OS deployment",
      "Endpoint security (EDR/BitLocker/patch management)",
    ],
  },
  {
    title: "System Administrator",
    company: "Steg Technologies",
    period: "2019 – 2020",
    location: "Chandigarh, India",
    current: false,
    summary:
      "Managed server infrastructure, virtualisation, and IT operations across multiple client environments.",
    responsibilities: [
      "Windows Server 2012/2016 administration",
      "Active Directory domain-level management",
      "OU structure design",
      "Group Policy design",
      "Domain controller health",
      "Trust relationships",
      "VMware / Hyper-V virtualisation",
      "VM provisioning & snapshots",
      "Resource allocation",
      "Backup and disaster recovery",
      "Restore testing",
      "Exchange Server administration",
      "Microsoft 365 administration",
      "Mailboxes & distribution groups",
      "Email flow management",
    ],
    impact: [
      "Windows Server 2012/2016 deployment & maintenance",
      "Domain-level Active Directory & Group Policy",
      "VMware/Hyper-V virtualisation infrastructure",
      "Backup & disaster recovery implementation",
      "Exchange Server & Microsoft 365 administration",
    ],
  },
  {
    title: "Network Engineer",
    company: "Steg Technologies",
    period: "2018 – 2019",
    location: "Chandigarh, India",
    current: false,
    summary:
      "Responsible for network infrastructure design, implementation, and support across multiple client sites.",
    responsibilities: [
      "LAN/WAN infrastructure design",
      "Router, switch & firewall configuration",
      "DNS / DHCP / TCP/IP management",
      "Multi-site IP address management",
      "VPN solutions configuration",
      "Wi-Fi infrastructure",
      "SSID management",
      "Wireless security policies",
      "ISP collaboration",
      "Circuit fault resolution",
      "Escalation management within SLAs",
    ],
    impact: [
      "LAN/WAN infrastructure design & maintenance",
      "DNS, DHCP & TCP/IP management",
      "VPN & Wi-Fi infrastructure deployment",
      "ISP escalation management within agreed SLAs",
    ],
  },
  {
    title: "Desktop Support Engineer",
    company: "Steg Technologies",
    period: "June 2017 – July 2018",
    location: "Chandigarh, India",
    current: false,
    summary:
      "First- and second-line IT support for 500+ end users across finance, manufacturing, and professional services clients.",
    responsibilities: [
      "First- and second-line desktop support",
      "Hardware & software troubleshooting",
      "Windows 7/8/10 installation & configuration",
      "Microsoft Office 365",
      "SCCM / MDT device lifecycle",
      "Active Directory user accounts",
      "Group policies",
      "Access control",
      "Multi-client domain administration",
      "Remedy / ServiceNow incident logging",
      "SLA compliance",
      "Technical knowledge base articles",
    ],
    impact: [
      "500+ end users supported",
      "80%+ first-time-fix rate",
      "Windows 7/8/10 & Office 365 support",
      "SCCM/MDT device lifecycle management",
      "Active Directory administration",
      "ServiceNow/Remedy incident management",
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="Seven years of enterprise IT support, infrastructure, and networking across the UK and India."
        />

        <ol className="relative mt-14 space-y-8 sm:pl-10">
          <span
            aria-hidden="true"
            className="accent-bar absolute top-2 bottom-2 left-[3px] hidden w-px opacity-50 sm:block"
          />
          {ROLES.map((role, i) => (
            <Reveal
              as="li"
              key={`${role.title}-${role.period}`}
              delay={i * 90}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute top-8 -left-[calc(2.5rem-1px)] hidden size-2.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_0_5px_color-mix(in_oklab,var(--cyan)_18%,transparent)] sm:block"
              />
              <article className="glass-panel card-hover rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-primary">
                      <Briefcase aria-hidden="true" className="size-4" />
                      {role.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 text-xs text-muted-foreground sm:items-end">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays aria-hidden="true" className="size-3.5" />
                      {role.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin aria-hidden="true" className="size-3.5" />
                      {role.location}
                    </span>
                    {role.current ? (
                      <span className="rounded-full border border-border bg-secondary/70 px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wider text-cyan uppercase">
                        Current Role
                      </span>
                    ) : null}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {role.summary}
                </p>

                <h4 className="mt-6 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Responsibilities
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {role.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-surface/70 px-2.5 py-1 text-xs text-foreground/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-border bg-surface-elevated/50 p-5">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <TrendingUp aria-hidden="true" className="size-4 text-cyan" />
                    Key Impact
                  </h4>
                  <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {role.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
