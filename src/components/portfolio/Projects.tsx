import { Activity, BookOpenCheck, Crown, Rocket } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const PROJECTS = [
  {
    Icon: Rocket,
    title: "Microsoft Intune Autopilot Deployment",
    tag: "300+ Devices",
    text: "Led device deployment and provisioning using Microsoft Intune Autopilot, improving deployment efficiency and reducing manual imaging overhead.",
    metricLabel: "Impact",
    metric: "40% reduction in build & deployment time",
  },
  {
    Icon: Activity,
    title: "Endpoint Analytics & Proactive Support",
    tag: "Nexthink",
    text: "Used Nexthink endpoint analytics to identify device health issues, performance degradation and potential root causes before they became major user incidents.",
    metricLabel: "Impact",
    metric: "85%+ first-time-fix rate",
  },
  {
    Icon: BookOpenCheck,
    title: "Knowledge Base & SOP Development",
    tag: "30+ Technical Articles",
    text: "Created and maintained technical SOPs, troubleshooting guides and knowledge articles to improve self-service and reduce recurring incidents.",
    metricLabel: "Impact",
    metric: "25% reduction in repeat incidents",
  },
  {
    Icon: Crown,
    title: "VIP & Executive IT Support",
    tag: "GSK Enterprise Environment",
    text: "Provided discreet, high-priority white-glove IT support for senior stakeholders and C-suite users.",
    metricLabel: "Focus",
    metric: "Reliability • Security • Speed • Customer Experience",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-24">
      <div aria-hidden="true" className="hero-aura absolute inset-0 -z-10 opacity-30" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Initiatives"
          title="Selected IT Projects & Initiatives"
          description="Real workplace initiatives that improved endpoint operations and support performance."
        />

        <ul className="mt-14 grid gap-5 lg:grid-cols-2">
          {PROJECTS.map(({ Icon, title, tag, text, metric, metricLabel }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 70}
              className="glass-panel card-hover flex h-full flex-col rounded-2xl p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface-elevated/70">
                  <Icon aria-hidden="true" className="size-5 text-primary" />
                </span>
                <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-cyan">
                  {tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
              <div className="mt-6 rounded-xl border border-border bg-surface/60 p-4">
                <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  {metricLabel}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-foreground">{metric}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
