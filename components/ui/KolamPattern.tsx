import { cn } from "@/lib/utils";

interface KolamPatternProps {
  size?: number;
  opacity?: number;
  animate?: boolean;
  className?: string;
}

export default function KolamPattern({
  size = 600,
  opacity = 0.1,
  animate = true,
  className,
}: KolamPatternProps) {
  return (
    <div
      className={cn("pointer-events-none select-none", className)}
      style={{ opacity }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(animate && "animate-kolam-spin")}
      >
        {/* Outer circle */}
        <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="0.5" />

        {/* Inner concentric circles */}
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="40" stroke="currentColor" strokeWidth="0.5" />

        {/* Radial lines — 16 spokes */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const rad = (angle * Math.PI) / 180;
          const x2 = 200 + 190 * Math.cos(rad);
          const y2 = 200 + 190 * Math.sin(rad);
          return (
            <line
              key={`spoke-${i}`}
              x1="200"
              y1="200"
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Petal arcs — kolam-inspired curved loops */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          const rad = (angle * Math.PI) / 180;
          const nextRad = ((angle + 45) * Math.PI) / 180;
          const r = 140;
          const x1 = 200 + r * Math.cos(rad);
          const y1 = 200 + r * Math.sin(rad);
          const x2 = 200 + r * Math.cos(nextRad);
          const y2 = 200 + r * Math.sin(nextRad);
          const mx = 200 + (r + 40) * Math.cos(rad + (Math.PI / 8));
          const my = 200 + (r + 40) * Math.sin(rad + (Math.PI / 8));
          return (
            <path
              key={`petal-${i}`}
              d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          );
        })}

        {/* Inner petal arcs */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8 + 22.5;
          const rad = (angle * Math.PI) / 180;
          const nextRad = ((angle + 45) * Math.PI) / 180;
          const r = 80;
          const x1 = 200 + r * Math.cos(rad);
          const y1 = 200 + r * Math.sin(rad);
          const x2 = 200 + r * Math.cos(nextRad);
          const y2 = 200 + r * Math.sin(nextRad);
          const mx = 200 + (r + 30) * Math.cos(rad + (Math.PI / 8));
          const my = 200 + (r + 30) * Math.sin(rad + (Math.PI / 8));
          return (
            <path
              key={`inner-petal-${i}`}
              d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          );
        })}

        {/* Diamond shapes at cardinal points */}
        {Array.from({ length: 4 }).map((_, i) => {
          const angle = (i * 90) + 45;
          const rad = (angle * Math.PI) / 180;
          const cx = 200 + 155 * Math.cos(rad);
          const cy = 200 + 155 * Math.sin(rad);
          const s = 12;
          return (
            <path
              key={`diamond-${i}`}
              d={`M ${cx} ${cy - s} L ${cx + s} ${cy} L ${cx} ${cy + s} L ${cx - s} ${cy} Z`}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          );
        })}

        {/* Dot grid — traditional kolam dots */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          const rad = (angle * Math.PI) / 180;
          return [60, 100, 160].map((r) => (
            <circle
              key={`dot-${i}-${r}`}
              cx={200 + r * Math.cos(rad)}
              cy={200 + r * Math.sin(rad)}
              r="2"
              fill="currentColor"
            />
          ));
        })}
      </svg>
    </div>
  );
}
