import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
       <section className="relative h-full w-full transform bg-linear-to-br from-[#00a347] via-[#00d65f] to-[#00a347]">
            <article className="flex flex-col items-center justify-center gap-8 h-[calc(100vh-80px)] w-full">
                <p className="py-2 px-4 border border-transparent rounded-full flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm text-sm"><SparklesIcon className="size-4 text-yellow-200" />Impulsando el talento Colombiano</p>
                <header className="w-1/2 text-6xl text-white font-bold text-center">
                    <h1>Descubre productos únicos creados por <span className="text-yellow-200">emprendedores SENA</span></h1>
                </header>
                <p className="text-white w-2/4 text-center">Conecta directamente con aprendices y egresados que están transformando sus ideas en productos
                    extraordinarios. Cada compra apoya el talento nacional.</p>
                <section className="flex gap-4">
                    <Link to="/productos" className="py-3 px-5 rounded-xl flex items-center gap-2 text-[#016630] bg-white hover:opacity-80 backdrop-blur-sm transition-all duration-200 font-bold text-sm cursor-pointer group" href="">Explorar productos <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform duration-200" /></Link>
                    <Link to="/login" className="py-3 px-5 border border-white rounded-xl flex items-center gap-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 text-white font-bold text-sm" href="">Vender mis productos</Link>
                </section>
            </article>
        </section>
    )
}
