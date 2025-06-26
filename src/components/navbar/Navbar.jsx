import logo from "../../assets/logo.png";
import coin from "../../assets/dollar.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between mt-12 ">
      <div className=" flex items-center">
        <div className="md:hidden">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Fixture</a>
              </li>
              <li>
                <a href="">Teams</a>
              </li>
              <li>
                <a href="">Schedules</a>
              </li>
            </ul>
          </div>
        </div>
        <img src={logo} alt="" className="md:w-18 w-10" />
      </div>
      <div className="flex items-center md:gap-10">
        <div>
          <ul className=" gap-10 text-gray-500 hidden md:flex">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Fixture</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Schedules</a>
            </li>
          </ul>
        </div>
        <div>
          <p
            className="
        md:p-3 p-1 border border-gray-300 rounded-lg font-semibold inline-flex items-center gap-2 "
          >
            0 coin <img src={coin} alt="" className=" " />
          </p>
        </div>
      </div>
    </nav>
  );
}
