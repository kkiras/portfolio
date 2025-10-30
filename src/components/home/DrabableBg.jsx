"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

import BackgroundFloating from "./BackgroundFloating";
import cherry from "../../assets/floating-cherry.svg";
import bug from "../../assets/floating-bug.svg";
import leaf from "../../assets/floating-leaf.svg"

export default function DragableBg() {
  const constraintsRef = useRef(null);

  // Determine item count by viewport width
  function getItemCount(w) {
    if (w >= 1024) return 16;      // large screens
    if (w >= 640) return 12;       // medium screens
    return 8;                      // small screens
  }

  const [itemCount, setItemCount] = useState(() =>
    typeof window !== "undefined" ? getItemCount(window.innerWidth) : 16
  );

  useEffect(() => {
    function onResize() {
      const next = getItemCount(window.innerWidth);
      setItemCount((prev) => (prev !== next ? next : prev));
    }
    window.addEventListener("resize", onResize);
    // Ensure correct count on mount
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const icons = {
    cherry,
    bug,
    leaf
  };

  function randNonZero(min, max) {
    let r = 0;
    while (r === 0) {
      r = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return r;
  }

  const items = useMemo(() => {
    let bugCount = 0;
    return Array.from({ length: itemCount }, (_, i) => {
      let bx = randNonZero(-20, 20);
      let by = randNonZero(-20, 20);

      // // chọn icon, giới hạn bug max = 2
      let bg;
      // if (bugCount < 2 && Math.random() < 0.3) {
      //   bg = icons.bug;
      //   bugCount++;
      // } else {
      //   bg = Math.random() < 0.5 ? icons.cherry : icons.leaf;
      // }

      bg = Math.random() < 0.5 ? icons.cherry : icons.leaf;

      return {
        id: `${i}-${String.fromCharCode(65 + (i % 26))}`,
        color: "#ff0088",
        size: 60,
        init: {
          x: randNonZero(0, 1500),
          y: randNonZero(0, 650),
        },
        base: { x: bx, y: by },
        bg,
      };
    });
  }, [itemCount]);

  return (
    <motion.div ref={constraintsRef} className="floating-container">
      {items.map((item) => (
        <BackgroundFloating
          key={item.id}
          constraintsRef={constraintsRef}
          init={item.init}
          size={item.size}
          color={item.color}
          baseInit={item.base}
          bg={item.bg}
        />
      ))}
    </motion.div>
  );
}

