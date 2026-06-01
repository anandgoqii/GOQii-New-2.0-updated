import React from "react";

interface SmartTextProps {
  children: string;
  className?: string;
}

export default function SmartText({ children, className = "" }: SmartTextProps) {
  // Pattern to split by words but retain spaces/punctuation
  const words = children.split(/(\s+)/);

  return (
    <span className={className}>
      {words.map((part, index) => {
        // Clean the word of common ending punctuation for checking
        const cleanWord = part.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();
        const targets = ["longevity", "prevention", "future", "humanity"];
        
        if (targets.includes(cleanWord)) {
          return (
            <span key={index} className="italic-serif tracking-wide font-normal lowercase glow-accent-text text-[#2BC48A]">
              {part}
            </span>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
}
