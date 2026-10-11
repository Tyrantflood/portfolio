/** Scrolls a section into view. The page scrolls inside <main>, so this uses scrollIntoView, and it skips the animation when the visitor prefers reduced motion. */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  element.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
    inline: "nearest",
  });
}
