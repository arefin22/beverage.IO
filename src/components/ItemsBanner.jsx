
const ItemsBanner = () => {


    //     https://i.ibb.co/6R5BjbD/slide-3.jpg
    // https://i.ibb.co/3B71LG1/pepsi.webp
    // https://i.ibb.co/ynXdjzS/slide-1.jpg


    return (
        <div className="max-h-96 pb-40">
            <div className="carousel max-h-96  w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <figure className="flex items-center w-full"><img src="https://i.ibb.co/6R5BjbD/slide-3.jpg" className="max-h-screen w-full" /></figure>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <figure className="flex items-center w-full"><img src="https://i.ibb.co/3B71LG1/pepsi.webp" className="max-h-screen w-full" /></figure>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <figure className="flex items-center w-full"><img src="https://i.ibb.co/ynXdjzS/slide-1.jpg" className="max-h-screen w-full" /></figure>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemsBanner;