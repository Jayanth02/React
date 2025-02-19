import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";



const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

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

    return (
        <div className="body">
            <div className="filter">
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
                listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
            }
            </div>
        </div>
    )
};

export default Body;
