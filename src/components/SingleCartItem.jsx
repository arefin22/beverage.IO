/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleCartItem = ({ cartItem }) => {

    const {_id, brand, name, price, type, photo } = cartItem



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
                    <button className="btn btn-outline  btn-xs">X</button>
                </th>
            </tr>
        </>


    );
};

export default SingleCartItem;