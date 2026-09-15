import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Achievements } from "@/components/portfolio/Achievements";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Toolkit } from "@/components/portfolio/Toolkit";
import { WhyMe } from "@/components/portfolio/WhyMe";
import { CareerTimeline } from "@/components/portfolio/CareerTimeline";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const TITLE =
  "Gurwinder Singh | Senior IT Infrastructure Engineer | EUC & Endpoint Specialist";
const DESCRIPTION =
  "Gurwinder Singh is a Senior IT Infrastructure Engineer in London with 6+ years of enterprise IT experience specialising in Microsoft Intune, Microsoft 365, Entra ID, Active Directory, endpoint management, networking and VIP support."

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Senior IT Infrastructure Engineer, IT Infrastructure Engineer London, Senior Desktop Support Engineer, EUC Engineer, Endpoint Engineer, Microsoft Intune Engineer, Intune Autopilot, Microsoft 365 Support, Entra ID, Active Directory, ServiceNow, IT Infrastructure, IT Service Desk, VIP IT Support, Desktop Support London",
      },
      { name: "author", content: "Gurwinder Singh" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gurwinder Singh",
          jobTitle: "Senior IT Infrastructure Engineer",
          email: "mailto:cegurwinder@gmail.com",
          telephone: "+44 7852 347777",
          address: {
            "@type": "PostalAddress",
            addressLocality: "London",
            addressCountry: "GB",
          },
          knowsAbout: [
            "Microsoft Intune",
            "Intune Autopilot",
            "Microsoft 365",
            "Entra ID",
            "Active Directory",
            "Endpoint Management",
            "ServiceNow",
            "ITIL",
            "Networking",
          ],
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Achievements />
        <ExperienceTimeline />
        <Skills />
        <Certifications />
        <Education />
        <Projects />
        <Toolkit />
        <WhyMe />
        <CareerTimeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
