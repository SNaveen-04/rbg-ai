const Table = () => {
  const data = [
    ["Train", 3410, 3457, 6897, 8295.75, 8359.64, 16655.39, 1088, 35436],
    ["Validation", 1234, 5678, 9876, 5432.1, 8765.43, 14197.53, 765, 23456],
    ["Test", 9876, 5432, 1234, 8765.43, 5432.1, 14197.53, 654, 12345],
    ["Total", 4908, 4929, 9837, 11832.51, 11868.13, 23700.65, 2652, 50505],
    // Add more data rows as needed
  ];
  return (
    <div className="bg-Primary">
      <div className="text-white px-10 pt-16 pb-6">
        <h1 className="text-4xl">CoRe-PooL</h1>
        <p className="text-sm md:text-lg my-2">
          Since the Badaga language is not officially written in any native
          script, we have manually created 2100 Badaga transcripts written in
          English slang with their corresponding translation in English. 12
          native speakers spoke these text sets and recorded. Both annotated and
          unannotated corpus was released as wave files with a sampling rate of
          22050 Hz and PCM 16-bit rate. The annotated corpus was constructed
          carefully to include the word variations which include, food items,
          utensils, proverbs, insects, flowers, animals, colors, numbers, days,
          weeks, months, fruits, common places, action words, and vehicle types.
          The unannotated corpus has been collated by taking data from Youtube.
          The genre includes musical songs, short films, and talk shows.
        </p>
      </div>
      <div>
        <div className="p-2 overflow-x-auto   text-white ">
          <div className="flex  flex-col items-center text-xs md:text-sm">
          <h1 className="p-4 text-xl  border-b border-blue-gray-100 bg-blue-gray-50 ">
            Table 1. CoRe-PooL Statistics
          </h1>
          <thead className="text-center my-3 py-3 hidden md:block">
            <tr>
              <th></th>
              <th className="text-center py-3 border-b border-blue-gray-100 bg-blue-gray-50 pr-52 ">
                Number of transcript
              </th>
              <th className="text-center py-3 p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
                Duration(seconds)
              </th>
            </tr>
          </thead>
            <table className=" table-cell text-left max-w-full">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    Title
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    Male
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    Female
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    Total
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    Male
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    Female
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    Total
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    Unique Words
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    Total Words
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className={`p-4 ${
                          index === data.length - 1
                            ? ""
                            : "border-b border-blue-gray-50"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="py-4">
              <h1 className="p-4 text-xl text-center border-b border-blue-gray-100 bg-blue-gray-50 w-full">
              Table 2. Core-pool Variation
            </h1>
            <table className="table-cell text-left">
              <thead>
                <tr>
                <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 ">
                Variation
                  </td>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 px-14 ">
                  </th>
                  <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Total Audio Length(Minutes)
                  </td>
                </tr>
                <tr>
                <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 ">
                Annotated
                  </td>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 px-14 ">
                  </th>
                  <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  420
                  </td>
                </tr>
                <tr>
                <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 ">
                Unannotated
                  </td>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 px-14">
                  </th>
                  <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  968
                  </td>
                </tr>
              </thead>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
