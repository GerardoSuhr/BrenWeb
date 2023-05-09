import Foto1 from "../assets/BrenBote.jpeg"

function Body () {
    return  <body className=''>
    <div className="bg-white flex-row items-center w-full">
    <div className="flex-column  flex-1 text-center p-10 text-7xl italic text-secondary ">
        <h1 className="">BRENDA</h1>
        <h1 className="font-bold">SARDÓN</h1>
    </div>
    </div>

    <div className="flex ">
    <div className="flex content-center border-4 border-secondary">
    <img src={Foto1} alt="Bren" className=" w-4/5 border-4 border-primary"/>
    <div className="bg-white w-1/5">
        <h1>HOLA MUNDO</h1>
    </div>
    </div>

    <div  className=""></div>
    <div className="text-center  border-4 border-green-400 text-3xl italic"> 
        <h2 className="justify-center" >Patrona de la inspiración</h2>
    </div>
    </div>
    
    
    <div className="flex items-center w-full ">
    <div className="bg-red-300 w-1/5">
        <h1>Biografia</h1>
    </div>
    <div className="bg-red-600 flex-1">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, adipisci ipsam impedit reprehenderit voluptatum quis iure, minus, cum itaque aspernatur delectus aliquid nemo maxime sed odio in vitae laboriosam id?</h1>
    </div>
    </div>
    <div className="flex items-center w-full">
    <div className="bg-red-500 flex-1">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, adipisci ipsam impedit reprehenderit voluptatum quis iure, minus, cum itaque aspernatur delectus aliquid nemo maxime sed odio in vitae laboriosam id?</h1>
    </div> 
    </div>
    </body>
    
    }
    
    export default Body