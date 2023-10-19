const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/8XCXrxm/22.jpg)' }}>
            <div className="hero-overlay bg-gradient-to-r from-slate-500 bg-opacity-30"></div>
            <div className="grid lg:grid-cols-3 grid-cols-1 ml-10 ">
                <div className="hero-content lg:text-left text-neutral-content ">
                    <div className="max-w-md ">
                        <h1 className="mb-5 lg:text-7xl text-3xl font-bold text-yellow-500 drop-shadow-lg normal-case">The, <br /> <span className="text-pink-600 font-bold lg:text-7xl">B</span>everage.io</h1>
                        <p className="mb-5">Your go-to hub for diverse and delightful beverages from global brands.</p>
                        <button className="btn btn-outline btn-neutral">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;