export default function CoffeeBagPlaceholder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Coffee Bag Placeholder"
    >
      {/* Bag Outline - Slight taper at top */}
      <path
        d="M25 15 L75 15 L85 110 L15 110 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Top Fold / Seal */}
      <path
        d="M25 15 L20 28 L80 28 L75 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Side Gusset Lines (Optional, adds depth) */}
      <path
        d="M20 28 L15 110"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeDasharray="4 4"
        opacity="0.5"
      />
      <path
        d="M80 28 L85 110"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeDasharray="4 4"
        opacity="0.5"
      />
      {/* Label Area */}
      <rect
        x="35"
        y="50"
        width="30"
        height="40"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Coffee Bean Icon on Label */}
      <path
        d="M50 62 C44 62 44 72 50 72 C56 72 56 62 50 62 Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Bean crack (S-curve) */}
      <path
        d="M48 64 Q52 67 48 70"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
