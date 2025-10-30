import { useState } from "react";
import "./Sidebar.css";

export default function BlogFilterMenu({ topics, selected, onSelect, totalCount }) {
    const [isOpen, setIsOpen] = useState(false);

    const allCount = totalCount ?? topics.reduce((acc, t) => acc + t.count, 0);

    return (
        <div className="sidebar-container">
            <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "≡" : "☰"}
            </button>

            <div className={`sidebar-panel ${isOpen ? "open" : ""}`}>
                <h4>Filter by Topic</h4>
                <ul>
                    <li>
                        <button
                            className={selected ? undefined : "active"}
                            onClick={() => onSelect && onSelect(null)}
                        >
                            All Posts ({allCount})
                        </button>
                    </li>
                    {topics.map((t) => (
                        <li key={t.name}>
                            <button
                                className={selected === t.name ? "active" : undefined}
                                onClick={() => onSelect && onSelect(t.name)}
                            >
                                {t.name} ({t.count})
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

