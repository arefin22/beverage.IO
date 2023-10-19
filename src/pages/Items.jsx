/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";
import Item from "../components/Item";


const Items = () => {

    const allItems = useLoaderData()

    console.log(allItems);

    return (
        <div className="grid lg:grid-cols-3 mx-auto gap-6"> 
            {
                Array.isArray(allItems) && allItems?.map(item => <Item key={item._id} item ={item}></Item>)
            }
        </div>
    );
};

export default Items;