export const CV_PATH = "/Gurwinder-Singh-CV.pdf";
export const EMAIL = "cegurwinder@gmail.com";
export const PHONE = "+44 7852 347777";
export const PHONE_HREF = "+447852347777";
export const LOCATION = "London, United Kingdom";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const HERO_STATS = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 8000, suffix: "+", label: "Users Supported" },
  { value: 95, suffix: "%+", label: "SLA Compliance" },
  { value: 85, suffix: "%+", label: "First-Time-Fix Rate" },
];

export const SKILL_GROUPS = [
  {
    category: "Microsoft & Cloud",
    icon: "cloud",
    skills: [
      "Microsoft 365",
      "Outlook",
      "Teams",
      "OneDrive",
      "SharePoint",
      "Exchange Online",
      "Microsoft Azure",
      "Azure AD / Entra ID",
    ],
  },
  {
    category: "Endpoint Management",
    icon: "laptop",
    skills: [
      "Microsoft Intune",
      "Endpoint Manager",
      "Intune Autopilot",
      "SCCM / MECM",
      "MDT",
      "OSD",
      "Application Packaging",
      "Patch Management",
    ],
  },
  {
    category: "Identity & Access",
    icon: "key",
    skills: [
      "Active Directory",
      "Entra ID",
      "User & Group Management",
      "Group Policy",
      "LDAP",
      "MFA",
      "Password Management",
      "Access Management",
    ],
  },
  {
    category: "Operating Systems",
    icon: "monitor",
    skills: ["Windows 10", "Windows 11", "Windows Server", "macOS", "Linux"],
  },
  {
    category: "Networking",
    icon: "network",
    skills: [
      "LAN/WAN",
      "Wi-Fi",
      "TCP/IP",
      "DNS",
      "DHCP",
      "VPN",
      "GlobalProtect",
      "Cisco AnyConnect",
      "Remote Access",
    ],
  },
  {
    category: "Security",
    icon: "shield",
    skills: [
      "BitLocker",
      "Antivirus / EDR",
      "Symantec Endpoint Protection",
      "Patch Management",
      "Endpoint Security",
      "Vulnerability Remediation",
      "Cybersecurity Best Practices",
    ],
  },
  {
    category: "ITSM",
    icon: "ticket",
    skills: [
      "ServiceNow",
      "Remedy",
      "Jira",
      "Incident Management",
      "Problem Management",
      "Change Management",
      "Request Management",
      "ITIL",
    ],
  },
  {
    category: "Monitoring & Automation",
    icon: "activity",
    skills: ["Nexthink", "PowerShell", "Python", "Bash"],
  },
] as const;

export const TOOLKIT = [
  "Microsoft 365",
  "Microsoft Intune",
  "Microsoft Azure",
  "Entra ID",
  "Active Directory",
  "ServiceNow",
  "Nexthink",
  "SCCM",
  "PowerShell",
  "Windows",
  "Cisco",
  "GlobalProtect",
  "Jira",
];
