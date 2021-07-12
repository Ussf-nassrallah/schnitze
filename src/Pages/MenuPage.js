import React, { useState } from "react";
import menu from "../data/menu";
import Menu from "../Components/Menu";
import Categories from "../Components/Categories";
import "./Menupage.css";

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newMenuItems = menu.filter(menuItem => menuItem.category === category);
    setMenuItems(newMenuItems)
  }

  return(
    <section className="menu my-5">
      <div className="container">
        <div className="menu-items">
          <div className="text-center mb-2">
            <h4>menu</h4>
            <h2>our menu</h2>
          </div>
        </div>

        <div className="categories mb-5">
          <div className="text-center">
            <Categories filterItems={filterItems} categories={categories} />
          </div>
        </div>

        <div className="grid">
          {
            menuItems.map(menuItem => <Menu
                key={menuItem.id}
                img={menuItem.img}
                title={menuItem.title}
                // category={menuItem.category}
                price={menuItem.price}
                desc={menuItem.desc}
            />)
          }
        </div>
      </div>
    </section>
  );
}

export default MenuPage;