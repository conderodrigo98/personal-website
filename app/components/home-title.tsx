'use client'

import { useEffect, useRef, useState } from "react";

type HomeTitleProps = {
  backgroundImageUrl: string;
  className?: string;
  text: string;
};

const MIN_FONT_SIZE_PX = 72;
const MAX_FONT_SIZE_PX = 360;
const DEFAULT_FONT_SIZE_PX = 160;
const TRAILING_GAP_CH = 0.2;
const DESKTOP_BREAKPOINT_QUERY = "(min-width: 640px)";

function clampFontSize(value: number) {
  return Math.min(MAX_FONT_SIZE_PX, Math.max(MIN_FONT_SIZE_PX, value));
}

export default function HomeTitle({
  backgroundImageUrl,
  className,
  text,
}: HomeTitleProps) {
  const [firstLine, ...remainingWords] = text.split(" ");
  const secondLine = remainingWords.join(" ");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const desktopTextRef = useRef<HTMLSpanElement>(null);
  const mobileFirstLineRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE_PX);

  useEffect(() => {
    const measure = () => {
      const heading = headingRef.current;
      const useDesktopLayout = window.matchMedia(
        DESKTOP_BREAKPOINT_QUERY,
      ).matches;
      const textElement = useDesktopLayout
        ? desktopTextRef.current
        : mobileFirstLineRef.current;

      if (!heading || !textElement) {
        return;
      }

      const availableWidth = heading.clientWidth;

      if (availableWidth <= 0) {
        return;
      }

      const computedFontSize = Number.parseFloat(
        window.getComputedStyle(textElement).fontSize,
      );
      const measuredWidth = textElement.getBoundingClientRect().width;

      if (!computedFontSize || measuredWidth <= 0) {
        return;
      }

      const nextFontSize = clampFontSize(
        computedFontSize * (availableWidth / measuredWidth),
      );

      setFontSize((current) =>
        Math.abs(current - nextFontSize) < 0.5 ? current : nextFontSize,
      );
    };

    const scheduleMeasure = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = requestAnimationFrame(measure);
      });
    };

    scheduleMeasure();

    const resizeObserver = new ResizeObserver(scheduleMeasure);
    if (headingRef.current) {
      resizeObserver.observe(headingRef.current);
    }

    window.addEventListener("resize", scheduleMeasure);

    void document.fonts?.ready.then(scheduleMeasure);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
    };
  }, [text]);

  return (
    <h1
      ref={headingRef}
      aria-label={text}
      className={className}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        fontFamily: "Arial",
      }}
    >
      <span
        ref={desktopTextRef}
        className="hidden whitespace-nowrap font-bold tracking-[-0.09em] [font-stretch:75%] sm:inline-block"
        style={{
          fontSize: `${fontSize}px`,
          paddingInlineEnd: `${TRAILING_GAP_CH}ch`,
        }}
      >
        {text}
      </span>
      <span className="flex flex-col items-start leading-none sm:hidden">
        <span
          ref={mobileFirstLineRef}
          className="inline-block self-start whitespace-nowrap font-bold tracking-[-0.09em] [font-stretch:75%]"
          style={{
            fontSize: `${fontSize}px`,
            paddingInlineEnd: `${TRAILING_GAP_CH}ch`,
          }}
        >
          {firstLine}
        </span>
        <span
          className="inline-block self-start whitespace-nowrap font-bold tracking-[-0.09em] [font-stretch:75%]"
          style={{
            fontSize: `${fontSize}px`,
            paddingInlineEnd: `${TRAILING_GAP_CH}ch`,
          }}
        >
          {secondLine}
        </span>
      </span>
    </h1>
  );
}
