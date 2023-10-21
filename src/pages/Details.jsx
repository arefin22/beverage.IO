import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import StarRating from "../components/StarRating";


const Details = () => {

    const { id } = useParams()
    const [details, setDetails] = useState(null)
    // console.log(id);
    useEffect(() => {
        if (id) {
            fetch('https://beverage-server-site.vercel.app/items')
                .then(res => res.json())
                .then(data => {
                    const theData = data?.find(data => data._id === id)
                    setDetails(theData);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [id])

    const addToCart = (e) => {
        const { name, brand, type, rating, photo, price, description } = e
        const data = { name, brand, type, rating, photo, price, description }
        // console.log(e , data);
        // fetch('https://beverage-server-site.vercel.app/cart', {
        fetch('https://beverage-server-site.vercel.app/cart', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),

        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId ) {
                    toast('Successfully Added To Cart')
                    // if(details?.map(detailsData => detailsData._id !== data._id)){
                    //     toast('Added Successfully')
                    // }
                    // else{
                    //     toast('Already Added')
                    // }
                }
                // console.log(data)
            })
    }

    // console.log(details);
    return (
        <div className="lg:my-24">
            <div className="container mx-auto grid md:grid-cols-4 gap-10 justify-center items-center">
                <div className="col-span-1"></div>
                <div className="card grid lg:grid-cols-2 col-span-2 lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={details?.photo} alt="" /></figure>
                    <div className="card-body">
                        <h3 className=" card-title text-3xl text-blue-700">{details?.name}</h3>
                        <h3>({details?.brand})</h3>
                        <h3>Type : {details?.type}</h3>
                        <StarRating rating={details?.rating} />
                        <h3>Price : {details?.price}</h3>
                        <h3>{details?.description}</h3>
                        <hr />
                        <Link to={`/editItem/${details?._id}`} className="btn btn-outline btn-secondary">Update</Link>
                        <br />
                        <Link onClick={() => addToCart(details)} className="btn btn-outline btn-error">Add To Cart</Link>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    );
};

export default Details;