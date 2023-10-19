import { Link } from "react-router-dom";

const AddItem = () => {

    const handleProductAdd = e => {
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
        console.log(newItemData);
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
                            <h3 className="text-5xl drop-shadow-lg text-center text-yellow-500">Add New Item</h3>
                            <br />
                            <br />
                            <div className="container mx-auto">
                                <form onSubmit={handleProductAdd}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <input type="text" name="name" placeholder="Add Item Name" className="input bg-white input-bordered input-error w-full" />
                                        <select name="brand" className="select bg-white select-error w-full" defaultValue="">
                                            <option value="" disabled>Select Brand</option>
                                            <option value="Coca-Cola">Coca-Cola</option>
                                            <option value="McDonalds">McDonalds</option>
                                            <option value="Starbucks">Starbucks</option>
                                            <option value="PepsiCo">PepsiCo</option>
                                            <option value="Nestlé">Nestlé</option>
                                            <option value="Kelloggs">Kelloggs</option>
                                        </select>
                                        <input type="text" name="type" placeholder="Type (Drinks, Snacks, Sweets, etc)" className="input bg-white input-bordered input-error w-full" />
                                        <input type="text" name="price" placeholder="Item Price" className="input bg-white input-bordered input-error w-full" />
                                        <input type="text" name="rating" placeholder="Rating (In 5 star)" className="input bg-white input-bordered input-error w-full" />
                                        <input type="text" name="description" placeholder="Short description" className="input bg-white input-bordered input-error w-full" />
                                    </div>
                                    <input type="text" name="photo" placeholder="Enter photo URL" className="my-8 input bg-white input-bordered input-error w-full" />
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

export default AddItem;