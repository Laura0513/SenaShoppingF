import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <section className="flex items-center justify-around p-12 border-b border-gray-300">
                <article>
                    <img src="src/assets/logosena.png" alt="Logo SENA" className="size-20" />
                </article>
                <article className="space-y-2 text-gray-500 text-sm">
                    <h4 className="font-bold pb-3 text-black text-base">Enlaces Rápidos</h4>
                    <div className="flex flex-col gap-3">
                        <Link to="/productos" className="hover:text-[#03a741]">Productos</Link>
                        <Link to="/entrepreneurs" className="hover:text-[#03a741]">Emprendedores</Link>
                        <Link to="/register" className="hover:text-[#03a741]">Vender</Link>
                    </div>
                </article>
                <article className="space-y-2 text-gray-500 text-sm">
                    <h4 className="font-bold pb-3 text-black text-base">Soporte</h4>
                    <div className="flex flex-col gap-3">
                        <Link to="" className="hover:text-[#03a741]" >Centro de ayuda</Link>
                        <Link to="" className="hover:text-[#03a741]" >Términos y condiciones</Link>
                        <Link to="" className="hover:text-[#03a741]" >Política de privacidad</Link>
                    </div>
                </article>
                <article className="space-y-2 text-gray-500 text-sm">
                    <h4 className="font-bold pb-3 text-black text-base">Contacto</h4>
                    <div className="flex flex-col gap-3">
                        <a href="" className="flex gap-2 items-center"><MailIcon className="size-4 " /> senashopping2025@gmail.com</a>
                        <a href="" className="flex gap-2 items-center"><PhoneIcon className="size-4" /> +57 (601) 5461500</a>
                        <a href="" className="flex gap-2 items-center"><MapPinIcon className="size-4" /> Medellín, Colombia</a>
                    </div>
                </article>
            </section>
            <section className="flex flex-col items-center py-6 gap-2 text-gray-500 text-sm">
                <p>Plataforma digital para dar visibilidad a productos elaborados por emprendedores del SENA.</p>
                <p>© 2026 SenaShopping. Todos los derechos reservados.</p>
            </section>
        </footer>
    )
}
