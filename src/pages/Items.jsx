/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";


const Items = () => {

    const {items} = useLoaderData()

    console.log(items);

    return (
        <div>
            {
                Array.isArray(items) && items.map(item => (
                    <div key={item.id}>
                        <h2>{item.brand_name}</h2>
                        <h2>{item.name}</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default Items;