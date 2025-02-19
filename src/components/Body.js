import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";



const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);


    const [searchText, setSearchText] = useState("");

    let listOfRestaurants2 = [
        {
        "info":{
                "id": "23759",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/f860d951-8778-4629-ba05-d72db2e618e8_23759.jpg",
                "costForTwo": "₹400 for two",
                "cuisines": [
                  "Burgers",
                  "Beverages",
                  "Cafe",
                  "Desserts"
                ],
                "avgRating": 4.4,
                "sla": {
                  "deliveryTime": 34,
                },
            }
        },
        {
            "info":{
                    "id": "23760",
                    "name": "KFC",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/f860d951-8778-4629-ba05-d72db2e618e8_23759.jpg",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                      "Burgers",
                      "Beverages",
                      "Cafe",
                      "Desserts"
                    ],
                    "avgRating": 3.8,
                    "sla": {
                      "deliveryTime": 34,
                    },
                }
        },
    ];

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async ()=> {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json);
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfRestaurants.length === 0 ? <Shimmer/>:(
        <div className="body">
            
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange= {(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=> {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setlistOfRestaurants(filteredList);
                    }}>
                    Top rated restaurants
                </button>
            </div>
            <div className="Restraurant-container">
            {
                filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
            }
            </div>
        </div>
    )
};

export default Body;
