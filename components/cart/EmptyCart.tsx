import Link from "next/link";
import Button from "@/components/ui/Button";

export default function EmptyCart() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <div className="text-gold mb-8">
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dabara and Tumbler Thin Line SVG */}
          <ellipse cx="50" cy="70" rx="30" ry="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M30 70L25 45H75L70 70" stroke="currentColor" strokeWidth="1.5" />
          
          <ellipse cx="50" cy="30" rx="20" ry="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M30 30L35 60H65L70 30" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Coffee drops/steam */}
          <path d="M45 15Q50 5 55 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M55 20Q60 10 65 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <h1 className="font-display text-4xl text-ink mb-4">
        Your Cart is Empty
      </h1>
      <p className="font-body text-muted mb-8 max-w-md">
        Looks like you haven't added any coffee to your cart yet. Discover our single-estate offerings and start your ritual.
      </p>
      <Link href="/collections">
        <Button variant="primary">Shop Coffee</Button>
      </Link>
    </div>
  );
}
