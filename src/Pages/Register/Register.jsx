import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

  const {createUserWithEmail, setUser} = use(AuthContext)

  const handleRegister = e =>{
    e.preventDefault();

    const name = e.target.name.value;
    const url = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({name, url, email, password})

    createUserWithEmail(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      setUser(user);
    })
    .catch(error => {
      console.log(error);
    })

  }



  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="text-[#403F3F] font-bold text-center text-2xl pt-5">
            Register your account
          </h2>
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input type="text" className="input" name="name" placeholder="Enter your name" required/>


            <label className="label">Photo URL</label>
            <input type="text" className="input" name="url" placeholder="Enter you photo URL" required/>


            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" required/>

            <label className="label">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" required/>


            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            <p className="text-medium text-center mt-5">
              Dont’t Have An Account ?{" "}
              <Link to={"/auth/login"}>Login</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
