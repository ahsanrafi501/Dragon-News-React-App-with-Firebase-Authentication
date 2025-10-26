import { Link, NavLink } from "react-router";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { use } from "react";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3">
        <img className="h-[60px] w-[60px] rounded-full  border border-red-500 items-center" src={`${user ? user.photoURL : userImg}`} alt="" />
        {user ? (
          <button onClick={handleSignOut} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to={"/auth/login"}>
            <button className="btn btn-primary px-10">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
