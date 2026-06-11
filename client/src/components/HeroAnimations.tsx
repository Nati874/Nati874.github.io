import { useEffect, useState } from "react";

export const TypingText = ({ text = "Hi I'm Nathnael Ayizohibel", speed = 120 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

export const RotatingWords = ({
  words = ["Creative", "Innovative", "Passionate", "Designer", "Developer", "Visionary"],
  interval = 3000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div className="relative h-8 overflow-hidden">
      <div
        className={`absolute transition-all duration-300 ease-in-out transform ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <span className="text-accent font-display font-semibold text-xl">
          {words[currentWordIndex]}
        </span>
      </div>
    </div>
  );
};
