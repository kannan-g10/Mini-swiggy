import "./Card.css";
import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";

const Card = () => {
  const [restaurants, setRestaurants] = useState([])
  

  useEffect(()=>{
    const getRestaurants = async () => {
      // const data = await fetch("https://www.swiggy./dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")

      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
      console.log(json)
    }

    getRestaurants()
  }, [])

  

  if (!restaurants) return null

  return(
    <div className="restaurant-card" >
      {restaurants.map((restaurant) => {
        return <Restaurant {...restaurant.data} key={...restaurant.data.id} />;
      })}
    </div>
  );
};

export default Card;