"use client";

import { useState, useRef, useEffect } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  highlightWords?: boolean;
  align?: "left" | "right";
}

export function Dropdown({
  label,
  options,
  value,
  onChange,
  className = "",
  highlightWords = false,
  align = "right",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  const highlightText = (text: string) => {
    if (!highlightWords) return text;

    const keywords = ["menor", "mayor", "nuevos", "viejos"];
    const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));

    return parts.map((part, index) => {
      if (keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase())) {
        return (
          <strong key={index} className="font-bold">
            {part}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between gap-2 text-sm font-semibold tracking-[0.07875px] text-neutral-900 transition-colors hover:text-red-600"
      >
        <span>{label}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute top-full z-50 mt-2 w-[158px] rounded-md bg-white shadow-[2px_8px_20px_rgba(0,0,0,0.08)] ${
            align === "left" ? "left-0" : "right-0"
          }`}
        >
          {options.map((option, index) => (
            <div key={option.value}>
              <button
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full cursor-pointer px-3 py-2.5 text-left text-[10px] leading-[35px] tracking-[-0.1px] text-[#191919] transition-colors hover:bg-[rgba(209,214,214,0.2)] ${
                  value === option.value ? "bg-[rgba(209,214,214,0.2)]" : ""
                } ${index === 0 ? "rounded-t-md" : ""} ${index === options.length - 1 ? "rounded-b-md" : ""}`}
              >
                {highlightText(option.label)}
              </button>
              {index < options.length - 1 && <div className="h-px bg-neutral-400" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
