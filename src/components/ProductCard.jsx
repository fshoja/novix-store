
import { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";

export default function ProductCard({ item }) {
  const { addtocart } = useContext(ShopContext);

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition hover:border-blue-500">

      {/* Product Image */}
      <div className="flex h-56 items-center justify-center bg-gray-800 p-5">
        <img
          src={item.image}
          alt={item.name}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        {item.badge && (
          <span className="text-xs font-semibold text-blue-400">
            {item.badge}
          </span>
        )}

        <h3 className="mt-2 font-semibold text-white">
          {item.name}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {item.category}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="font-bold text-white">
            ${Number(item.price).toFixed(2)}
          </span>

          {item.oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${Number(item.oldPrice).toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={() => addtocart(item)}
          className="mt-5 w-full rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
