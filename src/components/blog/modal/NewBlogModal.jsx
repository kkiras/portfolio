import { animated } from "@react-spring/web";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./NewBlogModal.css";
import { useState } from "react";

const NewBlogModal = ({ style, open, closeModal, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { title, content, tag };
        onSubmit(formData);
        closeModal();
    };

    return createPortal(
    <AnimatePresence>
        {open && (
            <div className="blog-modal-motion-wrapper">
                <motion.div 
                    className="blog-modal-overlay" 
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
                        className="blog-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        

                        <form className="blog-modal-content" onSubmit={handleSubmit}>
                            <div className="blog-modal-header">
                            <h2>Create New Blog Post</h2>
                            <button type="button" className="blog-close-btn" onClick={closeModal}>×</button>
                            </div>

                            <div className="blog-form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                placeholder="Enter blog title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                            </div>

                            <div className="blog-form-group">
                            <label>Content</label>
                            <textarea
                                placeholder="Write your blog content..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows={6}
                                required
                            />
                            </div>

                            <div className="blog-form-group">
                            <label>Tags</label>
                            <div className="blog-radio-group">
                                {['frontend', 'backend', 'ai'].map((t) => (
                                <label key={t} className="radio-option">
                                    <input
                                    type="radio"
                                    name="tag"
                                    value={t}
                                    checked={tag === t}
                                    onChange={() => setTag(t)}
                                    required
                                    />
                                    {t}
                                </label>
                                ))}
                            </div>
                            </div>

                            <div className="blog-modal-footer">
                            <button type="button" className="blog-cancel-btn" onClick={closeModal}>Cancel</button>
                            <button type="submit" className="blog-publish-btn">Publish Post</button>
                            </div>
                        </form>
                    </animated.div>
                </motion.div>
            </div>
            
        )}
        
    </AnimatePresence>
    ,
    document.body
  );
}
  

export default NewBlogModal;
