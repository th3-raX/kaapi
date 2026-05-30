import { cn } from "@/lib/utils";

interface QuantityStepperProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: string;
}

export default function QuantityStepper({
  quantity,
  onIncrement,
  onDecrement,
  className,
}: QuantityStepperProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center border border-ink",
        className,
      )}
    >
      <button
        type="button"
        onClick={onDecrement}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
        className="w-10 h-10 flex items-center justify-center text-ink hover:bg-ink/5 transition-colors duration-base disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
      >
        <span className="text-lg leading-none">−</span>
      </button>
      <span className="w-10 h-10 flex items-center justify-center font-body text-sm text-ink border-x border-ink">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label="Increase quantity"
        className="w-10 h-10 flex items-center justify-center text-ink hover:bg-ink/5 transition-colors duration-base cursor-pointer"
      >
        <span className="text-lg leading-none">+</span>
      </button>
    </div>
  );
}
