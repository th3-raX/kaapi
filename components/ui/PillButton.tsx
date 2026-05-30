import { cn } from "@/lib/utils";

interface PillButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

export default function PillButton({
  label,
  selected,
  onClick,
  className,
}: PillButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-2 text-xs font-body font-semibold uppercase tracking-[0.1em] border transition-all duration-base cursor-pointer",
        selected
          ? "bg-gold text-dark border-gold"
          : "bg-transparent text-ink border-border hover:border-muted",
        className,
      )}
    >
      {label}
    </button>
  );
}
