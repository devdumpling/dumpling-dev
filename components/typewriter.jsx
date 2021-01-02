import { useState, useEffect } from "react";
import cn from "classnames";

export default function Typewriter({ srcString, styles, setStillTyping, cursor = true }) {
  const [{ content, carriage }, setContent] = useState({
    content: "",
    carriage: 0,
  });

  useEffect(() => {
    if (carriage == srcString.length) {
      if (setStillTyping) setStillTyping(false);
      return;
    }
    const delay = setTimeout(() => {
      setContent({
        content: content + srcString[carriage],
        carriage: carriage + 1,
      });
      clearTimeout(delay);
    }, 0 | (Math.random() * 100 + 50));
  }, [content]);

  useEffect(() => {
    setContent({
      content: "",
      carriage: 0,
    });
  }, [srcString]);

  return (
    <span className={cn(styles)}>
      {content}
      {cursor && <span className="cursor">|</span>}
    </span>
  );
}
