const table = [
    {
        title:'Shape search',
        body:'Shape Search deals with creating an automated approach to extracting and identifying different geometrical features of the CAD models and comparing them with the existing models on the database.'
    },
    {
        title:'Partial shape search',
        body:'Partial shape search recognizes the similarities across the models with partial features by their geometric properties and retrieves the CAD model that has identical partial or complete features to the model given by the user.'
    },
    {
        title:'Duplicate Part Assessment',
        body:'MFR can recognize the repeating shapes within the CAD models or across CAD models and categorize them into a single group'
    },
    {
        title:'Model Category Grouping',
        body:'The grouping of CAD models according to their geometric similarity can help us to perform analysis and enables easy access'
    },
    {
        title:'3D model comparison',
        body:'3D models can be compared to find their common features through MFR'
    },
]

let image = "https://i.ibb.co/ydBxWBg/cfr.png"
const Usecase = () => {
  return (
    <div className="text-Secondary bg-Primary text-center py-4 text-xl">
        <h1>USE CASE</h1>
    <div className="max-w-screen max-md:flex-col flex p-8 ">
        <img src={image} className="w-80 m-4 h-80"/>
        <table className="max-w-1/2 border-white table-auto border border-collapse">
            <tbody>
            {table.map((row,index)=>{
                return (
                    <tr key={index}>
                        <td className="border p-2 border-white">
                            {row.title}
                        </td>
                        <td className="border p-2 border-white">
                            {row.body}
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Usecase