import courseContent from "./CourseDetail";
export default function Content() {
  return (
    <div className="min-h-screen flex-col bg-Secondary py-10 w-full max-w-full flex items-center sm:px-5 lg:px-20 md:px-10 justify-center">
      <h1 className="text-5xl font-bold text-Primary mb-10 text-center">Course Content</h1>
      <ul className="grid md:grid-cols-2">
      {/* <ul className="w-full"> */}
        {courseContent.map((item, index) => (
          <li
            className="font-Poppins my-6 text-white bg-Primary p-5 m-2 rounded shadow"
            key={index}
          >
            <p className="font-semibold  text-white text-lg mb-5">
              <span
                className="mx-2 text-xl text-gray-800
              "
              >
              Day {item.day}
              </span>
              {item.title}
            </p>
            <ul className="space-y-5">
              {item.sessions.map((item, index) => (
                <li className="space-x-2" key={index}>
                  <span className="font-semibold text-white">
                    {item.time} Session
                  </span>
                  <span className="font-medium">{item.topic}</span>
                  <ul>
                    {item.subtopics.map((item, index) => (
                      <li className="list-decimal text-gray-200 mx-5" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
