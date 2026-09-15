import { Award, Network } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const CERTS = [
  {
    Icon: Award,
    name: "ITIL v4 Foundation",
    detail: "IT Service Management",
  },
  {
    Icon: Network,
    name: "Cisco Certified Network Associate (CCNA)",
    detail: "Networking & Infrastructure",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Industry certifications underpinning service management and networking expertise."
        />

        <ul className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          {CERTS.map(({ Icon, name, detail }, i) => (
            <Reveal
              as="li"
              key={name}
              delay={i * 80}
              className="glass-panel card-hover flex items-start gap-4 rounded-2xl p-6"
            >
              <span className="accent-bar flex size-11 shrink-0 items-center justify-center rounded-xl">
                <Icon aria-hidden="true" className="size-5 text-primary-foreground" />
              </span>
              <div>
                <h3 className="text-base font-semibold">{name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
