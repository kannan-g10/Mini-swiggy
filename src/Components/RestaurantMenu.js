import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { IMG_ID } from "./Constants";
import "./RestaurantMenu.css";
import Category from "./Category/Category";
import ShimmerDetail from "./ShimmerDetail";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const MENU_API = restaurantMenu?.data?.cards[0]?.card?.card?.info;

  useEffect(() => {
    const menuCard = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`
      );
      const json = await data.json();
      setRestaurantMenu(json);
    };

    menuCard();
  }, []);

  return !restaurantMenu?.data?.cards[0]?.card?.card?.info?.name ? (
    <ShimmerDetail />
  ) : (
    <>
      <div className="restaurant-container">
        <section className="restaurant-description">
          <img
            className="restaurant-img"
            src={IMG_ID + MENU_API?.cloudinaryImageId}
            alt="Restaurant image"
          />
          <h1>{MENU_API?.name}</h1>
          <span className="restaurant-cuisines">
            {MENU_API?.cuisines.join(", ")}
          </span>
          <br />
          <span className="restaurant-cuisines">{MENU_API?.areaName},</span>
          <span className="restaurant-cuisines">
            {MENU_API?.sla?.lastMileTravel + " "}
            km
          </span>
        </section>
        <section className="restaurant-ratings">
          <div className="avg-rating">
            <AiFillStar />
            <span>{MENU_API?.avgRatingString}</span>
          </div>
          <hr className="rating-line" />
          <span className="total-ratings">{MENU_API?.totalRatingsString}</span>
        </section>
      </div>
      <div>
        <label className="delivery">
          <span className="delivery-time">
            <BiSolidTimeFive className="delivery-icon" />
            {MENU_API?.sla?.slaString}
          </span>
          <span className="delivery-offer">
            <HiOutlineCurrencyRupee className="delivery-icon" />
            {MENU_API?.costForTwoMessage}
          </span>
        </label>
      </div>
      <Category id={id} />
    </>
  );
};

export default RestaurantMenu;
