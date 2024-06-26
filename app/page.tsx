"use client";

import { useState, useEffect } from "react";
import Home from "./_app";
import SkeletonUI from "./loader";
import CachedContent from "./components/cache-content";
import { ThemeContextProvider } from "./components/theme-provider";

import "./globals.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentCached, setIsContentCached] = useState(false);
  const [isCachedContent, setCachedContent] = useState({});

  useEffect(() => {
    /* disable scrolling */
    document.body.style.overflow = "hidden";

    const cachedContent = localStorage.getItem("motanya-content");

    if (cachedContent) {
      setIsContentCached(true);
      setCachedContent(JSON.parse(cachedContent));
    } else {
      setIsContentCached(false);
    }
    /* simulate loading time if content is not cached */
    setIsLoading(false);

    /* enable scrolling after data is fetched */
    document.body.style.overflow = "auto";
  }, [isCachedContent]);

  return isLoading ? (
    <SkeletonUI />
  ) : isContentCached ? (
    <CachedContent
      cachedContent={
        {
          html: "This is the content to cache",
          meta: {
            title: "Cornelius | Portfolio",
            description:
              "Welcome to my portfolio website! I'm a passionate web developer with expertise in React, Next.js, and other modern web technologies. Browse my projects and learn more about my skills and experience.",
          },
        } || ""
      }
    />
  ) : (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
}
