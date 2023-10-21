/* eslint-disable react/prop-types */
import { useLoaderData, useNavigate } from "react-router-dom";
import Brand from "../components/Brand";
// import Items from "./Items";


const Brands = () => {
    const navigate = useNavigate()

    const allBrands = useLoaderData()
    
    const handleBrandClick = (id) => {
            navigate(`/items/${id}`)
    }



    return (
        <div className="container mx-auto px-4 py-16">
            <h3 className="text-5xl drop-shadow-lg text-center py-10  text-yellow-500">We Serve</h3>
            <div className="grid lg:grid-cols-6 grid-cols-2 gap-3">
                {
                    Array.isArray(allBrands) && allBrands?.map(brand => (
                        <div key={brand._id} onClick={() => handleBrandClick(brand?._id)}>
                            {/* <Link to={`/items/${brand._id}`}> */}
                                <Brand brand={brand} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Brands;