import { useLoaderData } from "react-router-dom";

const Cart = () => {

    const allCartItems = useLoaderData()
    console.log(allCartItems);

    

    return (
        <div>
            
        </div>
    );
};

export default Cart;