import { useNavigate } from "react-router-dom";
import "../../../style/sidebar.css";

const nav = ["Home", "Settings", "Contacts"];
export const SidebarMenu = (): JSX.Element[] => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/settings");
  };

  return nav.map((item) => (
    <nav className="sidebar-menu" key={item}>
      <button className="sidebar-button" onClick={onClick}>
        <span className="material-symbols-outlined">{item}</span>
        <p>{item}</p>
      </button>
    </nav>
  ));
};
//import先でNavigationからSideBarMenuに名称変更
export const Navigation = (): JSX.Element => {
  return <div>{SidebarMenu()}</div>;
};

//  const SideBarMenu = () => {
//   return <nav>{Navigation()}</nav>;
// };
