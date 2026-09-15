import { TOOLKIT } from "./data";
import { Reveal, SectionHeading } from "./primitives";

export function Toolkit() {
  return (
    <section id="toolkit" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ecosystem"
          title="Professional Toolkit"
          description="The enterprise platforms and tooling used day to day."
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {TOOLKIT.map((tool, i) => (
            <Reveal
              as="li"
              key={tool}
              delay={i * 40}
              className="card-hover flex items-center justify-center rounded-xl border border-border bg-card/60 px-4 py-5 text-center text-sm font-medium"
            >
              {tool}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
