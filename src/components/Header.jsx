
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/Shopcontext";

export default function Header() {
  const { cartCount } = useContext(ShopContext);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-gray-950 px-4 py-5 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="shrink-0 text-2xl font-bold tracking-wider">
          NOVIX<span className="text-blue-500">.</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-sm sm:gap-8 sm:text-base">
          <Link to="/" className="transition hover:text-blue-400">
            Home
          </Link>

          <Link to="/products" className="transition hover:text-blue-400">
            Products
          </Link>
        </nav>

        {/* Cart */}
        <Link
          to="/cart"
          className="shrink-0 rounded-lg border border-gray-600 px-3 py-2 text-sm transition hover:border-blue-600 hover:bg-blue-600 sm:px-5 sm:text-base"
        >
          Cart ({cartCount})
        </Link>

      </div>
    </header>
  );
}
