
const ItemsBanner = () => {
    return (
        <div className=" pb-40">
            <div className="carousel max-h-96  w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <figure className="flex items-center"><img src="https://i.ibb.co/fQbfdKb/Coca-Cola.jpg" className="w-full" /></figure>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <figure className="flex items-center"><img src="https://i.ibb.co/NxX5WgJ/Starbucks.jpg" className="w-full" /></figure>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <figure className="flex items-center"><img src="https://i.ibb.co/TMSr7Ph/cafe-Img.jpg" className="w-full" /></figure>
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