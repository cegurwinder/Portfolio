import { MapPin } from "lucide-react";
import { EMAIL, PHONE, PHONE_HREF } from "./data";

const QUICK_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold">Gurwinder Singh</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Senior IT Infrastructure Engineer | EUC &amp; Endpoint Specialist
          </p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin aria-hidden="true" className="size-4 text-primary" />
            London, UK
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Quick links
          </p>
          <ul className="mt-4 space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE_HREF}`}
                className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {PHONE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto w-full max-w-7xl px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
          © 2026 Gurwinder Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
