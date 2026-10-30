export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-5 py-8 text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <h2 className="text-2xl font-bold text-white">
          NOVIX<span className="text-blue-500">.</span>
        </h2>

        <p className="text-center text-sm">
          © 2026 NOVIX Store. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a href="#" className="transition hover:text-blue-500">
            Privacy
          </a>

          <a href="#" className="transition hover:text-blue-500">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}