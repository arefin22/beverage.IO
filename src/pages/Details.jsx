import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const Details = () => {

    const { id } = useParams()
    const [details, setDetails] = useState(null)
    console.log(id);
    useEffect(() => {
        if (id) {
            fetch('http://localhost:5000/items')
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
        console.log(e);
        fetch('http://localhost:5000/cart', {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(e),

    })
        .then(res => res.json())
        .then(data => {
            if (data?._id) {
                if(details?.map(detailsData => detailsData._id !== data._id)){
                    toast('Added Successfully')
                }
                else{
                    toast('Already Added')
                }
            }
            console.log(data)
        })
    }

    // console.log(details);
    return (
        <div>
            <div className="container mx-auto grid md:grid-cols-2 gap-10 justify-center items-center">
                <div className="container mx-auto border-l-2 ">
                    <figure><img src={details?.photo} alt="" /></figure>
                </div>
                <div className="container mx-auto ">
                    <h3 className="text-3xl text-blue-700">{details?.name}</h3>
                    <h3>{details?.brand}</h3>
                    <h3>{details?.type}</h3>
                    <h3>{details?.rating}</h3>
                    <h3>{details?.price}</h3>
                    <h3>{details?.description}</h3>
                    <hr />
                    <Link to={`/editItem/${details?._id}`} className="btn btn-outline btn-secondary">Update</Link>
                    <br/>
                    <Link onClick={()=>addToCart(details)} className="btn btn-outline btn-error">Add To Cart</Link>

                </div>
            </div>
        </div>
    );
};

export default Details;