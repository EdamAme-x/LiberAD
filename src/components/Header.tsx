import Link from "LiberComp/Link.tsx";

export default function Header() {
  return (
    <header className="flex flex-wrap bg-gray-700 text-white opacity-80 fixed w-full z-50 top-0 left-0 h-[50px]">
      <img src="/logo.png" alt="Logo" className="h-[50px] ml-5 rounded hidden sm:flex" />
      <h1
        className="text-3xl p-1.5 ml-3 font-extrabold"
        style={{
          textDecoration:
            "line-through double 1px rgba(55,65,81,var(--tw-bg-opacity))",
        }}
      >
        <span className="text-green-500">Liber</span> <span className="text-red-500">AD</span> <span className="text-blue-500 hidden sm:inline">Network</span>
      </h1>

      <Link to="#example" className="ml-auto p-2.5 text-xl hover:bg-gray-600 rounded">Example</Link>
      <Link to="#about" className="mx-2 p-2.5 text-xl hover:bg-gray-600 rounded">Details</Link>
      <Link to="#start" className="ml-5 p-5 pt-2.5 pb-2.5 text-xl bg-blue-500 rounded hover:bg-blue-600 font-bold hidden md:flex">Get Started</Link>
    </header>
  );
}