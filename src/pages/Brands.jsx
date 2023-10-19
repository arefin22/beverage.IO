/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Brand from "../components/Brand";

const Brands = () => {

    const { logos } = useLoaderData()
    
    

    return (
        <div className="container mx-auto py-8">
            <h3 className="text-5xl drop-shadow-lg text-center py-10 text-yellow-500">We Serve</h3>
            <div className="grid lg:grid-cols-6 grid-cols-2 gap-3">
                {
                    Array.isArray(logos) && logos?.map(brand => (
                        <Brand key={brand.id} brand={brand} />
                    ))
                }
            </div>
        </div>
    );
};

export default Brands;