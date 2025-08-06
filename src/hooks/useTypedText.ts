import { useState, useEffect, useRef } from "react";

export function useTypedText(words: string[], speed = 80, pause = 1000) {
  const [index, setIndex] = useState(0); // current word index
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true); // true = typing, false = deleting
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = words[index];
    const textLength = text.length;

    if (typing) {
      if (textLength < currentWord.length) {
        // Add next character
        timeoutRef.current = setTimeout(() => {
          setText(currentWord.slice(0, textLength + 1));
        }, speed);
      } else {
        // Word fully typed, pause then start deleting
        timeoutRef.current = setTimeout(() => {
          setTyping(false);
        }, pause);
      }
    } else {
      if (textLength > 0) {
        // Remove one character
        timeoutRef.current = setTimeout(() => {
          setText(currentWord.slice(0, textLength - 1));
        }, speed / 2);
      } else {
        // Word fully deleted, move to next word and start typing
        setTyping(true);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, typing, index, words, speed, pause]);

  return text;
}
