import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CV_PATH, HERO_STATS } from "./data";
import { Counter, Reveal } from "./primitives";
import { EnterpriseDiagram } from "./EnterpriseDiagram";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
      <div aria-hidden="true" className="hero-aura absolute inset-0 -z-10" />
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.2em] text-cyan uppercase">
              Senior IT Infrastructure Engineer
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold sm:text-5xl xl:text-6xl">
              Keeping Enterprise Technology{" "}
              <span className="text-gradient">Reliable, Secure</span> &amp;
              User-Focused.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
              Senior IT Infrastructure Engineer specialising in EUC, Microsoft 365, Intune,
              Entra ID, Endpoint Management and Enterprise IT Support.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              6+ years of experience delivering enterprise-grade IT support across the
              UK and India, supporting 8,000+ users and critical business environments.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-muted-foreground">
                <MapPin aria-hidden="true" className="size-4 text-primary" />
                London, UK
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-cyan shadow-[0_0_0_4px_color-mix(in_oklab,var(--cyan)_25%,transparent)]"
                />
                Open to Senior IT Opportunities
              </span>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#experience">
                  View My Experience
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={CV_PATH} download>
                  <Download aria-hidden="true" />
                  Download CV
                </a>
              </Button>
              <a
                href="#contact"
                className="rounded-md px-2 py-2 text-sm font-medium text-cyan underline-offset-4 transition-colors hover:underline"
              >
                Get in Touch
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="w-full lg:justify-self-end">
          <EnterpriseDiagram />
        </Reveal>
      </div>

      <div className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="glass-panel grid grid-cols-2 gap-6 rounded-2xl p-6 sm:p-8 lg:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-3xl font-semibold sm:text-4xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-gradient"
                />
              </p>
              <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
