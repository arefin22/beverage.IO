/* eslint-disable react/prop-types */

// import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import Item from "../components/Item";
import ItemsBanner from "../components/ItemsBanner";


const Items = () => {

    // const allItems = useLoaderData()
    const location = useLocation();
    const filterData = location.state?.filterData || [];

    console.log("Filter Data in Items",filterData);

    // console.log(allItems);

    return (
        <div>

            <div>
                <ItemsBanner />
            </div>

            <div className="grid lg:grid-cols-3 container mx-auto  gap-6">
                {
                    // Array.isArray(allItems) && allItems?.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;