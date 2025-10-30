import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./Experience.module.css";

export function IconWithLabel({ label, value, onClick, active = false, children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.iconWrap}
      data-active={active}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick?.(value)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.(value)}
      aria-pressed={active}
    >
      <div className={styles.iconBorder}>
        {children}
      </div>

      <AnimatePresence>
        {hover && (
          <motion.div
            className={styles.iconLabel}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
