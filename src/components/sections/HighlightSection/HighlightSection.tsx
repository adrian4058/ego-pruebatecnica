import Image from "next/image";
import { ModelHighlight } from "@/types/vehicle";

interface HighlightSectionProps {
  highlight: ModelHighlight;
  imagePosition: "left" | "right";
}

export function HighlightSection({ highlight, imagePosition }: HighlightSectionProps) {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 ${
            imagePosition === "left" ? "" : "lg:[&>*:first-child]:order-2"
          }`}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src={highlight.image} alt={highlight.title} fill className="object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-bold text-neutral-900 sm:text-3xl">{highlight.title}</h2>
            <div
              className="text-base leading-relaxed text-neutral-600 sm:text-lg"
              dangerouslySetInnerHTML={{ __html: highlight.content }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
