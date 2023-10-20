import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Brands from "./Brands";
// import Items from "./Items";

const Home = () => {

    return (
        <div>
            <Banner />
            <Brands />
            <Contact />
            <About />
        </div>
    );
};

export default Home;