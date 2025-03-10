import { CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = resData?.info;

    return (
        <div className="restro-card">
            <img className="res-logo" src = {CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
};

export default RestaurantCard;
