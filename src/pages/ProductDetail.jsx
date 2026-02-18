import { Link } from 'react-router-dom'
import { MapPinIcon, MoveLeftIcon, PackageIcon, ShieldIcon, KeySquareIcon, MailIcon } from 'lucide-react'

export default function ProductDetail() {
    return (
        <section>
            <article className="inline-flex items-center p-7">
                <Link to="/" className="flex items-center gap-2 text-sm text-black font-bold hover:text-[#03a741] transition-colors duration-200">
                    <MoveLeftIcon className="size-4" />
                    Volver a productos
                </Link>
            </article>
            <article className="grid grid-cols-2 gap-8 w-full px-4">
                <div className='aspect-square overflow-hidden rounded-xl'>
                    <img className="w-full h-full object-cover" src="src/assets/bolso.png" alt="Artesanías" />
                </div>
                <div className="space-y-5">
                    <div className="space-y-5">
                        <p className="inline-flex text-[#03a741] bg-[#e5f5ec] font-bold rounded-full px-3 py-1 text-xs">Artesanías</p>
                        <h1 className='font-bold text-3xl'>Bolso Artesanal de Cuero</h1>
                        <h2 className='font-bold text-[#03a741] text-4xl'>$180.000</h2>
                        <p className="flex items-center gap-1 text-sm text-gray-500 "><PackageIcon className="size-4 text-gray-500" />5 unidades disponibles</p>
                        <p className="flex items-center gap-1 text-sm text-gray-500 "><ShieldIcon className="size-4 text-[#03a741]" />Producto respaldado por SENA</p>
                    </div>
                    <div className="flex flex-col items-start bg-[#DCFCE7] gap-3 p-5 group overflow-hidden border rounded-xl border-gray-300 transition-all duration-200 hover:shadow-lg">
                        <section className="">
                            <h3 className="font-bold" >Emprendedor</h3>
                        </section>
                        <section className="flex items-center gap-5">
                            <div className="bg-white rounded-full p-1 relative aspect-square overflow-hidden">
                                <img src="src/assets/carla.png" alt="" className="w-20 h-20 object-cover rounded-full" />
                            </div>
                            <div className="flex flex-col justify-center gap-2">
                                <p className="font-bold">María González</p>
                                <p className="flex items-center gap-1 text-gray-500 text-sm "><MapPinIcon className="size-4" />Bogotá</p>
                                <p className="flex items-center gap-1 text-gray-500 text-sm "><PackageIcon className="size-4 text-gray-500" />23 productos</p>
                            </div>
                        </section>
                    </div>
                    <Link to="#" className="flex items-center justify-center gap-3 w-full bg-[#03a741] rounded-lg py-3 text-white text-sm font-bold hover:bg-[#029436] transition-colors duration-200" href=""><MailIcon className="size-4" />Contactar emprendedor</Link>
                    <div className="grow border-t border-gray-200"></div>
                    <div className="space-y-3">
                        <h4 className="font-bold">Descripción</h4>
                        <p className="text-gray-500 text-md">Bolso artesanal elaborado 100% en cuero genuino. Cada pieza es única y hecha a mano por artesanos colombianos. Incluye compartimentos internos y cierre de seguridad. Perfecto para uso diario o eventos especiales.</p>
                    </div>
                    <div className="grow border-t border-gray-200"></div>
                    <div className='space-y-3 text-sm'>
                        <h4 className="font-bold text-base">Especificaciones</h4>
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                            <p className="text-gray-500">Material</p>
                            <p>Cuero genuino</p>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                            <p className="text-gray-500">Dimensiones</p>
                            <p>30cm x 25cm x 10cm</p>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                            <p className="text-gray-500">Color</p>
                            <p>Marrón natural</p>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                            <p className="text-gray-500">Peso</p>
                            <p>0.8 kg</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
