import { LockIcon, MailIcon, MoveLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <section className="flex flex-col w-full h-dvh p-3">
            <article className="inline-flex items-center">
                <Link to="/" className="flex items-center gap-2 text-sm text-black font-bold border-gray-300 rounded-lg py-2 px-3 hover:text-[#03a741] transition-colors duration-200">
                    <MoveLeftIcon className="size-4" />
                    Volver al inicio
                </Link>
            </article>
            <article className="space-y-7 max-w-4xl mx-auto">
                <header className="flex flex-col items-center">
                    <img src="src/assets/logosena.png" alt="Logo SENA" className="size-20" />
                    <h1 className="font-bold text-2xl py-1 pt-4">Bienvenido a SenaShopping</h1>
                    <p className="text-gray-500">Conecta con emprendedores colombianos</p>
                </header>
                <form action="" className="flex flex-col items-center text-sm border rounded-xl border-gray-300 p-5 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="ml-1 font-bold">Correo Eléctronico</label>
                        <div className="relative w-full">
                            <MailIcon className="absolute text-gray-500 top-1/2 left-3 transform -translate-y-1/2 size-4" />
                            <input type="email" placeholder="samuelc@mail.com" className="py-2 px-9 border border-gray-200 rounded-full w-md hover:border-[#3b5a42] transition-colors duration-200 focus:border-[#03a941] focus:ring-2 focus:ring-[#03a941]/20 outline-none text-sm bg-white" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="ml-1 text-sm font-bold">Contraseña</label>
                        <div className="relative w-full">
                            <LockIcon className="absolute text-gray-500 top-1/2 left-3 transform -translate-y-1/2 size-4" />
                            <input type="text" placeholder="••••••••" className="py-2 px-9 border border-gray-200 rounded-full w-md hover:border-[#3b5a42] transition-colors duration-200 focus:border-[#03a941] focus:ring-2 focus:ring-[#03a941]/20 outline-none text-sm bg-white" />
                        </div>
                    </div>
                </form>
            </article>
        </section>
    )
}
