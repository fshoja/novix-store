import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { ShopContext } from "../context/Shopcontext";



export default function Cart() {
  const { removeItem, cart, setCart, total } = useContext(ShopContext);

  // Increase Quantity
  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // Total Items
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-gray-950 px-4 pb-16 pt-28 text-white sm:px-5 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-2xl font-bold sm:text-3xl">
          Shopping Cart
          <span className="ml-3 text-base text-gray-500">
            ({totalItems} items)
          </span>
        </h1>

        <div className="max-w-4xl space-y-4">
          {cart.length === 0 ? (
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
              <div className="mb-4 text-5xl">🛒</div>

              <h2 className="text-xl font-semibold">
                Your cart is empty
              </h2>

              <p className="mt-2 text-gray-400">
                Looks like you haven't added anything yet.
              </p>

              <Link
                to="/products"
                className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 transition hover:bg-blue-700"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-gray-900 p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full rounded-lg bg-gray-800 object-contain sm:h-24 sm:w-24"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold sm:text-lg">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-blue-400">
                    ${Number(item.price).toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={() => decrease(item.id)}
                      disabled={item.quantity <= 1}
                      className="h-9 w-9 rounded bg-gray-800 transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      -
                    </button>

                    <span className="min-w-5 text-center font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increase(item.id)}
                      className="h-9 w-9 rounded bg-gray-800 transition hover:bg-blue-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price + Remove */}
                <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex items-center gap-2 text-sm text-red-400 transition hover:text-red-300"
                  >
                    <FaTrash />
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        {cart.length > 0 && (
          <div className="mt-8 max-w-4xl rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-5 text-xl font-bold">
              Order Summary
            </h2>

            <div className="mb-3 flex justify-between text-gray-400">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between border-t border-gray-700 pt-4 text-lg font-bold">
              <span>Total</span>
              <span className="text-blue-400">
                ${Number(total).toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
