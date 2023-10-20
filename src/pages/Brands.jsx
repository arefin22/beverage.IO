/* eslint-disable react/prop-types */
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Brand from "../components/Brand";
// import Items from "./Items";


const Brands = () => {
    const navigate = useNavigate()

    const allBrands = useLoaderData()
    // const [brandData, setBrandData] = useState(allBrands)

    // const handleFilter = filter => {
    //     if(filter === "")
    // }

    // const [brandFilterData, setBrandFilterData] = useState(null)
    // console.log("Use State",brandFilterData);


    const handleBrandClick = (brandName) => {
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const filterData = data.filter( file =>  file.brand === brandName )
            console.log(filterData);
            // setBrandFilterData(filterData)
            navigate(`/items`, { filterData })
        })
    }



    return (
        <div className="container mx-auto py-8">
            <h3 className="text-5xl drop-shadow-lg text-center py-10  text-yellow-500">We Serve</h3>
            <div className="grid lg:grid-cols-6 grid-cols-2 gap-3">
                {
                    Array.isArray(allBrands) && allBrands?.map(brand => (
                        <div key={brand._id} onClick={() => handleBrandClick(brand.brandName)}>
                            <Link to={`/items`}><Brand brand={brand} /></Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Brands;