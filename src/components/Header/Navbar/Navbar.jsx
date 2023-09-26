import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div>
      {/* <div className="flex flex-col md:flex-row md:justify-between items-center py-10 container mx-auto px-6 lg:px-32">
        <Logo></Logo>
        <ul className="flex gap-10 z-10">
          <NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-medium text-lg" : "text-lg font-normal")}>
            Home
          </NavLink>
          <NavLink to="/donation" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-medium text-lg" : "text-lg font-normal")}>
            Donation
          </NavLink>
          <NavLink to="/statistics" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-medium text-lg" : "text-lg font-normal")}>
            Statistics
          </NavLink>
        </ul>
      </div> */}

      <div className="container py-10 mx-auto px-0 lg:px-32 z-50">
        <div className="navbar bg-base-100">
          <div className="flex w-full md:w-1/2 justify-between">
            <a>
              <Logo></Logo>
            </a>
            <div className="dropdown flex justify-end">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content top-4 pl-6 mt-3 z-10 shadow-xl bg-white rounded-md w-max">
                <NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-medium text-lg" : "text-lg font-normal")}>
                  Home
                </NavLink>
                <NavLink to="/donation" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-medium text-lg" : "text-lg font-normal")}>
                  Donation
                </NavLink>
                <NavLink to="/statistics" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-medium text-lg" : "text-lg font-normal")}>
                  Statistics
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden md:flex">
            <ul className="menu menu-horizontal px-1  md:gap-10">
              <NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-medium text-lg" : "text-lg font-normal")}>
                Home
              </NavLink>
              <NavLink to="/donation" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-medium text-lg" : "text-lg font-normal")}>
                Donation
              </NavLink>
              <NavLink to="/statistics" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-medium text-lg" : "text-lg font-normal")}>
                Statistics
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
