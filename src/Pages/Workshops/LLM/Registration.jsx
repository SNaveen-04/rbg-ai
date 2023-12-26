export default function Registration() {
  return (
    <div className="min-h-[50vh] font-Poppins flex-col  bg-Secondary w-full max-w-full flex items-center sm:px-5 lg:px-20 md:px-10 py-5 justify-center">
      <h1 className="font-Poppins font-bold text-5xl mb-10 text-zinc-800">
        Registration
      </h1>
      <div className="flex flex-col shadow-md bg-gray-100 p-10 px-20 rounded">
        <p className="font-bold text-xl ">
          Contact To Register
          <span className="text-lg mx-2 font-medium text-gray-700 ">
            Ms. Supriya HS{" "}
          </span>
        </p>
        <p className="font-bold text-xl ">
          Phone
          <span className="text-lg mx-2 font-medium text-gray-700 ">
            +91- 733 910 3001{" "}
          </span>
        </p>
        <p className="font-bold text-xl ">
          Email
          <span className="text-lg mx-2 font-medium text-gray-700 ">
            training@rbg.ai
          </span>
        </p>
        <button className="mx-auto mt-5 bg-red-400 px-4 py-2 text-gray-100 rounded">
          Register
        </button>
      </div>
    </div>
  );
}
