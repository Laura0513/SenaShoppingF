import { CircleUserRoundIcon, MailIcon, MapPinIcon, PackageIcon } from "lucide-react";
import { Link } from 'react-router-dom'

export default function Entrepreneurs() {
    return (
        <section className="w-full border-b border-gray-200 bg-white flex flex-col items-center justify-between py-5 px-10 transition-all duration-300">
            <header className="flex flex-col items-center justify-center py-10 gap-2">
                <h1 className="text-3xl font-bold">Emprendedores SENA</h1>
                <p className="text-gray-600">Conoce a los talentosos emprendedores que hacen posible SenaShopping</p>
            </header>
            <article className="grid grid-cols-3 gap-8">
                <div className="group overflow-hidden border rounded-xl border-gray-300 transition-all duration-200 hover:shadow-lg">
                    <section className="flex flex-col items-center justify-center py-5 bg-[#DCFCE7] gap-3">
                        <div className="bg-white rounded-full p-1 relative aspect-square overflow-hidden">
                            <img src="src/assets/carla.png" alt="" className="w-20 h-20 object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <p className="font-bold">María González</p>
                            <p className="flex items-center gap-1 text-gray-500 text-sm "><MapPinIcon className="size-3" />Bogotá</p>
                            <p className="text-white bg-[#03a941] rounded-full px-3 py-1 text-xs">Artesanías</p>
                        </div>
                    </section>
                    <header className="pt-5 px-5 space-y-2">
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <p>Especializada en productos artesanales de cuero con técnicas tradicionales colombianas.</p>
                        </div>
                    </header>
                    <div className="flex items-center justify-between px-5 py-5">
                        <p className="flex items-center gap-1 text-sm "><PackageIcon className="size-4 text-gray-500" />23 productos</p>
                    </div>
                    <footer className="px-5 pb-5">
                        <Link to="/entrepreneurprofile" className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-sm font-bold hover:bg-[#03a941] hover:text-white transition-colors duration-200"><CircleUserRoundIcon className="size-4" />Ver perfil</Link>
                    </footer>
                </div>
            </article>
        </section>
    )
}
