import { Search } from "lucide-react";
import OtherUsers from "./OtherUsers";
const Sidebar = () => {
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
        <button className="w-full bg-red-500 text-sm h-10 rounded-lg text-white cursor-pointer">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
