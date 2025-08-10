import React from "react";
import { Link, useNavigate } from "react-router";
import { POSTAPI } from "../service/api";
import { toast } from "sonner";
import { useDispatch } from 'react-redux'
import { setUser } from "../redux/userSlice";
const SignIn = () => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const displach = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      const response = await POSTAPI("/auth/login", userData);
      console.log(response);
      if (response.user) {
        console.log(response);
        displach(setUser(response.user));
        toast.success(response.message, {
          duration: 1000,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { duration: 1000 });
    }

    setUserData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="w-[350px] mx-auto ">
      <div className="glass-card w-full p-6 mx-5">
        <h1 className="text-3xl font-bold text-center text-black">Signin</h1>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          <div className="">
            <label className="lable p-2">
              <span className="text-base label-text">Email</span>
            </label>{" "}
            <br />
            <input
              className="input input-bordered w-full  h-10"
              type="email"
              name="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
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
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              placeholder="Password"
            />
          </div>

          <button className="bg-white/50 rounded-lg cursor-pointer text-sm font-medium text-black w-full h-10">
            Signin
          </button>

          <p>
            You have an account?{" "}
            <Link to="/signup" className="underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
