import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center bg-gray-950 px-5 pb-12 pt-28 text-white sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row">

        {/* Text Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            New Collection 2026
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Upgrade Your
            <span className="text-blue-500"> Digital </span>
            Lifestyle
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-gray-400 sm:text-base lg:mx-0">
            Discover the latest technology products designed to make
            your everyday life smarter, faster, and better.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/img/allhedphon.jpg"
            alt="Premium wireless headphones"
            className="h-64 w-full object-contain sm:h-80 lg:h-[450px]"
          />
        </div>

      </div>
    </section>
  );
}