import { ArrowRightIcon, SparklesIcon } from "lucide-react";

export default function Hero() {
    return (
       <main className="relative -z-10 h-full w-full transform bg-linear-to-br from-[#00a347] via-[#00d65f] to-[#00a347]">
            <div className="flex flex-col items-center justify-center gap-8 h-[calc(100vh-80px)] w-full">
                <p className="py-2 px-4 border border-transparent rounded-full flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm text-sm"><SparklesIcon className="size-4 text-yellow-200" />Impulsando el talento Colombiano</p>
                <header className="w-1/2 text-6xl text-white font-bold text-center">
                    <h1>Descubre productos únicos creados por <span className="text-yellow-200">emprendedores SENA</span></h1>
                </header>
                <p className="text-white w-2/4 text-center">Conecta directamente con aprendices y egresados que están transformando sus ideas en productos
                    extraordinarios. Cada compra apoya el talento nacional.</p>
                <section className="flex gap-4">
                    <a className="py-3 px-5 rounded-xl flex items-center gap-2 text-[#016630] bg-white font-bold text-sm" href="">Explorar productos <ArrowRightIcon className="size-5" /></a>
                    <a className="py-3 px-5 border border-white rounded-xl flex items-center gap-1 text-white font-bold text-sm" href="">Vender mis productos</a>
                </section>
            </div>
        </main>
    )
}
