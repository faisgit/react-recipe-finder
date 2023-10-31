import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [timeOutId, setTimeOutId] = useState();

  const handleChange = (event) => {
    clearTimeout(timeOutId);
    const timeOut = setTimeout(() => {
      props.fetchData(event.target.value);
    }, 500);
    setTimeOutId(timeOut);
  };
  return (
    <div className="navbar bg-base-300 px-3 py-1 sticky top-0 left-0 right-0 z-30">
      <div className="flex-1">
        <Link className="btn btn-ghost btn-circle mr-3" to="/">
          <img src={Logo} alt="" className="h-12 w-12 rounded-full" />
        </Link>
        <h1 className=" normal-case text-xl font-semibold">Recipe Finder</h1>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Recipe ..."
            className="input input-bordered w-24 md:w-auto"
            onChange={handleChange}
          />
        </div>
      </div>
      <img src="" alt="" />
    </div>
  );
}
