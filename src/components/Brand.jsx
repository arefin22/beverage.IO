/* eslint-disable react/prop-types */

const Brand = ({ brand }) => {

    const { brandName, imageURL } = brand

    return (

        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="mx-auto text-center">
                    <img className="max-h-14" src={imageURL} alt="" />
                    <p>{brandName}</p>
                </div>
            </div>
        </div>
    );
};

export default Brand;