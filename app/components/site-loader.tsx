"use client";

import Image from "next/image";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SiteLoaderContextValue = {
  reportHeroReady: () => void;
};

const SiteLoaderContext = createContext<SiteLoaderContextValue | null>(null);
const LOADER_EXIT_DURATION_MS = 420;

export function useSiteLoader() {
  return useContext(SiteLoaderContext);
}

export default function SiteLoader({ children }: { children: ReactNode }) {
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);
  const [isHeroReady, setIsHeroReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const hasReportedHeroReadyRef = useRef(false);
  const isReady = isWindowLoaded && isHeroReady;

  useEffect(() => {
    const markWindowLoaded = () => {
      setIsWindowLoaded(true);
    };

    if (document.readyState === "complete") {
      markWindowLoaded();
      return;
    }

    window.addEventListener("load", markWindowLoaded);
    return () => {
      window.removeEventListener("load", markWindowLoaded);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.classList.remove("site-loading");
      return;
    }

    document.body.classList.add("site-loading");
    return () => {
      document.body.classList.remove("site-loading");
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isReady || !isVisible) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsVisible(false);
    }, LOADER_EXIT_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isReady, isVisible]);

  const contextValue: SiteLoaderContextValue = {
    reportHeroReady: () => {
      if (hasReportedHeroReadyRef.current) {
        return;
      }

      hasReportedHeroReadyRef.current = true;
      setIsHeroReady(true);
    },
  };

  return (
    <SiteLoaderContext.Provider value={contextValue}>
      {children}
      {isVisible ? (
        <div
          aria-hidden="true"
          className={`site-loader${isReady ? " site-loader--exit" : ""}`}
        >
          <Image
            src="/logo-light.svg"
            alt=""
            width={160}
            height={160}
            priority
            className="site-loader__logo"
          />
        </div>
      ) : null}
    </SiteLoaderContext.Provider>
  );
}
