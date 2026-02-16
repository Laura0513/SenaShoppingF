import { Link } from 'react-router-dom'

export default function Entrepreneur() {
    return (
        <section className="relative h-full w-full transform py-16 bg-linear-to-br from-[#00a347] via-[#00d65f] to-[#00a347]">
            <article className="flex flex-col items-center justify-center gap-5">
                <h2 className="text-3xl font-bold text-white">¿Eres emprendedor SENA?</h2>
                <p className="text-white font-light">Únete a nuestra comunidad y muestra tus productos a miles de personas</p>
                <Link to="/login" className="py-3 px-5 rounded-xl flex items-center gap-1 text-[#03a741] font-bold bg-white hover:opacity-80 backdrop-blur-sm transition-all duration-200 text-sm">Comenzar a vender</Link>
            </article>
        </section>
    )
}
