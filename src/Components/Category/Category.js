import { useEffect, useState } from "react";
import "./Category.css";
import { BsCurrencyRupee } from "react-icons/bs";
import ShimmerDetail from "../ShimmerDetail";

const Category = ({ id }) => {
  const API_MENU_ITEM = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`;

  const [menu, setMenu] = useState({});

  const menuCard =
    menu?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  useEffect(() => {
    const getMenu = async () => {
      const item = await fetch(API_MENU_ITEM);
      const json = await item.json();
      setMenu(json);
    };
    getMenu();
  }, []);

  return !menuCard ? (
    <ShimmerDetail />
  ) : (
    <>
      <div className="menu-item">
        <h3>
          {menuCard?.title} ({menuCard?.itemCards.length})
        </h3>
      </div>
      {menuCard?.itemCards.map((item) => {
        return (
          <div className="menu-list-items">
            <div className="menu-description">
              <h4>{item.card.info.name}</h4>
              <br />
              <p>
                <BsCurrencyRupee />
                {item.card.info.price / 100}
              </p>
            </div>
            <div className="menu-btn">
              <button>Add</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Category;
