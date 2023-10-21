import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="grid max-h-96 grid-cols-2 bg-base-200">
            <div>
                <figure className=""><img src="https://i.ibb.co/JjrXBT2/sideimg2.jpg" className="" alt="" /></figure>
            </div>
            <div>
                <div className="hero h-96 bg-base-200">
                    <div className="text-center">
                        <div className="max-w-md">
                            <div className="lg:flex ">
                                <h1 className="text-5xl font-bold">Welcome to</h1>
                                <Link to={'/'} className="text-yellow-500 drop-shadow-lg btn btn-ghost normal-case text-xl"><span className="text-pink-600 font-bold text-5xl">B</span>everage.io</Link>
                            </div>
                            <p className="py-6">Discover exquisite flavors at our beverage haven. From premium coffees to refreshing teas, indulge in a sip of perfection. Join us for a delightful journey in every cup!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;