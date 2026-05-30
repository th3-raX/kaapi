import { cn } from "@/lib/utils";

interface FlavorPillProps {
  label: string;
  className?: string;
}

export default function FlavorPill({ label, className }: FlavorPillProps) {
  return (
    <span
      className={cn(
        "inline-block text-[11px] font-body text-muted uppercase tracking-[0.08em]",
        className,
      )}
    >
      {label}
    </span>
  );
}
