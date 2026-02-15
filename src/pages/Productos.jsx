import { MapPinIcon, MailIcon, SearchIcon, SlidersHorizontalIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Productos() {
    return (
        <section
            className="w-full border-b border-gray-200 bg-white flex flex-col items-center justify-between py-5 px-10 transition-all duration-300">
            <article className="flex items-center justify-between w-full">
                <div className="relative w-full">
                    <SearchIcon className="absolute text-gray-500 top-1/2 left-3 transform -translate-y-1/2 size-4" />
                    <input type="text" placeholder="Bucar productos o emprendedores..." className="py-2 px-9 border border-gray-200 rounded-full w-md hover:border-[#3b5a42] transition-colors duration-200 focus:border-[#03a941] focus:ring-2 focus:ring-[#03a941]/20 outline-none text-sm bg-white" />
                </div>
                <div className="flex items-center gap-3">
                    <Link to="" className="flex items-center gap-2 text-sm text-black font-bold border border-gray-300 rounded-lg py-2 px-3 hover:bg-[#03a941] hover:text-white transition-colors duration-200">
                        <SlidersHorizontalIcon className="size-4" />
                        Filtros
                    </Link>
                    <div>
                        <select name="desplegable" id="desplegable" className="flex items-center gap-2 text-sm text-black font-bold border border-gray-300 rounded-lg py-2 px-3 focus:border-[#03a941] transition-colors duration-200 focus:ring-2 outline-none focus:ring-[#03a941]/20">
                            <option value="1">Más recientes</option>
                            <option value="2">Precio: Menor a mayor</option>
                            <option value="3">Precio: Mayor a menor</option>
                            <option value="4">Más populares</option>
                        </select>
                    </div>
                </div>
            </article>
            <header className="flex flex-col items-center justify-center py-10 gap-2">
                <h2 className="text-3xl font-bold">Todos los productos</h2>
                <p className="text-gray-600">Descubre lo mejor del talento colombiano</p>
            </header>
            <article className="grid grid-cols-4 gap-8">
                <div className="group overflow-hidden border rounded-xl border-gray-300 transition-all duration-200 hover:shadow-lg">
                    <section className="relative aspect-square overflow-hidden">
                        <img className="group-hover:scale-105 w-full h-full object-cover transition-transform duration-200 rounded-t-xl" src="src/assets/bolso.png" alt="Artesanías" />
                        <p className="absolute top-3 right-3 text-white bg-[#03a941] rounded-full px-3 py-1 text-xs">Artesanías</p>
                    </section>
                    <header className="p-5 space-y-2">
                        <h3 className="font-medium group-hover:text-[#03a941] transition-colors duration-200">Bolso Artesanal de Cuero</h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <p>María González</p>
                            <span>•</span>
                            <p className="flex items-center gap-1"><MapPinIcon className="size-4" /> Bogotá</p>
                        </div>
                    </header>
                    <footer className="flex items-center justify-between px-5 pb-5">
                        <p className="text-[#03a941] font-bold text-xl">$180.000</p>
                        <a className="flex items-center gap-2 border border-gray-300 rounded-lg px-3.5 py-1.5 text-sm font-bold hover:bg-[#03a941] hover:text-white transition-colors duration-200" href=""><MailIcon className="size-4" />Contactar</a>
                    </footer>
                </div>
                <div className="group overflow-hidden border rounded-xl border-gray-300 transition-all duration-200 hover:shadow-lg">
                    <section className="relative aspect-square overflow-hidden">
                        <img className="group-hover:scale-105 w-full h-full object-cover transition-transform duration-200 rounded-t-xl" src="src/assets/bolso.png" alt="Artesanías" />
                        <p className="absolute top-3 right-3 text-white bg-[#03a941] rounded-full px-3 py-1 text-xs">Artesanías</p>
                    </section>
                    <header className="p-5 space-y-2">
                        <h3 className="font-medium group-hover:text-[#03a941] transition-colors duration-200">Bolso Artesanal de Cuero</h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <p>María González</p>
                            <span>•</span>
                            <p className="flex items-center gap-1"><MapPinIcon className="size-4" /> Bogotá</p>
                        </div>
                    </header>
                    <footer className="flex items-center justify-between px-5 pb-5">
                        <p className="text-[#03a941] font-bold text-xl">$180.000</p>
                        <a className="flex items-center gap-2 border border-gray-300 rounded-lg px-3.5 py-1.5 text-sm font-bold hover:bg-[#03a941] hover:text-white transition-colors duration-200" href=""><MailIcon className="size-4" />Contactar</a>
                    </footer>
                </div>
                <div className="group overflow-hidden border rounded-xl border-gray-300 transition-all duration-200 hover:shadow-lg">
                    <section className="relative aspect-square overflow-hidden">
                        <img className="group-hover:scale-105 w-full h-full object-cover transition-transform duration-200 rounded-t-xl" src="src/assets/bolso.png" alt="Artesanías" />
                        <p className="absolute top-3 right-3 text-white bg-[#03a941] rounded-full px-3 py-1 text-xs">Artesanías</p>
                    </section>
                    <header className="p-5 space-y-2">
                        <h3 className="font-medium group-hover:text-[#03a941] transition-colors duration-200">Bolso Artesanal de Cuero</h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <p>María González</p>
                            <span>•</span>
                            <p className="flex items-center gap-1"><MapPinIcon className="size-4" /> Bogotá</p>
                        </div>
                    </header>
                    <footer className="flex items-center justify-between px-5 pb-5">
                        <p className="text-[#03a941] font-bold text-xl">$180.000</p>
                        <a className="flex items-center gap-2 border border-gray-300 rounded-lg px-3.5 py-1.5 text-sm font-bold hover:bg-[#03a941] hover:text-white transition-colors duration-200" href=""><MailIcon className="size-4" />Contactar</a>
                    </footer>
                </div>
                <div className="group overflow-hidden border rounded-xl border-gray-300 transition-all duration-200 hover:shadow-lg">
                    <section className="relative aspect-square overflow-hidden">
                        <img className="group-hover:scale-105 w-full h-full object-cover transition-transform duration-200 rounded-t-xl" src="src/assets/bolso.png" alt="Artesanías" />
                        <p className="absolute top-3 right-3 text-white bg-[#03a941] rounded-full px-3 py-1 text-xs">Artesanías</p>
                    </section>
                    <header className="p-5 space-y-2">
                        <h3 className="font-medium group-hover:text-[#03a941] transition-colors duration-200">Bolso Artesanal de Cuero</h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <p>María González</p>
                            <span>•</span>
                            <p className="flex items-center gap-1"><MapPinIcon className="size-4" /> Bogotá</p>
                        </div>
                    </header>
                    <footer className="flex items-center justify-between px-5 pb-5">
                        <p className="text-[#03a941] font-bold text-xl">$180.000</p>
                        <a className="flex items-center gap-2 border border-gray-300 rounded-lg px-3.5 py-1.5 text-sm font-bold hover:bg-[#03a941] hover:text-white transition-colors duration-200" href=""><MailIcon className="size-4" />Contactar</a>
                    </footer>
                </div>
            </article>
        </section>
    )
}
