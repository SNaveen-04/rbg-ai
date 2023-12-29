export default function Registration() {
  return (
    <div className="min-h-[50vh] font-OpenSans flex-col  bg-Secondary w-full flex items-center sm:px-5 lg:px-20 md:px-4 py-6 justify-center">
      <div className="flex flex-col shadow w-full bg-white py-6 justify-center items-center md:px-20 md:w-2/3 rounded">
      <h1 className="font-Poppins text-center font-medium text-2xl md:text-4xl my-5 text-zinc-800">
        Registration
      </h1>
        <p className="font-bold text-sm md:text-xl ">
          Contact To Register :
          <span className="text-xs md:text-lg mx-2 font-medium text-gray-700">
            Ms. Supriya HS{" "}
          </span>
        </p>
        <p className="font-bold text-sm md:text-xl ">
          Phone :
          <span className="text-xs md:text-lg mx-2 font-medium text-gray-700">
            +91- 733 910 3001{" "}
          </span>
        </p>
        <p className="font-bold text-sm md:text-xl ">
          Email :
          <span className="text-xs md:text-lg mx-2 font-medium text-gray-700">
            training@rbg.ai
          </span>
        </p>
        <button className="mx-auto mt-5 bg-Primary px-4 py-2 text-gray-100 rounded">
          Register
        </button>
      </div>
    </div>
  );
}
