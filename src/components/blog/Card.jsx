import styles from "./Blog.module.css"

export default function Card({ blog, onClick }) {
    const { id, title, date, tags, content } = blog

    return (
        <div className={styles.card} onClick={onClick}>
            <h2>{title}</h2>
            <p>{date}</p>
            <p className={styles.contentMultiEllipsis}>{content}</p>

            <div className={styles.badgeContainer}>
                {tags.map((tag)=> (
                    <div key={tag} className={styles.badge} >
                        <span>{tag}</span>
                    </div>
                ))}
            </div>
            
        </div>
    )
}