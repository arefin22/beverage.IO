/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SingleCartItem = ({ cartItem, setCartItems, cartItems }) => {

    const { _id, brand, name, price, type, photo } = cartItem

    // console.log("Updated Cart Items ", cartItems);

    const handleDeleteFromCart = _id => {
        fetch(`https://beverage-server-site.vercel.app/cart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                if (data.deletedCount > 0) {
                    const remainingItems = cartItems?.filter(item => item._id !== _id);
                    toast('Item Deleted - if Not Updated Please Refresh')
                    // console.log('Cart Items', remainingItems);    
                    setCartItems(remainingItems);
                }
            })

    }



    return (

        <>
            <tr></tr>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt={name} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {brand}
                    <br />
                    <span className="badge badge-ghost badge-sm">{type}</span>
                </td>
                <td>{price}</td>
                <th>
                    <Link to={`/details/${_id}`} className="btn btn-outline mr-6 btn-xs">Details</Link>
                    <button onClick={() => handleDeleteFromCart(_id)} className="btn btn-outline btn-xs">X</button>
                </th>
            </tr>
        </>


    );
};

export default SingleCartItem;