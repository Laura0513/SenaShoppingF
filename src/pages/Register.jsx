import { KeySquareIcon, ListChevronsUpDownIcon, LockIcon, LogInIcon, MailIcon, MoveLeftIcon, UserRoundIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Register() {
    return (
        <section className="flex flex-col w-full min-h-dvh p-3">
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
                <form className="flex flex-col items-center text-sm border rounded-xl border-gray-300 px-6 py-5 gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="ml-1 text-sm font-bold">Nombre completo</label>
                        <div className="relative w-full">
                            <UserRoundIcon className="absolute text-gray-500 top-1/2 left-3 transform -translate-y-1/2 size-4" />
                            <input type="text" placeholder="Ingresa tu nombre" className="py-2 px-9 border border-gray-200 rounded-lg w-md hover:border-[#3b5a42] transition-colors duration-200 focus:border-[#03a941] focus:ring-2 focus:ring-[#03a941]/20 outline-none text-sm bg-white" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="ml-1 font-bold">Correo Eléctronico</label>
                        <div className="relative w-full">
                            <MailIcon className="absolute text-gray-500 top-1/2 left-3 transform -translate-y-1/2 size-4" />
                            <input type="email" placeholder="samuelc@mail.com" className="py-2 px-9 border border-gray-200 rounded-lg w-md hover:border-[#3b5a42] transition-colors duration-200 focus:border-[#03a941] focus:ring-2 focus:ring-[#03a941]/20 outline-none text-sm bg-white" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="ml-1 text-sm font-bold">Contraseña</label>
                        <div className="relative w-full">
                            <LockIcon className="absolute text-gray-500 top-1/2 left-3 transform -translate-y-1/2 size-4" />
                            <input type="password" placeholder="••••••••" className="py-2 px-9 border border-gray-200 rounded-lg w-md hover:border-[#3b5a42] transition-colors duration-200 focus:border-[#03a941] focus:ring-2 focus:ring-[#03a941]/20 outline-none text-sm bg-white" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="ml-1 text-sm font-bold">Tipo de Usuario</label>
                        <div className="relative w-full">
                            <ListChevronsUpDownIcon className="absolute text-gray-500 top-1/2 left-3 transform -translate-y-1/2 size-4" />
                            <select name="desplegable" id="desplegable" className="py-2 px-9 border border-gray-200 rounded-lg w-md hover:border-[#3b5a42] transition-colors duration-200 focus:border-[#03a941] focus:ring-2 focus:ring-[#03a941]/20 outline-none text-sm bg-white">
                                <option value="1">Selecciona una opción</option>
                                <option value="1">Comprador</option>
                                <option value="2">Emprendedor</option>
                            </select>
                        </div>
                    </div>
                    <section className="flex items-center justify-end w-full">
                        <a href="" className="text-end text-xs font-medium text-gray-500 hover:text-[#03a741] transition-colors duration-200">¿Olvidaste tu contraseña?</a>
                    </section>
                    <button type="submit" className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[#03a741] text-white font-bold hover:bg-[#029436] transition-colors duration-200 text-sm"><KeySquareIcon className="size-4" />
                        Crear cuenta
                    </button>
                    <div className="flex items-center w-full">
                        <div className="grow border-t border-gray-400"></div>
                        <span className="mx-4 text-xs text-gray-600">¿Ya tienes cuenta?</span>
                        <div className="grow border-t border-gray-400"></div>
                    </div>
                    <Link to="/login" className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 text-sm font-bold hover:text-[#03a741] transition-colors duration-200" href=""><LogInIcon className="size-4" />Iniciar Sesión</Link>
                </form>
            </article>
        </section>
    )
}
