import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

const TITLE =
  "Gurwinder Singh | Senior IT Support Engineer | Enterprise Support & Endpoint Management";
const DESCRIPTION =
  "Gurwinder Singh is a Senior IT Support Engineer in London with 6+ years of enterprise IT experience specialising in Microsoft Intune, Microsoft 365, Entra ID, Active Directory, endpoint management, networking and VIP support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Senior IT Support Engineer, IT Infrastructure Engineer London, Senior Desktop Support Engineer, EUC Engineer, Endpoint Engineer, Microsoft Intune Engineer, Intune Autopilot, Microsoft 365 Support, Entra ID, Active Directory, ServiceNow, IT Infrastructure, IT Service Desk, VIP IT Support, Desktop Support London",
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
          jobTitle: "Senior IT Support Engineer",
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
  return <Portfolio />;
}
