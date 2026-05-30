"use client";

import { useState, useMemo } from "react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";

type FiltersState = {
  roastLevel: string[];
  estate: string[];
  process: string[];
};

export default function CollectionsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersState>({
    roastLevel: [],
    estate: [],
    process: [],
  });

  // Extract unique filter options from mock data
  const filterOptions = useMemo(() => {
    const estates = Array.from(new Set(products.map((p) => p.estate)));
    const processes = Array.from(new Set(products.map((p) => p.stats.process)));
    const roastLevels = Array.from(
      new Set(products.map((p) => p.stats.roastLevel)),
    );
    return { estates, processes, roastLevels };
  }, []);

  // Filter products based on selected state
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchRoast =
        filters.roastLevel.length === 0 ||
        filters.roastLevel.includes(p.stats.roastLevel);
      const matchEstate =
        filters.estate.length === 0 || filters.estate.includes(p.estate);
      const matchProcess =
        filters.process.length === 0 ||
        filters.process.includes(p.stats.process);

      return matchRoast && matchEstate && matchProcess;
    });
  }, [filters]);

  const toggleFilter = (key: keyof FiltersState, value: string) => {
    setFilters((prev) => {
      const current = prev[key];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
  };

  const clearAllFilters = () => {
    setFilters({ roastLevel: [], estate: [], process: [] });
  };

  const activeFiltersCount =
    filters.roastLevel.length + filters.estate.length + filters.process.length;

  const FilterGroup = ({
    title,
    filterKey,
    options,
  }: {
    title: string;
    filterKey: keyof FiltersState;
    options: string[];
  }) => (
    <div className="mb-8">
      <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">
        {title}
      </h3>
      <div className="space-y-3">
        {options.map((opt) => {
          const isActive = filters[filterKey].includes(opt);
          return (
            <label
              key={opt}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={(e) => {
                e.preventDefault(); // Prevent default label behavior if no input
                toggleFilter(filterKey, opt);
              }}
            >
              <div
                className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                  isActive
                    ? "bg-gold border-gold"
                    : "border-ink/30 group-hover:border-gold"
                }`}
              >
                {isActive && (
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="#1C0F07"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="font-body text-sm text-ink/80 group-hover:text-ink transition-colors">
                {opt}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-bg pt-12 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-ink mb-2">
              All Offerings
            </h1>
            <p className="font-body text-sm text-muted uppercase tracking-[0.1em]">
              {filteredProducts.length} Offerings
            </p>
          </div>
          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-24">
              <FilterGroup
                title="Roast Level"
                filterKey="roastLevel"
                options={filterOptions.roastLevels}
              />
              <FilterGroup
                title="Estate"
                filterKey="estate"
                options={filterOptions.estates}
              />
              <FilterGroup
                title="Process"
                filterKey="process"
                options={filterOptions.processes}
              />
            </div>
          </aside>

          {/* Main Grid Area */}
          <div className="flex-1">
            {/* Active Filters Strip */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-ink/10">
                <span className="font-body text-xs text-muted uppercase tracking-[0.1em] mr-2">
                  Active Filters:
                </span>
                {Object.entries(filters).map(([key, values]) =>
                  values.map((v) => (
                    <button
                      key={`${key}-${v}`}
                      onClick={() => toggleFilter(key as keyof FiltersState, v)}
                      className="flex items-center gap-2 px-3 py-1 bg-ink/5 hover:bg-ink/10 transition-colors rounded-pill text-xs font-body"
                    >
                      {v}
                      <span className="text-ink/50 text-[10px]">✕</span>
                    </button>
                  )),
                )}
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-body text-gold hover:text-ink underline underline-offset-4 ml-auto"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <p className="font-display text-2xl text-ink mb-4">
                  No coffees found.
                </p>
                <p className="font-body text-muted mb-8">
                  Try adjusting your filters to see more results.
                </p>
                <Button onClick={clearAllFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden">
          <div
            className="absolute inset-0 bg-dark/20 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-bg h-full shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-ink/10">
              <h2 className="font-display text-2xl text-ink">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-ink/50 hover:text-ink p-2"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <FilterGroup
                title="Roast Level"
                filterKey="roastLevel"
                options={filterOptions.roastLevels}
              />
              <FilterGroup
                title="Estate"
                filterKey="estate"
                options={filterOptions.estates}
              />
              <FilterGroup
                title="Process"
                filterKey="process"
                options={filterOptions.processes}
              />
            </div>
            <div className="p-6 border-t border-ink/10 bg-bg">
              <Button
                className="w-full"
                onClick={() => setMobileFiltersOpen(false)}
              >
                Show {filteredProducts.length} Results
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
