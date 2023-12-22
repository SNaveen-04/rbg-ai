const Video = () => {
  return (
    <div className="max-md:m-10 md:m-20 flex items-center max-md:flex-col md:flex-row gap-10 justify-between">
        <div className="w-1/2 flex items-center justify-center">
            <iframe className="w-64 sm:w-80 h-60" src="https://www.youtube.com/embed/H2qTzFweA4g" title="AI Powered Machining Feature Recognition, Shape Search and Partial Shape Search"  allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share" allowFullScreen></iframe>
        </div>
        <div className=" max-md:text-lg md:text-2xl text-Primary">
        <p>
        To learn more, check out 
        <a className="text-gray-500">
        our GitHub
        </a>
        and read 
        <a className="text-gray-500">
        our publication
        </a>
        submitted to 9th International Conference on Frontiers of Intelligent Computing: Theory and Applications (FICTA 2021)
        </p>
        </div>
    </div>
  )
}


export default Video