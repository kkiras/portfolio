import { animated } from "@react-spring/web";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "./Slider";

import styles from "./Modal.module.css";

const Modal = ({ style, open, closeModal, project }) =>
  createPortal(
    <AnimatePresence>
        {open && (
            <div className="modal-motion-wrapper">
                <motion.div 
                    className={styles.overlay} 
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
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.modalScroll}>
                            <h2 className="modal-title">{project.title}</h2>

                            <p className="modal-content">
                                {project.shortDescription}
                            </p>

                            <Slider items={project.detail.slideShow} />

                            <div className={styles.roleSection}>
                                <div>
                                    <div className={styles.roleTextBox}>
                                        <span>Team size</span>
                                        <p>4 members</p>
                                    </div>
                                </div>

                                <div 
                                    style={{
                                        width: '1px',
                                        height: '100%',
                                        background: '#3b352b50'
                                    }}
                                />

                                <div>
                                    <div className={styles.roleTextBox}>
                                        <span>Role</span>
                                        <p>Project manager</p>
                                    </div>
                                </div>
                            </div>

                            <div className="goal-section">
                                <h3>Project Goals</h3>
                                <p className="modal-content">
                                    {project.detail.goal}
                                </p>
                            </div>
                            
                            <div className={styles.buttonSection}>
                                <button className={styles.githubButton} onClick={closeModal}>
                                    Github
                                </button>

                                <button className={styles.closeButton} onClick={closeModal}>
                                    Close
                                </button>
                            </div>    
                        </div>                      
                    </animated.div>
                </motion.div>
            </div>
            
        )}
        
    </AnimatePresence>
    ,
    document.body
  );

export default Modal;
