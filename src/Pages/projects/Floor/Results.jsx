import React from "react";

const Results = () => {
  const data = {
    ESPCN: [
      0.636, 0.459, 0.17, 0.304, 0.459, 0.449, 0.199, 0.253, 0.331, 0.438,
      0.904, 0.207, 0.46,
    ],
    EDSR: [
      0.637, 0.458, 0.169, 0.304, 0.45, 0.437, 0.198, 0.251, 0.33, 0.438, 0.904,
      0.21, 0.461,
    ],
    FSRCNN: [
      0.635, 0.469, 0.168, 0.304, 0.448, 0.448, 0.21, 0.251, 0.332, 0.437,
      0.905, 0.208, 0.459,
    ],
    LapSRN: [
      0.636, 0.469, 0.17, 0.309, 0.448, 0.435, 0.199, 0.255, 0.331, 0.438,
      0.905, 0.208, 0.46,
    ],
    Original: [
      0.521, 0.227, 0.088, 0.142, 0.185, 0.238, 0.148, 0.207, 0.353, 0.455,
      0.91, 0.159, 0.305,
    ],
  };
  const columns = [
    "Background",
    "Outdoor",
    "Wall",
    "Kitchen",
    "Living room",
    "Bedroom",
    "Bath",
    "Entry",
    "Railing",
    "Storage",
    "Garage",
    "Undefined",
    "micro avg",
  ];
  const data1 = {
    ESPCN: [
      0.935, 0.109, 0.036, 0.159, 0.119, 0.117, 0.081, 0.465, 0.843, 0.91,
      0.978, 0.875,
    ],
    EDSR: [
      0.935, 0.097, 0.037, 0.159, 0.122, 0.106, 0.079, 0.464, 0.843, 0.91,
      0.978, 0.875,
    ],
    FSRCNN: [
      0.935, 0.099, 0.036, 0.159, 0.12, 0.099, 0.081, 0.463, 0.844, 0.91, 0.978,
      0.875,
    ],
    LapSRN: [
      0.935, 0.106, 0.038, 0.157, 0.122, 0.117, 0.081, 0.462, 0.844, 0.91,
      0.978, 0.874,
    ],
    Original: [
      0.941, 0.025, 0.015, 0.094, 0.07, 0.159, 0.159, 0.452, 0.909, 0.989, 1.0,
      0.886,
    ],
  };

  const columns1 = [
    "No Icon",
    "Window",
    "Door",
    "Closet",
    "Electical Applience",
    "Toilet",
    "Sink",
    "Sauna Bench",
    "Fire Place",
    "Bathtub",
    "Chimney",
    "micro avg",
  ];
  return (
    <div className=" bg-Primary">
      <div className="text-left mx-auto px-3  text-white md:px-12 md:py-28">
        <h1 className="text-2xl md:text-3xl">Results</h1>
        <p className="py-3">
          The multi-component module performed room detection with higher
          accuracy than that when using the CubiCasa5k model alone. The best
          improvement in accuracy for the dataset chosen is 39.47%; EDSR is the
          SR model used in this case. EDSR also showed the best result from all
          the superresolution methods with a 12.17% improvement on average. This
          stacked Super-Resolution method has to be used during training to
          alter the dimensions of low-resolution images. This could enhance the
          overall performance of the network and push it to a wider range of use
          cases.
        </p>
        <div className="flex flex-col lg:flex-row max-md:text-xs overflow-x-auto md:text-lg gap-4 md:space-x-9  py-4">
        <div>
        <div>
            <h1 className="py-2 border-b-2 border-white">
              Table 1. Room detection comparison of SR method with original.
            </h1>
            <div className=" w-full">
              <div className="grid grid-cols-6 border-b-2 border-white">
                <div></div>
                {Object.keys(data).map((rowName, rowIndex) => (
                  <div className="p-1" key={rowIndex}>
                    {rowName}
                  </div>
                ))}
              </div>
              <div className=" border-b-2 border-white">
                {columns.map((colName, colIndex) => (
                  <div className="grid grid-cols-6" key={colIndex}>
                    <div className="p-1">{colName}</div>
                    {Object.keys(data).map((rowName, rowIndex) => (
                      <div className="p-1" key={rowIndex}>
                        {data[rowName][colIndex]}
                        {console.log(rowName, colIndex)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
        <div>
            <h1 className="py-2 border-b-2 border-white">
            Table 2. Icon detection comparison of SR mothods with original.
            </h1>
            <div className=" w-full">
              <div className="grid grid-cols-6 border-b-2 border-white">
                <div></div>
                {Object.keys(data1).map((rowName, rowIndex) => (
                  <div className="p-1" key={rowIndex}>
                    {rowName}
                  </div>
                ))}
              </div>
              <div className=" border-b-2 border-white">
                {columns1.map((colName, colIndex) => (
                  <div className="grid grid-cols-6" key={colIndex}>
                    <div className="p-1">{colName}</div>
                    {Object.keys(data1).map((rowName, rowIndex) => (
                      <div className="p-1" key={rowIndex}>
                        {data[rowName][colIndex]}
                        {console.log(rowName, colIndex)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
