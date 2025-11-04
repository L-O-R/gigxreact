// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({
  behavior = "auto",
  onlyOnPathname = true,
  restoreHash = true,
  top = 0,
  left = 0,
}) {
  const location = useLocation();

  useEffect(() => {
    // If there is a hash and restoreHash is enabled, try to scroll to the element
    if (restoreHash && location.hash) {
      const id = decodeURIComponent(
        location.hash.replace("#", "")
      );
      const el = document.getElementById(id);
      if (el) {
        // Use scrollIntoView for element anchoring
        el.scrollIntoView({ behavior, block: "start" });
        return;
      }
    }

    // Fallback: scroll window to top-left
    if ("scrollTo" in window) {
      window.scrollTo({ top, left, behavior });
    } else {
      // Legacy fallback
      window.scroll(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlyOnPathname ? location.pathname : location.key]);

  // This component renders nothing
  return null;
}
