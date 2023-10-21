import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const UserRegister = () => {


    const { registerUser, signInUsingPopup } = useContext(AuthContext);

    const isStrongPassword = (password) => {
        // const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\\[\]:;<>,.?~\\/-]).{6,}$/;
        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

        return strongPassword.test(password);
      };

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const values = { name, email, password }
        console.log(values);
        

        if (!isStrongPassword(password)) {
            toast('Password must be at least 6 characters long and contain at least one uppercase letter, one special character, and one number');
            return;
        }

        registerUser(email, password)
            .then(res => toast('Congratulations! For Being A Member', res))
            .catch(err => toast('Try Again Please', err))


            fetch('https://beverage-server-site.vercel.app/users', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(values),
    
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        form.reset();
                    }
                    console.log(data)
                })    
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-3/4 flex-col">
                <div className="card flex-shrink-0 p-5 py-20 w-full border max-w-lg shadow-2xl bg-base-100">
                    <h2 className="text-center font-extrabold text-yellow-500 drop-shadow-lg text-3xl">Register Now</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <input type="text" name="name" placeholder="Your Name" className="input bg-white input-bordered input-error w-full" />
                        <input type="email" name="email" placeholder="Your Email" className="input bg-white input-bordered input-error w-full " />
                        <input type="password" name="password" placeholder="Your Password" className="input bg-white input-bordered input-error w-full" />
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-success">Register</button>
                        </div>
                    </form>
                    <p className="text-center">Already Have An Account? <Link to={'/login'} className="text-sky-700 font-bold">Login</Link></p>
                    <hr className="my-8 container" />
                    <div className="text-center">
                        <button className="btn btn-outline btn-info" onClick={signInUsingPopup}>Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;