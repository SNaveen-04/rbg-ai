// import Proptypes from 'prop-types'
// const Header = () => {
//   return (
//     <header className='p-8 border-0 border-t border-solid border-white h-auto text-white text-center bg-Green tracking-wide'>
//         <h1 className="text-4xl m-2 my-4">RBG Artificial Intelligence Research</h1>
//         <h2 className="text-2xl m-2 my-4">Focused to span AI solutions across multiple domains to Structure the Unstructured data</h2>
//     </header>
//   )
// }
// Header.propTypes = {
//   color:Proptypes.string.isRequired,
// }
// export default Header

const Header = () => {
  return (
    <header className=" mb-2 font-OpenSans max-w-screen h-[50%] flex flex-col items-center justify-center bg-Green text-white p-6 text-center tracking-wide">
        <h1 className=" m-2 xl:my-6 text-3xl lg:text-5xl xl:text-6xl 2xl:text-9xl">RBG Artificial Intelligence Research</h1>
        <h2 className="m-2 xl:my-6 text-xs lg:text-sm xl:text-xl 2xl:text-4xl">Focused to span AI solutions across multiple domains to Structure the Unstructured data</h2>
    </header>
  )
}

export default Header