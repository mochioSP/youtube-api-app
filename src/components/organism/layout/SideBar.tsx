import { useState } from "react";

import "../../../style/sidebar.css";
import { SidebarMenu } from "./SidebarMenu";

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
            <span className="material-symbols-outlined">
              {isOpen ? "Close" : "Menu"}
            </span>
          </button>
        </header>
        <SidebarMenu />
      </div>
    </aside>
  );
};
