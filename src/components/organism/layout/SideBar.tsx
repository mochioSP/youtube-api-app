import { FC, useState } from "react";

import "../../../style/sidebar.css";

const navItems = ["home", "setting", "mail", "support"];

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{isOpen ? "close" : "open"}</span>
          </button>
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item) => (
            <button className="sidebar-button" key={item}>
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};
