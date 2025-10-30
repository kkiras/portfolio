import { useEffect, useMemo, useRef, useState } from "react";
import blogs from "../../datas/blogs"

import Card from "./Card"
import NewBlogModal from "./modal/NewBlogModal";
import { useTransition } from "@react-spring/web";
import BlogDetailModal from "./detail/DetailModal";
import BlogFilterMenu from "./sidebar/BlogFilterMenu";
import styles from "./Blog.module.css"

export default function Blog() {
    const sectionRef = useRef();
    const [showButton, setShowButton] = useState(false);
    const [newBlogModalVisible, setNewBlogModalVisible] = useState(false);
    const [blogDetailModalVisible, setBlogDetailModalVisible] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const [initialBlogs, setInitialBlogs] = useState(blogs);
    const [selectedTopic, setSelectedTopic] = useState(null);

    // Derive topics from current blogs with counts
    const topics = useMemo(() => {
        const counts = {};
        initialBlogs.forEach(b => {
            (b.tags || []).forEach(tag => {
                const key = String(tag);
                counts[key] = (counts[key] || 0) + 1;
            });
        });
        return Object.entries(counts).map(([name, count]) => ({ name, count }));
    }, [initialBlogs]);
    
    const visibleBlogs = useMemo(() => {
        if (!selectedTopic) return initialBlogs;
        const sel = String(selectedTopic).toLowerCase();
        return initialBlogs.filter(b => (b.tags || []).some(t => String(t).toLowerCase() === sel));
    }, [initialBlogs, selectedTopic]);

    const handleAddBlog = ({ title, content, tag }) => {
        const newBlog = {
            id: `${title.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
            title,
            content,
            date: new Date().toISOString().split("T")[0],
            tags: [tag], // nếu chỉ chọn 1 tag
        };

        setInitialBlogs(prev => [newBlog, ...prev]);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setShowButton(entry.isIntersecting);
        },
        {
            root: null,
            threshold: 0.1,
        }
        );

        if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
    }, []);

    const transitions = useTransition(newBlogModalVisible, {
        from: { opacity: 0, transform: "translateY(-40px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(-40px)" },
        config: { duration: 300 } 
    });

    const blogDetailModalTransitions = useTransition(blogDetailModalVisible ? selectedBlog : null, {
        from: { opacity: 0, transform: "translateY(-40px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(-40px)" },
        config: { duration: 300 } 
    });

    return (
        <div id="section-blogs" ref={sectionRef} className={styles.container} >
            <h3>Blog</h3>

            <div>
                <div id="blog-content" className={styles.content}>
                    {visibleBlogs.map((blog) => (
                        <Card 
                            key={blog.id}
                            blog={blog} 
                            onClick={() => {
                                setSelectedBlog(blog);
                                setBlogDetailModalVisible(true);
                            }} 
                        />
                        
                    ))}

                    {blogDetailModalTransitions((style, item) => (
                        item ? (
                            <BlogDetailModal
                                style={style}
                                open={blogDetailModalVisible}
                                blog={selectedBlog}
                                closeModal={() => {
                                    setBlogDetailModalVisible(false);
                                    setSelectedBlog(null);
                                }}
                            />
                        ) : null
                    ))}
                </div>


            </div>

            {showButton && (
                <>
                    <button id="blog-button" onClick={() => setNewBlogModalVisible(true)} className={styles.button} >New blog</button>
                    {transitions((style, item) => (
                        item ? (
                            <NewBlogModal
                                style={style}
                                open={newBlogModalVisible}
                                closeModal={() => setNewBlogModalVisible(false)}
                                onSubmit={handleAddBlog}
                            />
                        ) : null
                    ))}
                </>
            )}

            <BlogFilterMenu 
                topics={topics} 
                selected={selectedTopic}
                totalCount={initialBlogs.length}
                onSelect={(topic) => setSelectedTopic(topic)}
            />
        </div>
    )
}
