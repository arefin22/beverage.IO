import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen grid grid-cols-2">
            <div className=" bg-white flex justify-center items-center">
                <div className="text-center">
                    <h3 className="text-3xl text-black font-bold">Page Not Found</h3>
                    <br />
                    <Link to='/' className="btn btn-outline  btn-info" > Back To Home </Link>
                </div>
            </div>
            <div className="flex bg-slate-800 justify-center items-center">
                <img src={'https://i.ibb.co/FsVR5vB/R.png'} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;