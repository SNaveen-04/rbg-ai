import knowledgeData from "./CourseData.js";
export default function Course() {
  console.log(knowledgeData);
  return (
    <div className="min-h-[70vh] flex-col bg-gray-100 w-full max-w-full flex items-center sm:px-5 lg:px-20 md:px-10 justify-center py-5">
      <h1 className="text-5xl font-bold mb-5">Course Overview</h1>
      <p className="text-md p-5   w-full md:max-w-5xl bg-Secondary shadow font-medium font-Poppins">
        Embark on a transformative journey with ‘LLM Unleashed’, a 5-day
        immersive workshop designed for students, professionals, and visionary
        entrepreneurs. Explore the power of OpenAI, delve into open source LLMs,
        and ignite your potential in crafting the future of AI innovation.
        Master prompt engineering, build intelligent applications, and elevate
        your career with expert talks. Join us in unlocking the next frontier of
        language models!
      </p>
      <div className="font-OpenSans grid md:grid-cols-2  lg:grid-cols-3 gap-5 mt-10">
        {knowledgeData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  p-5 shadow bg-Primary rounded"
          >
            <h1 text-Secondary className="text-xl  font-semibold text-zinc-800">
              {item.title}
            </h1>
            <ul className="flex justify-center flex-col  font-semibold mt-5 text-gray-700">
              {item.options.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
