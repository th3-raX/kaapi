export default function Ticker() {
  const words = [
    "Single Estate",
    "Filter Roast",
    "Small Batch",
    "Freshly Roasted",
    "Direct Trade",
    "South India",
  ];

  const content = words.join(" · ");

  return (
    <div className="bg-dark border-t border-b border-gold/20 py-3 overflow-hidden text-gold font-body text-xs font-bold uppercase tracking-[0.15em] whitespace-nowrap">
      <div className="ticker-track">
        <span className="px-4">{content}</span>
        <span className="px-4">{content}</span>
        <span className="px-4">{content}</span>
        <span className="px-4">{content}</span>
      </div>
    </div>
  );
}
