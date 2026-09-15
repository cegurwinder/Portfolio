import { useState } from "react";
import {
  CheckCircle2,
  Download,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CV_PATH, EMAIL, LOCATION, PHONE, PHONE_HREF } from "./data";
import { Reveal, SectionHeading } from "./primitives";

type Fields = "name" | "email" | "subject" | "message";
type FormState = Record<Fields, string>;

const EMPTY: FormState = { name: "", email: "", subject: "", message: "" };

function validate(values: FormState) {
  const errors: Partial<Record<Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.subject.trim().length < 3) errors.subject = "Please add a short subject.";
  if (values.message.trim().length < 20)
    errors.message = "Please include at least 20 characters.";
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (field: Fields) => (event: { target: { value: string } }) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const body = `${values.message}\n\n—\n${values.name}\n${values.email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setValues(EMPTY);
  };

  const details = [
    { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { Icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE_HREF}` },
    { Icon: MapPin, label: "Location", value: LOCATION, href: undefined },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-24">
      <div aria-hidden="true" className="hero-aura absolute inset-0 -z-10 opacity-45" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description="Looking for a senior IT support professional who can deliver reliable enterprise support, improve endpoint operations and provide exceptional service to users? Let's start a conversation."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-panel rounded-2xl p-7 sm:p-8">
            <h3 className="text-lg font-semibold">Contact details</h3>
            <ul className="mt-6 space-y-4">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-elevated/70">
                    <Icon aria-hidden="true" className="size-4.5 text-primary" />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium underline-offset-4 hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href={`mailto:${EMAIL}`}>
                  <Mail aria-hidden="true" />
                  Email Me
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={CV_PATH} download>
                  <Download aria-hidden="true" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://www.linkedin.com/in/gurwinder-singh-61896b145/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BieSFg8nPREu3HPw%2BLD8jbQ%3D%3D" aria-label="LinkedIn profile link coming soon">
                  <Linkedin aria-hidden="true" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a
                  href={`https://wa.me/${PHONE.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Gurwinder Singh on WhatsApp"
                >
                  <MessageCircle aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              
            </p>
          </Reveal>

          <Reveal delay={80} className="glass-panel rounded-2xl p-7 sm:p-8">
            <h3 className="text-lg font-semibold">Send a message</h3>
            <form noValidate onSubmit={onSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={update("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name ? (
                    <p id="name-error" className="text-xs text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email ? (
                    <p id="email-error" className="text-xs text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={update("subject")}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject ? (
                  <p id="subject-error" className="text-xs text-destructive">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message ? (
                  <p id="message-error" className="text-xs text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Send aria-hidden="true" />
                Send Message
              </Button>

              <p aria-live="polite" className="min-h-5 text-sm">
                {sent ? (
                  <span className="inline-flex items-center gap-2 text-cyan">
                    <CheckCircle2 aria-hidden="true" className="size-4" />
                    Thank you — your message has been prepared in your email client and
                    is ready to send.
                  </span>
                ) : null}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
