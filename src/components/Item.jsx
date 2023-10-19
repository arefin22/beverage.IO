/* eslint-disable react/prop-types */

import StarRating from "./StarRating";

const Item = ({ item }) => {


    return (
        <div className="card w-96 glass">
            <figure><img src={item.photo} alt="car!" /></figure>
            <div className="card-body">
                <div>
                    <div className="badge badge-outline">{item.brand}</div>
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.type}</p>
                </div>
                <div>
                    <StarRating rating={item.rating} />
                    {/* <p><span className="font-medium">Rating</span> : {item.rating}</p> */}
                    <p><span className="font-medium">Price</span> : ${item.price}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default Item;