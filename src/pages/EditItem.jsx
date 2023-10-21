import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditItem = () => {

    const { id } = useParams()
    // console.log("Fetched ID from Item", id);
    const [idData, setIdData] = useState({
        _id: '',
        name: '',
        brand: '',
        type: '',
        price: '',
        rating: '',
        description: '',
        photo: '',
    });
    // const [brands, setBrands] = useState([])

    // console.log("This id is from state", idData._id);

    useEffect(() => {
        if (id) {
            fetch('http://localhost:5000/items')
                .then(res => res.json())
                .then(data => {
                    const theData = data?.find(data => data._id === id)
                    setIdData(theData);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        // fetch('http://localhost:5000/brands')  // Update the URL accordingly
        //     .then((res) => res.json())
        //     .then((brands) => {
        //         // Assuming your brands data looks like [{ name: 'Apple' }, { name: 'Samsung' }, ...]
        //         setBrands(brands); // Update your state for brands
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }, [id])

    const handleProductEdit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const newItemData = { name, brand, type, price, rating, description, photo }

        // console.log(newItemData);

        // console.log("In Handle data", idData._id);

        fetch(`http://localhost:5000/items/${idData._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItemData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast('Edited Successfully')
            });

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full flex-col">
                <div className="card flex-shrink-0 p-5 py-20 w-full border max-w-5xl shadow-2xl bg-base-100">
                    <div>
                        <div className="text-left pl-10">
                            <Link className="text-left" to={'/'}>
                                <button className="btn btn-outline"> Back To Home</button>
                            </Link>
                        </div>

                        <div className="bg-base-100 max-w-7xl mx-auto p-5">
                            <h3 className="text-5xl drop-shadow-lg text-center text-yellow-500">Edit Item</h3>
                            <br />
                            <br />
                            <div className="container mx-auto">
                                <form onSubmit={handleProductEdit}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <input type="text" defaultValue={idData?.name} name="name" placeholder="Add Item Name" className="input bg-white input-bordered input-error w-full" />
                                        <select name="brand" className="select bg-white select-error w-full" defaultValue={idData?.brand}>
                                            <option value="" disabled>Select Brand</option>
                                            <option value="Coca-Cola">Coca-Cola</option>
                                            <option value="McDonalds">McDonalds</option>
                                            <option value="Starbucks">Starbucks</option>
                                            <option value="PepsiCo">PepsiCo</option>
                                            <option value="Nestlé">Nestlé</option>
                                            <option value="Kelloggs">Kelloggs</option>
                                        </select>

                                        {/* <select name="brand" className="select select-error w-full border" value={idData?.brand}>
                                            <option value="" disabled>Select Brand</option>
                                            {brands.map((brand) => (
                                                <option key={brand._id} value={brand.name}>
                                                    {brand.name}
                                                </option>
                                            ))}
                                        </select> */}
                                        <input type="text" name="type" placeholder="Type (Drinks, Snacks, Sweets, etc)" defaultValue={idData?.type} className="input bg-white input-bordered input-error w-full" />
                                        <input type="text" name="price" placeholder="Item Price" defaultValue={idData?.price} className="input bg-white input-bordered input-error w-full" />
                                        <input type="text" name="rating" placeholder="Rating (In 5 star)" defaultValue={idData?.rating} className="input bg-white input-bordered input-error w-full" />
                                        <input type="text" name="description" placeholder="Short description" defaultValue={idData?.description} className="input bg-white input-bordered input-error w-full" />
                                    </div>
                                    <input type="text" name="photo" placeholder="Enter photo URL" defaultValue={idData?.photo} className="my-8 input bg-white input-bordered input-error w-full" />
                                    <input type="submit" value="Add New Item" className="btn btn-outline btn-success w-full" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditItem;