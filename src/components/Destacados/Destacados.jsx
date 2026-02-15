import { MailIcon, MapPinIcon } from "lucide-react";

export default function Destacados() {
    return (
        <section className="px-4 pb-16">
            <header className="flex flex-col items-center justify-center pt-16 pb-10 gap-2">
                <h2 className="text-3xl font-bold">Productos Destacados</h2>
                <p className="text-gray-600">Descubre lo mejor del talento colombiano</p>
            </header>
            <article className="grid grid-cols-3 gap-8">
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
                        <img className="group-hover:scale-105 w-full h-full object-cover transition-transform duration-200 rounded-t-xl" src="src/assets/camisa.png" alt="Artesanías" />
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
                        <img className="group-hover:scale-105 w-full h-full object-cover transition-transform duration-200 rounded-t-xl" src="src/assets/maleta.png" alt="Artesanías" />
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
