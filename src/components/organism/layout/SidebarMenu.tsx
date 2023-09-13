import "../../../style/sidebar.css";

const nav = ["Home", "Setting", "Mail", "Support"];
const navItems = (): JSX.Element[] => {
  return nav.map((item) => (
    <nav className="sidebar-menu">
      <button className="sidebar-button" key={item}>
        <span>{item}</span>
        <p>{item}</p>
      </button>
    </nav>
  ));
};
//import先でNavigationからSideBarMenuに名称変更
export const Navigation = (): JSX.Element => {
  return <div>{navItems()}</div>;
};

//  const SideBarMenu = () => {
//   return <nav>{Navigation()}</nav>;
// };
