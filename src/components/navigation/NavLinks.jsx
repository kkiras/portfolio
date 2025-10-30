import styles from "./NavLink.module.css";
import NavIcon from "./NavIcon";
import { useEffect, useMemo, useRef, useState } from "react";
import { useModeAnimation } from "react-theme-switch-animation";

export default function NavLinks() {
  const [active, setActive] = useState("home");
  const clickingRef = useRef(false);
  const { ref: themeBtnRef, toggleSwitchTheme, isDarkMode } = useModeAnimation();

  const links = useMemo(
    () => [
      { id: "home", name: "Home", href: "#section-home" },
      { id: "about", name: "About Me", href: "#section-about" },
      { id: "skill", name: "Skills", href: "#section-skills" },
      { id: "project", name: "Project", href: "#section-projects" },
      { id: "experience", name: "Experience", href: "#section-experience" },
      { id: "contact", name: "Contact", href: "#section-contact" },
      { id: "blog", name: "Blogs", href: "#section-blogs" },
    ],
    []
  );

  const sectionColors = {
    home: "var(--bg-main)",
    about: "var(--bg-sub)",
    skill: "var(--bg-main)",
    project: "var(--bg-sub)",
    experience: "var(--bg-main)",
    contact: "var(--bg-sub)",
    blog: "var(--bg-main)",
  };

  // No need to manually manage theme/localStorage here.
  // useModeAnimation handles adding/removing the 'dark' class on <html>
  // and persists `localStorage.theme`.

  useEffect(() => {
    const rootEl = document.getElementById("main-scroll");
    const items = links
      .map((l) => {
        const el = document.querySelector(l.href);
        return el ? { id: l.id, el } : null;
      })
      .filter(Boolean);

    if (!rootEl || items.length === 0) return;

    const centerOf = () => {
      const r = rootEl.getBoundingClientRect();
      return r.top + r.height / 2;
    };

    let ticking = false;
    const HYSTERESIS = 24; // px to avoid flicker at boundaries

    const onScroll = () => {
      if (clickingRef.current) return;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const cy = centerOf();
        let best = null;
        let activeDist = Infinity;

        for (const it of items) {
          const rect = it.el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const dist = Math.abs(elCenter - cy);
          if (!best || dist < best.dist) best = { id: it.id, dist };
          if (it.id === active) activeDist = dist;
        }

        if (best && best.id !== active && best.dist + HYSTERESIS < activeDist) {
          setActive(best.id);
          const link = links.find((l) => l.id === best.id);
          if (link) history.replaceState(null, "", link.href);
        }
      });
    };

    rootEl.addEventListener("scroll", onScroll, { passive: true });

    // initial sync
    onScroll();

    return () => rootEl.removeEventListener("scroll", onScroll);
  }, [links, active]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link.href);
    if (!target) return;
    clickingRef.current = true;
    setActive(link.id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => (clickingRef.current = false), 450);
    history.replaceState(null, "", link.href);
  };

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <a
          key={link.name}
          className={`${styles.linkNav} ${active === link.id ? styles.active : ""}`}
          href={link.href}
          onClick={(e) => handleNavClick(e, link)}
          style={{
            backgroundColor:
              active === link.id ? sectionColors[active] : "var(--primary-sub)",
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
            color: active === link.id ? "var(--primary-sub)" : "#fff",
          }}
          aria-current={active === link.id ? "page" : undefined}
        >
          <NavIcon icon={link.name} active={active === link.id} />
        </a>
      ))}

      <button
        ref={themeBtnRef}
        onClick={toggleSwitchTheme}
        aria-label="Toggle theme"
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
          margin: 0,
        }}
      >
        {isDarkMode ? (
          <MoonIcon size={28} />
        ) : (
          <LightIcon size={28} />
        )}
      </button>
    </nav>
  );
}

function LightIcon({ size, onClick }) {
  return (
    <div style={{ padding: "12px 12px 12px 6px" }} onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <g fill="#fff">
          <path d="M8 .25a.75.75 0 01.75.75v1.273a.75.75 0 01-1.5 0V1A.75.75 0 018 .25z" />
          <path
            fillRule="evenodd"
            d="M4 8a4 4 0 118 0 4 4 0 01-8 0zm4-2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
            clipRule="evenodd"
          />
          <path d="M8.75 13.727a.75.75 0 00-1.5 0V15a.75.75 0 001.5 0v-1.273zM2.519 2.518a.75.75 0 011.06 0l.904.904a.75.75 0 01-1.06 1.06l-.904-.903a.75.75 0 010-1.06zm10.059 8.999a.75.75 0 00-1.061 1.06l.904.904a.75.75 0 101.06-1.06l-.903-.904zM.25 8A.75.75 0 011 7.25h1.273a.75.75 0 010 1.5H1A.75.75 0 01.25 8zm13.477-.75a.75.75 0 000 1.5H15a.75.75 0 000-1.5h-1.273zm-9.244 4.267a.75.75 0 010 1.06l-.904.904a.75.75 0 01-1.06-1.06l.903-.904a.75.75 0 011.061 0zm8.998-7.937a.75.75 0 00-1.06-1.062l-.904.904a.75.75 0 101.06 1.06l.904-.903z" />
        </g>
      </svg>
    </div>
  );
}

function MoonIcon({ size, onClick }) {
  return (
    <div style={{ padding: "12px 12px 12px 6px" }} onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M8.09 1.382a.75.75 0 01-.05.814 4.121 4.121 0 005.764 5.764.75.75 0 011.193.672 7.014 7.014 0 11-7.63-7.629.75.75 0 01.723.379zm-2.06 1.46a5.513 5.513 0 107.128 7.128A5.621 5.621 0 016.03 2.843z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
