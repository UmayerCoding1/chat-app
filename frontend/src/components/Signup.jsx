
import { Link, useNavigate } from "react-router";
import { POSTAPI } from "../service/api";
import {toast } from 'sonner'
import { useState } from "react";
const Signup = () => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
        const response = await POSTAPI('/auth/register', user);
        if (response.success) {
            console.log(response);
           toast.success(response.message, {
            duration: 1000,
           });
           navigate('/signin');
        }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong', {duration: 1000});
    }

    setUser({
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender: gender });
  };
  return (
    <div className="w-[350px] mx-auto ">
      <div className="glass-card w-full p-6 mx-5">
        <h1 className="text-3xl font-bold text-center text-black/70 text-shadow-2xs">
          Signup
        </h1>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          <div className="">
            <label className="lable p-2">
              <span className="text-base label-text">Full Name</span>
            </label>{" "}
            <br />
            <input
              className="input input-bordered w-full  h-10"
              type="text"
              name="fullname"
              value={user.fullname}
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              placeholder="full name"
            />
          </div>

          <div className="">
            <label className="lable p-2">
              <span className="text-base label-text">User Name</span>
            </label>{" "}
            <br />
            <input
              className="input input-bordered w-full  h-10"
              type="text"
              name="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="user name"
            />
          </div>

          <div className="">
            <label className="lable p-2">
              <span className="text-base label-text">Email</span>
            </label>{" "}
            <br />
            <input
              className="input input-bordered w-full  h-10"
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
            />
          </div>

          <div className="">
            <label className="lable p-2">
              <span className="text-base label-text">Password</span>
            </label>{" "}
            <br />
            <input
              className="input input-bordered w-full  h-10"
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
            />
          </div>
          <div className="">
            <label className="lable p-2">
              <span className="text-base label-text">Confirm password</span>
            </label>{" "}
            <br />
            <input
              className="input input-bordered w-full  h-10"
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              placeholder="Confirm password"
            />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                className="checkbox mx-2"
              />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                className="checkbox mx-2"
              />
            </div>
          </div>

          <button className="bg-white/50 rounded-lg cursor-pointer text-sm font-medium text-black w-full h-10">
            Signup
          </button>

          <p>
            You have an account?{" "}
            <Link to="/signin" className="underline">
              Signin
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
