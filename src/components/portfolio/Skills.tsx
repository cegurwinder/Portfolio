import {
  Activity,
  Cloud,
  KeyRound,
  Laptop,
  Monitor,
  Network,
  ShieldCheck,
  TicketCheck,
  type LucideIcon,
} from "lucide-react";
import { SKILL_GROUPS } from "./data";
import { Reveal, SectionHeading } from "./primitives";

const ICONS: Record<string, LucideIcon> = {
  cloud: Cloud,
  laptop: Laptop,
  key: KeyRound,
  monitor: Monitor,
  network: Network,
  shield: ShieldCheck,
  ticket: TicketCheck,
  activity: Activity,
};

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Expertise"
          description="Hands-on enterprise skills across endpoints, identity, cloud, networking, security and service management."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Cloud;
            return (
              <Reveal
                key={group.category}
                delay={i * 60}
                className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-surface-elevated/70">
                    <Icon aria-hidden="true" className="size-4.5 text-primary" />
                  </span>
                  <h3 className="text-sm font-semibold">{group.category}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-surface/60 px-2.5 py-1 text-xs text-foreground/85 transition-colors hover:border-primary hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
