import { Search } from "lucide-react";
import OtherUsers from "./OtherUsers";
import { GETAPI } from "../service/api";
import {toast} from 'sonner'
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
const Sidebar = () => {
const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            const response = await GETAPI("/auth/logout");
            if (response.message) {
                toast.success(response.message, {
                    duration: 1000
                })
             dispatch(logout());

                setTimeout(() => {
                    window.location.href = "/signin";
                }, 200);
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="flex flex-col    border-r border-slate-500 p-4">
      <form className="flex items-center gap-2">
        <input
          className="input input-bordered rounded-md w-60"
          type="text"
          name=""
          id=""
          placeholder="Search . . . ."
        />

        <button
          type="submit"
          className="bg-white py-2 px-5 cursor-pointer hover:bg-gray-200 rounded-2xl "
        >
          <Search size={20} />
        </button>
      </form>
      {/* <div className="divider px-2"></div> */}
      <hr className="border-white/50 my-3" />
      <OtherUsers />

      <div>
        <button onClick={handleLogout} className="w-full bg-red-500 text-sm h-10 rounded-lg text-white cursor-pointer">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
