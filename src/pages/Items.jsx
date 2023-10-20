/* eslint-disable react/prop-types */

// import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import ItemsBanner from "../components/ItemsBanner";
import { useEffect, useState } from "react";


const Items = () => {

    const { id } = useParams()



    const [brandData, setBrandData] = useState(null)
    const [brandItems, setBrandItems] = useState([])

    // console.log('Use State', typeof brandData);
    // console.log('Use State 2nd',  brandItems);

    useEffect(() => {
        if (id) {
            console.log("from use Effect",id);
            fetch('https://beverage-server-site.vercel.app/brands')
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    data?.map(theData => {
                        if (theData?._id === id) {
                            // console.log('brand Name', theData.brandName);
                            setBrandData(theData.brandName)
                        }
                    })
                })
        }
    }, [id])

    useEffect(() => {
        if(brandData){
            fetch('https://beverage-server-site.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                // console.log('data from second use effect',data.brand);
                // data.map(theData => {
                //     if(theData.brand === brandData){
                //         setBrandItems(data);
                //     }
                // })
                const filteredData = data.filter(item => item.brand === brandData);
                // console.log(filteredData);
                setBrandItems(filteredData);
            })
        }
    },[brandData, brandItems])






    // const allItems = useLoaderData()
    // const location = useLocation();
    // const filterData = location.state?.filterData || [];

    // console.log("Filter Data in Items", filterData);

    // console.log(allItems);

    return (
        <div>

            <div>
                <ItemsBanner />
            </div>

            <div className="grid lg:grid-cols-3 container mx-auto  gap-6">
                {
                    Array.isArray(brandItems) && brandItems?.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;