import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/ContextProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [err, setErr] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    register(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Register Succesfull");
        navigate("/");
      })
      .catch((error) => {
        setErr(error.code);
        console.log(error);
      });
  };
  return (
    <div>
      {" "}
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">
                Hi, There . Register to see all user now. This app is created
                with firebase and react{" "}
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSubmit}>
                <div>
                  {err && (
                    <p className=" text-red-800 font-bold italic">{err}</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Have account?
                    </a>
                    <Link to="/" className=" underline text-blue-500">
                      Login Now
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
