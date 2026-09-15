import {
  Cloud,
  KeyRound,
  Laptop,
  Network,
  Server,
  ShieldCheck,
  Activity,
  Smartphone,
} from "lucide-react";

const NODES = [
  { label: "Microsoft 365", Icon: Cloud, x: 18, y: 14 },
  { label: "Intune", Icon: Smartphone, x: 78, y: 16 },
  { label: "Entra ID", Icon: KeyRound, x: 88, y: 52 },
  { label: "Active Directory", Icon: Server, x: 12, y: 52 },
  { label: "Network", Icon: Network, x: 22, y: 86 },
  { label: "Security", Icon: ShieldCheck, x: 82, y: 86 },
  { label: "Monitoring", Icon: Activity, x: 50, y: 6 },
];

export function EnterpriseDiagram() {
  return (
    <div
      role="img"
      aria-label="Diagram of an enterprise IT environment: a managed endpoint connected to Microsoft 365, Intune, Entra ID, Active Directory, networking, security and endpoint monitoring."
      className="glass-panel relative aspect-square w-full max-w-[30rem] overflow-hidden rounded-3xl"
    >
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 opacity-60" />

      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {NODES.map((n) => (
          <line
            key={n.label}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="var(--primary)"
            strokeOpacity="0.45"
            strokeWidth="0.4"
            className="dash-flow"
          />
        ))}
      </svg>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="float-soft flex flex-col items-center gap-2 rounded-2xl border border-border bg-card/90 px-5 py-4 shadow-[var(--shadow-glow)]">
          <Laptop aria-hidden="true" className="size-8 text-cyan" />
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">Endpoint</p>
          <p className="text-[0.65rem] text-muted-foreground">Managed &amp; Compliant</p>
        </div>
      </div>

      {NODES.map(({ label, Icon, x, y }) => (
        <div
          key={label}
          style={{ left: `${x}%`, top: `${y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface-elevated/85 px-3 py-1.5 text-[0.7rem] font-medium whitespace-nowrap transition-colors hover:border-primary">
            <Icon aria-hidden="true" className="size-3.5 text-primary" />
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
