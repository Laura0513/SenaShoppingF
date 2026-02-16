import { SearchIcon, UserRoundIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header
            className="sticky top-0 left-0 w-full border-b border-gray-200 bg-white flex items-center justify-between h-20 py-5 px-10 transition-all duration-300 z-50 supports-backdrop-filter:bg-white/60 backdrop-blur-md">
            <a href="/">
                <img src="src/assets/logosena.png" alt="Logo SENA" className="size-18" />
            </a>
            <section>
                <div className="relative w-full">
                    <SearchIcon className="absolute text-gray-500 top-1/2 left-3 transform -translate-y-1/2 size-4" />
                    <input type="text" placeholder="Bucar productos o emprendedores..." className="py-2 px-9 border border-gray-200 rounded-full w-md hover:border-[#3b5a42] transition-colors duration-200 focus:border-[#03a941] focus:ring-2 focus:ring-[#03a941]/20 outline-none text-sm bg-white" />
                </div>
            </section>
            <nav className="flex items-center gap-8">
                <Link to="/" className="text-black text-sm font-bold hover:text-[#03a941] transition-colors duration-200">
                    Inicio
                </Link>
                <Link to="/productos" className="text-black text-sm font-bold hover:text-[#03a941] transition-colors duration-200">
                    Productos
                </Link>
                <Link to="/entrepreneurs" className="text-black text-sm font-bold hover:text-[#03a941] transition-colors duration-200">
                    Emprendedores
                </Link>
                <Link to="/login" className="flex items-center text-sm gap-2.5 bg-[#03a941] py-2 px-4 rounded-full text-white hover:opacity-80 transition-all duration-200"><UserRoundIcon className="size-4" />
                    Ingresar
                </Link>
            </nav>
        </header>
    )
}
