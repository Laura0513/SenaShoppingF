import { Link } from 'react-router-dom'
import { MoveLeftIcon, MapPinIcon, MailIcon, PackageIcon } from 'lucide-react'

export default function EntrepreneurProfile() {
    return (
        <section className="bg-[#ECFDF5]">
            <article className="inline-flex items-center p-7">
                <Link to="/entrepreneurs" className="flex items-center gap-2 text-sm text-black font-bold hover:text-[#03a741] transition-colors duration-200">
                    <MoveLeftIcon className="size-4" />
                    Volver a emprendedores
                </Link>
            </article>
            <article className="flex items-start gap-8 w-full px-4 pb-10">
                <div className="group overflow-hidden border rounded-xl border-gray-300 transition-all duration-200 hover:shadow-lg w-1/3">
                    <section className="flex flex-col items-center justify-center py-5 bg-white gap-3">
                        <div className="bg-white rounded-full p-1 relative aspect-square overflow-hidden">
                            <img src="src/assets/carla.png" alt="" className="w-30 h-30 object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <p className="font-bold">María González</p>
                            <p className="flex items-center gap-1 text-gray-500 text-sm "><MapPinIcon className="size-3" />Bogotá</p>
                            <p className="text-[#03a741] bg-[#e5f5ec] rounded-full px-3 py-1 text-sm font-bold">Artesanías</p>
                        </div>
                    </section>
                    <section className="pt-5 px-5 space-y-4 bg-white">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-500 text-sm">Productos</p>
                            <p className="flex items-center gap-1 font-bold text-sm"><PackageIcon className="size-4 text-gray-500" />23</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-500 text-sm">Miembro desde</p>
                            <p className="text-sm font-bold">Enero 2023</p>
                        </div>
                    </section>
                    <footer className="p-5 bg-white">
                        <Link to="/" className="flex items-center justify-center gap-2 rounded-lg px-3.5 py-1.5 text-white text-sm font-bold bg-[#03a941] hover:bg-[#029436]  transition-colors duration-200" href=""><MailIcon className="size-4" />Contactar</Link>
                    </footer>
                </div>
                <div className="bg-white space-y-4 border rounded-xl border-gray-300 w-2/3 p-6">
                    <h2 className="font-bold text-xl">Sobre mí</h2>
                    <p className="text-gray-500 text-md ">Apasionada por las artesanías en cuero desde hace más de 10 años. Cada pieza que creo cuenta una historia y refleja la riqueza cultural de Colombia. Mi formación en el SENA me permitió profesionalizar mi oficio y llevar mis productos a más personas.</p>
                    <h3 className="font-bold">Especialidades</h3>
                    <div className="flex items-center gap-2">
                        <p className="text-black font-medium bg-[#B9F8CF] rounded-full px-3 py-1 text-xs">Cuero</p>
                        <p className="text-black font-medium bg-[#B9F8CF] rounded-full px-3 py-1 text-xs">Marroquinería</p>
                        <p className="text-black font-medium bg-[#B9F8CF] rounded-full px-3 py-1 text-xs">Accesorios</p>
                    </div>
                </div>
            </article>
            <article className="bg-white p-4">
                <header className="flex flex-col items-center justify-center py-10 gap-2">
                    <h2 className="text-3xl font-bold">Productos de María González</h2>
                </header>
                <article className="grid grid-cols-4 gap-8">
                    <Link to="/productDetail" className="group overflow-hidden border rounded-xl border-gray-300 transition-all duration-200 hover:shadow-lg">
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
                    </Link>
                </article>
            </article>
        </section>
    )
}
