import Logo from "../assets/Unaremada.png"

function Header () {
    return  <header >
        <div className="h-full bg-no-repeat bg-cover flex items-center w-full ">
            <div className=" w-1/5">
                <img src={Logo} alt="unaRemadaALaVez"/>
            </div>
            <div className="flex-1 flex flex-row-reverse text-xl italic">
                <h1 className="text-secondary p-4  mr-4  font-serif font-bold hover:underline">CONTACTO</h1>
                <h1 className="text-secondary p-4  font-serif font-bold hover:underline">LOGROS</h1>
                <h1 className="text-secondary p-4  font-serif font-bold hover:underline">PRÓXIMAS COMPETENCIAS</h1>
                <h1 className="text-secondary p-4  font-serif font-bold hover:underline">HOME</h1>
            </div>
        </div>
    </header>

}

export default Header