export default function Hero() {
  return (
    <div className="min-h-[50vh] flex-col bg-Secondary w-full max-w-full flex items-center  ">
      <div className="bg-red-400 p-10 w-full rounded shadow">
        <h1 className="font-Poppins font-bold text-5xl mb-10 text-zinc-800">
          LLM Unleashed: Igniting Careers, Transforming Business
        </h1>
        <p className="text-xl font-medium px-5 font-OpenSans text-zinc-700">
          Unlocking the Potential of OpenAI, Embracing Open Source LLMs,
          Mastering Prompt Engineering, Crafting your own LLM & Building
          Intelligent Applications
        </p>
      </div>

      <span className="font-Poppins font-bold text-3xl text-red-bg-red-400 mt-20">
        Dates & Venue
      </span>
      <p className="text-md flex flex-col mb-5 text-center font-medium text-zinc-700">
        <span>January 08 - 12, 2024</span>
        <span>SREC SPARK Incubation Foundation,</span>
        <span>Sri Ramakrishna Engineering College Campus,</span>
        <span>Vattamalaipalayam,Coimbatore, Tamil Nadu. </span>
      </p>
    </div>
  );
}
