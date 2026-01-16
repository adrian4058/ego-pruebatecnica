"use client";

interface FilterProps {
  label: string;
  onClick?: () => void;
}

export function Filter({ label, onClick }: FilterProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-sm text-neutral-800 hover:text-primary transition-colors"
    >
      <span>{label}</span>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-current"
      >
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
