import React, { use } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const {logInWithEmail} = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const handleLoginWithEmail = e =>{
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.preventDefault()
    logInWithEmail(email, password)
    .then(result => {
      console.log(result);
      navigate(`${location.state ? location.state.pathname : '/' }`);
    }).catch(error => console.log(error));
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLoginWithEmail} className="card-body">
            <h2 className="text-[#403F3F] font-bold text-center text-2xl pt-5">Login your account</h2>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="text-medium text-center mt-5">Dont’t Have An Account ? <Link to={'/auth/register'}>Register</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
