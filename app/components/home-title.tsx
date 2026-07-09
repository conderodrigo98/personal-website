'use client'

import type { Dispatch, SetStateAction } from "react";
import { useEffect, useRef, useState } from "react";
import { useSiteLoader } from "./site-loader";

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
  const siteLoader = useSiteLoader();
  const [firstLine, ...remainingWords] = text.split(" ");
  const secondLine = remainingWords.join(" ");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const desktopTextRef = useRef<HTMLSpanElement>(null);
  const mobileFirstLineRef = useRef<HTMLSpanElement>(null);
  const mobileSecondLineRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const [desktopFontSize, setDesktopFontSize] = useState(DEFAULT_FONT_SIZE_PX);
  const [mobileFirstLineFontSize, setMobileFirstLineFontSize] = useState(
    DEFAULT_FONT_SIZE_PX,
  );
  const [mobileSecondLineFontSize, setMobileSecondLineFontSize] = useState(
    DEFAULT_FONT_SIZE_PX,
  );
  const hasReportedReadyRef = useRef(false);

  useEffect(() => {
    const getFittedFontSize = (
      textElement: HTMLSpanElement,
      availableWidth: number,
    ) => {
      const computedFontSize = Number.parseFloat(
        window.getComputedStyle(textElement).fontSize,
      );
      const measuredWidth = textElement.getBoundingClientRect().width;

      if (!computedFontSize || measuredWidth <= 0) {
        return null;
      }

      return clampFontSize(computedFontSize * (availableWidth / measuredWidth));
    };

    const setMeasuredFontSize = (
      setSize: Dispatch<SetStateAction<number>>,
      nextFontSize: number | null,
    ) => {
      if (nextFontSize === null) {
        return;
      }

      setSize((current) =>
        Math.abs(current - nextFontSize) < 0.5 ? current : nextFontSize,
      );
    };

    const reportReady = () => {
      if (hasReportedReadyRef.current) {
        return;
      }

      hasReportedReadyRef.current = true;
      siteLoader?.reportHeroReady();
    };

    const measure = () => {
      const heading = headingRef.current;
      const useDesktopLayout = window.matchMedia(
        DESKTOP_BREAKPOINT_QUERY,
      ).matches;

      if (!heading) {
        return;
      }

      const availableWidth = heading.clientWidth;

      if (availableWidth <= 0) {
        return;
      }

      if (useDesktopLayout) {
        if (!desktopTextRef.current) {
          return;
        }

        setMeasuredFontSize(
          setDesktopFontSize,
          getFittedFontSize(desktopTextRef.current, availableWidth),
        );
        reportReady();
        return;
      }

      if (!mobileFirstLineRef.current || !mobileSecondLineRef.current) {
        return;
      }

      setMeasuredFontSize(
        setMobileFirstLineFontSize,
        getFittedFontSize(mobileFirstLineRef.current, availableWidth),
      );
      setMeasuredFontSize(
        setMobileSecondLineFontSize,
        getFittedFontSize(mobileSecondLineRef.current, availableWidth),
      );
      reportReady();
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
  }, [siteLoader, text]);

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
          fontSize: `${desktopFontSize}px`,
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
            fontSize: `${mobileFirstLineFontSize}px`,
            paddingInlineEnd: `${TRAILING_GAP_CH}ch`,
          }}
        >
          {firstLine}
        </span>
        <span
          ref={mobileSecondLineRef}
          className="inline-block self-start whitespace-nowrap font-bold tracking-[-0.09em] [font-stretch:75%]"
          style={{
            fontSize: `${mobileSecondLineFontSize}px`,
            paddingInlineEnd: `${TRAILING_GAP_CH}ch`,
          }}
        >
          {secondLine}
        </span>
      </span>
    </h1>
  );
}
