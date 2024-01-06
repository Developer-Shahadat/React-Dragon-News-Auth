import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavBarPage from "../Shared/NavBar/NavBarPage";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
      // Context
  const {createRegister} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name =  form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(name,photo,email,password);
        
        // register done 
        createRegister(email,password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.error(error)
        })
    }
  return (
    <div>
      <NavBarPage></NavBarPage>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center l">
            <h1 className="text-5xl font-bold">Register Your Account!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="text-center">
                Already Have An Account ?
                <Link className="text-red-600 font-bold" to="/login">
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
