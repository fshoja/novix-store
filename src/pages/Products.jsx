
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { product, categories } from "../data";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "All";

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredProducts = product.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-gray-950 px-5 pb-16 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            Featured Products
          </h2>

          <p className="mt-3 text-gray-400">
            Explore our latest technology products
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="mb-6 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500 sm:max-w-md"
        />

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => handleCategoryChange("All")}
            className={`rounded-lg px-5 py-2 transition ${
              selectedCategory === "All"
                ? "bg-blue-600 text-white"
                : "bg-gray-900 text-gray-400 hover:bg-gray-800"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.name)}
              className={`rounded-lg px-5 py-2 transition ${
                selectedCategory === category.name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800"
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-gray-400">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}
