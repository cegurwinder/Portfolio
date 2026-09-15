import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const EDUCATION = [
  {
    degree: "Master of Business Administration (MBA)",
    school: "Leeds Beckett University, Leeds, UK",
    years: "2020 – 2022",
  },
  {
    degree: "MSc Computer Science",
    school: "Guru Nanak Dev University, Amritsar, India",
    years: "2015 – 2017",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    school: "Guru Nanak Dev University, Amritsar, India",
    years: "2012 – 2015",
  },
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Academics" title="Education" />

        <ol className="mx-auto mt-14 max-w-3xl space-y-4">
          {EDUCATION.map((item, i) => (
            <Reveal
              as="li"
              key={item.degree}
              delay={i * 70}
              className="card-hover flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card/70 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-elevated/70">
                  <GraduationCap aria-hidden="true" className="size-5 text-cyan" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                </div>
              </div>
              <span className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                {item.years}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
