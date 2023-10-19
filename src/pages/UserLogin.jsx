import { Link } from "react-router-dom";

const UserLogin = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const values = {email, password}
        console.log(values);
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-3/4 flex-col">
                <div className="card flex-shrink-0 p-5 w-full py-20 max-w-lg shadow-2xl bg-base-100">
                    <h2 className="text-center font-extrabold text-yellow-500 drop-shadow-lg text-3xl">Login Now</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <input type="email" name="email" placeholder="Your Email" className="input bg-white input-bordered input-error w-full" />
                        <input type="password" name="password" placeholder="Your Password" className="input bg-white input-bordered input-error w-full" />
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center">Are You New Here? <Link to={'/register'} className="text-sky-700 font-bold">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;