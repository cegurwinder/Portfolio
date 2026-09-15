import {
  Users,
  GaugeCircle,
  Rocket,
  Timer,
  Wrench,
  BookOpenCheck,
} from "lucide-react";
import { Counter, Reveal, SectionHeading } from "./primitives";

const ACHIEVEMENTS = [
  {
    Icon: Users,
    value: 8000,
    suffix: "+",
    title: "Users Supported",
    text: "Supported large-scale enterprise environments across the UK and India.",
  },
  {
    Icon: GaugeCircle,
    value: 95,
    suffix: "%+",
    title: "SLA Compliance",
    text: "Consistently maintained strong SLA performance across P1, P2 and P3 incidents.",
  },
  {
    Icon: Rocket,
    value: 300,
    suffix: "+",
    title: "Device Autopilot Rollout",
    text: "Led Microsoft Intune Autopilot deployment for 300+ devices.",
  },
  {
    Icon: Timer,
    value: 40,
    suffix: "%",
    title: "Faster Deployment",
    text: "Reduced device build and deployment time by approximately 40%.",
  },
  {
    Icon: Wrench,
    value: 85,
    suffix: "%+",
    title: "First-Time Fix",
    text: "Maintained a first-time-fix rate above 85% through proactive diagnostics and endpoint analytics.",
  },
  {
    Icon: BookOpenCheck,
    value: 25,
    suffix: "%",
    title: "Fewer Repeat Incidents",
    text: "Created and maintained 30+ technical SOPs and knowledge articles, helping reduce repeat incidents by approximately 25%.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-24 py-20 sm:py-24">
      <div aria-hidden="true" className="hero-aura absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Results"
          title="Impact & Achievements"
          description="Measurable outcomes delivered across enterprise support operations and endpoint programmes."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map(({ Icon, value, suffix, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 70}
              className="card-hover relative overflow-hidden rounded-2xl border border-border bg-card/75 p-6"
            >
              <span aria-hidden="true" className="accent-bar absolute inset-x-0 top-0 h-px" />
              <Icon aria-hidden="true" className="size-6 text-cyan" />
              <p className="mt-5 text-3xl font-semibold">
                <Counter value={value} suffix={suffix} className="text-gradient" />
              </p>
              <h3 className="mt-2 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
