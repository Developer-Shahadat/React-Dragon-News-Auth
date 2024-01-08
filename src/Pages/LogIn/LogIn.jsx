import React, { useContext } from "react";
import NavBarPage from "../Shared/NavBar/NavBarPage";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {
  const {logIn} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  console.log('Location in the LogIn page', location);
    const handleLogIn = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
        

        // Log In 
        logIn(email,password)
        .then(result => {
          console.log("User Log In Successful",result.user);

          //  Navigate After LogIn
          navigate(location?.state ? location.state : '/')

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
            <h1 className="text-5xl font-bold">Login Your Account!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
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
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center">Don't Have An Account ? <Link className="text-red-600 font-bold" to='/register'>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
