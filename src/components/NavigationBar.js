import { useState } from "react";
import Header from "./UI/Header";
import { NavLink } from "react-router-dom";
import "../global.scss";
export default function NavigationBar(props) {
  const [navItems, setNavItems] = useState([
    { name: "Coursemates", url: "/" },
    { name: "Favorites", url: "/favourites" },
    { name: "Groups", url: "/groups" },
  ]);
  return (
    <Header>
      <div className="navigation-bar">
        {navItems.map((item) => {
          return (
            <div className="nav-item">
              <NavLink to={item.url}>{item.name}</NavLink>
            </div>
          );
        })}
      </div>

      {props.children}
    </Header>
  );
}
