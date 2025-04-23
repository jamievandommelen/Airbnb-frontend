import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="text-rose-500 text-2xl font-bold">a1rbnb</div>

        {/* Nav links */}
        <div className="space-x-6 text-gray-700 text-sm font-medium">
          <a href="#" className="hover:text-rose-500 transition">
            <Link to="/">Home</Link>
          </a>
          <a href="#" className="hover:text-rose-500 transition">
            <Link to="/Signup"> Sign Up </Link>
          </a>
          <a href="#" className="hover:text-rose-500 transition">
            <Link to="/Login"> Login </Link>
          </a>
          <a href="#" className="hover:text-rose-500 transition">
            <Link to="/logout"> Logout</Link>
          </a>
          <a href="#" className="hover:text-rose-500 transition">
            <Link to="/Properties"> Properties </Link>
          </a>
          <a href="#" className="hover:text-rose-500 transition">
            <Link to="properties/new"> New Property</Link>
          </a>
        </div>
      </nav>
    </header>
  );
}
