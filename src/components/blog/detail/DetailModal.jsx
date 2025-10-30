import { animated } from "@react-spring/web";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./DetailModal.module.css";

const DetailModal = ({ style, open, closeModal, blog }) => {
    return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.detailOverlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <animated.div
            style={style}
            className={styles.detailModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closeModal} aria-label="Close">×</button>

            <h2>{blog.title}</h2>

            <div className={styles.detailDate}>
              {/* <span className={styles.icon}>🗓️</span> nếu cần icon */}
              <span>{blog.date}</span>
            </div>

            <p className={styles.detailContent}>{blog.content}</p>

            <div className={styles.detailTags}>
              {/* <span className={styles.icon}>🏷️</span> nếu cần icon */}
              <div className={styles.tags}>
                {blog.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </animated.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
  

export default DetailModal;
