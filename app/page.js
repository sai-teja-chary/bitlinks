import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-rows-2 lg:w-[80vw] lg:mx-auto mt-10 px-4 min-h-[85vh]">
        <div className="flex flex-col justify-center">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800">Welcome to BitLinks</h1>
          <p className="mt-4 md:text-lg text-md font text-gray-800">Your go-to solution for shortening URLs effortlessly.</p>
          <p className="mt-2 md:text-lg text-md font text-gray-800">Explore our features and start shortening your links today!</p>
          <Link href="/generate">
            <button className="mt-4 bg-gray-800 text-white p-2 w-30 rounded-md cursor-pointer hover:font-bold">Get Started</button>
          </Link>
        </div>
        <div className="flex justify-center">
          <img src="vector.png" className="w-full object-contain"  ></img>
        </div>
      </div>

    </>
  );
}
