import { Building2, HeartHandshake, Layers, RefreshCcw } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const REASONS = [
  {
    Icon: Building2,
    title: "Enterprise Mindset",
    text: "Experienced supporting large, complex and highly regulated environments.",
  },
  {
    Icon: HeartHandshake,
    title: "User First",
    text: "Strong focus on customer experience, communication and resolving issues efficiently.",
  },
  {
    Icon: Layers,
    title: "Technical Depth",
    text: "Hands-on experience across endpoints, identity, Microsoft 365, networking and security.",
  },
  {
    Icon: RefreshCcw,
    title: "Continuous Improvement",
    text: "Focused on automation, proactive troubleshooting, documentation and reducing recurring incidents.",
  },
];

export function WhyMe() {
  return (
    <section id="why" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Working Together" title="Why Teams Rely On Me" />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 70}
              className="card-hover h-full rounded-2xl border border-border bg-card/70 p-6"
            >
              <Icon aria-hidden="true" className="size-6 text-cyan" />
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
