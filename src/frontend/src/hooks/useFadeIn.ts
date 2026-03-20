import { useEffect } from "react";

export function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const elements = document.querySelectorAll(".fade-in-up, .fade-in");
    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);
}
