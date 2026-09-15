import {
  Cloud,
  Crown,
  Laptop,
  Network,
  ShieldCheck,
  Headset,
} from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const BRINGS = [
  {
    title: "Enterprise IT Support",
    Icon: Headset,
    text: "Deskside, field and service desk support in large, regulated environments.",
  },
  {
    title: "VIP & Executive Support",
    Icon: Crown,
    text: "Discreet white-glove support for senior stakeholders and C-suite users.",
  },
  {
    title: "Endpoint Management",
    Icon: Laptop,
    text: "Intune, Autopilot, SCCM/MECM and full device lifecycle management.",
  },
  {
    title: "Microsoft 365 & Cloud",
    Icon: Cloud,
    text: "Exchange Online, Teams, SharePoint, OneDrive and Azure / Entra ID.",
  },
  {
    title: "Networking & Infrastructure",
    Icon: Network,
    text: "LAN, Wi-Fi, VPN, DNS, DHCP and TCP/IP troubleshooting at scale.",
  },
  {
    title: "IT Security & Compliance",
    Icon: ShieldCheck,
    text: "BitLocker, endpoint protection, patching and vulnerability remediation.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Profile"
          title="About Me"
          description="A senior enterprise IT support professional focused on measurable service quality, endpoint reliability and outstanding user experience."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass-panel space-y-5 rounded-2xl p-7 text-sm leading-relaxed text-muted-foreground sm:p-9 sm:text-base">
            <p>
              <span className="font-semibold text-foreground">Gurwinder Singh</span> is
              a Senior IT Infrastructure Engineer with 6+ years of progressive experience
              delivering enterprise EUC, deskside and service desk support across India
              and the UK.
            </p>
            <p>
              Currently working on-site within GSK&apos;s London environment through
              Intuited Ltd, Gurwinder provides high-quality technical support across a
              complex and highly regulated enterprise environment supporting thousands
              of users.
            </p>
            <p>
              His expertise spans Microsoft Intune, Autopilot, Microsoft 365, Active
              Directory, Entra ID, Windows 10/11, SCCM/MECM, networking, VPN, endpoint
              analytics, IT security and ITIL-based service management.
            </p>
            <p>
              He is particularly experienced in VIP and C-suite support, endpoint
              lifecycle management, incident management, proactive troubleshooting and
              improving first-time-fix performance.
            </p>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="text-lg font-semibold">What I Bring</h3>
            </Reveal>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {BRINGS.map(({ title, Icon, text }, i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={i * 60}
                  className="card-hover rounded-xl border border-border bg-card/70 p-5"
                >
                  <Icon aria-hidden="true" className="size-5 text-primary" />
                  <h4 className="mt-3 text-sm font-semibold">{title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
