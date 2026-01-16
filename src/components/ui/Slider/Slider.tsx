"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ModelFeature } from "@/types/vehicle";

interface SliderItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface SliderProps {
  features?: ModelFeature[];
}

const defaultItems: SliderItem[] = [
  {
    id: "motor",
    title: "Nuevos motores Toyota",
    description: "Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y 2GD (2.4 L).",
    image: "/imgs/Slider/0.png",
  },
  {
    id: "suspension",
    title: "Suspensión mejorada",
    description: "Mayor confort de marcha, estabilidad y capacidad Off Road.",
    image: "/imgs/Slider/01.png",
  },
  {
    id: "transmision-auto",
    title: "Transmisión automática",
    description: "Posibilidad de elección de caja automática de manejo.",
    image: "/imgs/Slider/02.png",
  },
  {
    id: "transmision-manual",
    title: "Transmisión manual",
    description: "Posibilidad de elección de caja automática de manejo.",
    image: "/imgs/Slider/03.png",
  },
  {
    id: "transmision-manual-2",
    title: "Transmisión manual",
    description: "Posibilidad de elección de caja automática de manejo.",
    image: "/imgs/Slider/04.png",
  },
  {
    id: "transmision-manual-3",
    title: "Transmisión manual",
    description: "Posibilidad de elección de caja automática de manejo.",
    image: "/imgs/Slider/05.png",
  },
];

export function Slider({ features }: SliderProps) {
  const sliderItems: SliderItem[] = features
    ? features.map((f, i) => ({
        id: `feature-${i}`,
        title: f.name,
        description: f.description,
        image: f.image,
      }))
    : defaultItems;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalItems = sliderItems.length;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    const threshold = 50;

    if (diff > threshold) {
      goToPrevious();
      setStartX(e.clientX);
      setDragOffset(0);
      return;
    }

    if (diff < -threshold) {
      goToNext();
      setStartX(e.clientX);
      setDragOffset(0);
      return;
    }

    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    const threshold = 50;

    if (diff > threshold) {
      goToPrevious();
      setStartX(e.touches[0].clientX);
      setDragOffset(0);
      return;
    }

    if (diff < -threshold) {
      goToNext();
      setStartX(e.touches[0].clientX);
      setDragOffset(0);
      return;
    }

    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % totalItems;
      items.push({
        ...sliderItems[index],
        position: i,
        isEdge: i === 0 || i === 5,
      });
    }
    return items;
  };

  const getMobileItems = () => {
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;
    return [
      { ...sliderItems[prevIndex], uniqueKey: `prev-${currentIndex}` },
      { ...sliderItems[currentIndex], uniqueKey: `current-${currentIndex}` },
      { ...sliderItems[nextIndex], uniqueKey: `next-${currentIndex}` },
    ];
  };

  const visibleItems = getVisibleItems();
  const mobileItems = getMobileItems();

  return (
    <section className="relative w-full bg-neutral-100 py-12 sm:py-16 lg:py-20">
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-45 z-20 hidden h-14 w-10 cursor-pointer items-center justify-center bg-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-300 lg:flex"
        aria-label="Anterior"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-45 z-20 hidden h-14 w-10 cursor-pointer items-center justify-center bg-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-300 lg:flex"
        aria-label="Siguiente"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        ref={sliderRef}
        className={`w-full overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab lg:cursor-grab"}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex lg:hidden ${isDragging ? "" : "transition-transform duration-700 ease-out"}`}
          style={{
            transform: `translateX(calc(-100% + ${dragOffset}px))`,
          }}
        >
          {mobileItems.map((item) => (
            <div key={item.uniqueKey} className="w-full shrink-0 select-none px-8">
              <div className="relative mb-4 aspect-video overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  draggable={false}
                />
              </div>
              <h3 className="mb-2 font-primary text-base font-bold text-neutral-900">{item.title}</h3>
              <p className="font-primary text-sm leading-relaxed text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`hidden lg:flex ${isDragging ? "" : "transition-transform duration-700 ease-out"}`}
          style={{
            transform: `translateX(calc(-10% + ${dragOffset}px))`,
          }}
        >
          {visibleItems.map((item, idx) => (
            <div key={`desktop-${item.id}-${idx}`} className="w-[20%] shrink-0 select-none px-3">
              <div className="relative mb-4 aspect-video overflow-hidden bg-black">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="25vw" draggable={false} />
                {item.isEdge && <div className="absolute inset-0 bg-neutral-100/70" />}
              </div>
              <h3
                className={`mb-2 font-primary text-base font-bold ${
                  item.isEdge ? "text-neutral-400" : "text-neutral-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`font-primary text-sm leading-relaxed ${
                  item.isEdge ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {sliderItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-12 bg-neutral-500" : "w-2 bg-neutral-300"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
