"use client";

import { useState, useEffect } from "react";
import Home from "./_app";
import SkeletonUI from "./loader";
import CachedContent from "./components/cached-content";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentCached, setIsContentCached] = useState(false);
  const [cachedContent, setCachedContent] = useState(null);

  useEffect(() => {
    // disable scrolling
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

    //  enable scrolling after data is fetched
    document.body.style.overflow = "auto";
  }, []);
  return isLoading ? (
    <SkeletonUI />
  ) : isContentCached ? (
    <CachedContent cachedContent={cachedContent || ""} />
  ) : (
    <Home />
  );
}
