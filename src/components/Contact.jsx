
const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url(https://i.ibb.co/wwpMd2Y/guy-bianco-iv-oq-PBr7-CSS-g-unsplash.jpg)' }}>
            <div className="hero-overlay bg-slate-500 bg-opacity-30"></div>
            <div className="hero-content flex-col glass shadow-xl rounded-lg lg:w-3/6 ">
                <h3 className="lg:text-5xl text-xl pt-6 font-extrabold drop-shadow-lg text-center text-yellow-500">Contact Us Now</h3>
                <hr />
                <div className="card flex-shrink-0 w-full ">
                    <form className="card-body">
                        <input type="text" name="name" placeholder="Enter Your Name" className="input bg-white input-bordered input-error w-full" />
                        <input type="email" name="email" placeholder="Enter Your Email" className="input bg-white input-bordered input-error w-full" />
                        <input type="text" name="subject" placeholder="Subject" className="input bg-white input-bordered input-error w-full" />
                        <textarea type="text" name="details" className="textarea textarea-error" placeholder="Details Here"></textarea>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-primary">Send Email</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;