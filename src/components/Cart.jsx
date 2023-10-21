// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCartItem from "./SingleCartItem";
import { useState } from "react";

const Cart = () => {

    const allCartItems = useLoaderData()
    console.log("All Cart Items", allCartItems);

    const [cartItems , setCartItems] = useState(allCartItems)


    return (
        <table className="table container my-52 mx-auto">
            {/* head */}
            <thead>
                <tr>
                    <th>Beverage Name</th>
                    <th>Brand Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    allCartItems?.map(cartItem => (

                        <SingleCartItem key={cartItem._id} cartItems={cartItems} setCartItems={setCartItems} cartItem={cartItem}></SingleCartItem>

                    ))
                }
            </tbody>
            {/* foot */}
            <tfoot>
                <tr>
                    <th>Beverage Name</th>
                    <th>Brand Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </tfoot>

        </table>
    );
};

export default Cart;