import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { createPortal } from "react-dom";
import { useEffect } from "react";

interface PageNavigationProps {
  previousPage?: { href: string; label: string };
  nextPage?: { href: string; label: string };
}

export const PageNavigation = ({ previousPage, nextPage }: PageNavigationProps) => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && previousPage) {
        setLocation(previousPage.href);
      } else if (e.key === "ArrowRight" && nextPage) {
        setLocation(nextPage.href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previousPage, nextPage, setLocation]);

  return createPortal(
    <>
      {previousPage && (
        <Link 
          href={previousPage.href}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-40 w-10 md:w-16 lg:w-20 h-32 flex items-center justify-start pl-1 md:pl-2 group cursor-pointer"
        >
          <div className="flex items-center gap-2 text-foreground/40 group-hover:text-accent opacity-30 md:opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-1">
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 backdrop-blur-sm" />
          </div>
        </Link>
      )}

      {nextPage && (
        <Link 
          href={nextPage.href}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 w-10 md:w-16 lg:w-20 h-32 flex items-center justify-end pr-1 md:pr-2 group cursor-pointer"
        >
          <div className="flex items-center gap-2 text-foreground/40 group-hover:text-accent opacity-30 md:opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10 backdrop-blur-sm" />
          </div>
        </Link>
      )}
    </>,
    document.body
  );
};
