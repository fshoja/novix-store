
import { Link } from "react-router-dom";
import { categories } from "../data";

export default function Categories() {
  return (
    <section className="bg-gray-950 px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold text-white">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((item) => (
            <Link
              key={item.id}
              to={`/products?category=${encodeURIComponent(item.name)}`}
              className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:border-blue-500 hover:bg-gray-800"
            >
              <span className="text-4xl">{item.icon}</span>

              <h3 className="mt-4 font-semibold text-white">
                {item.name}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {item.count}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
