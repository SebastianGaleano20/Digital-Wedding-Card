import animation from '@/src/styles/Animation.module.css'
import Image from 'next/image'
import { Button } from '../ui/Button'

export default function Itinerary() {
    return (
        <section className="bg-gradient-to-b from-transparent to-blue-300">
            <section className='flex flex-col justify-center items-center gap-2'>
                <Image className={`${animation.title}`} src="/ring.png" width={60} height={60} alt="ring" />
                <section className='ml-5 flex flex-row justify-center items-center gap-2'>
                    <section className='box p-1'>
                        <h3 className={`${animation.title} p-gray text-xl`}>SÁBADO</h3>
                    </section>
                    <section>
                        <h3 className={`${animation.title} text-gray-800 text-6xl mb-2`}>20</h3>
                    </section>
                    <section className='box p-1'>
                        <h3 className={`${animation.title} p-gray text-xl`}>DICIEMBRE</h3>
                    </section>
                </section>
                <h4 className={`${animation.title} p-gray text-xl`}>Lugar</h4>
                <Image className={`${animation.title}`} src="/church.png" width={55} height={55} alt="church" />
                <p className={`${animation.title} elegant text-4xl p-gray`}>Santuario de San Expedito</p>
                <p className={`${animation.title} font-medium text-sm text-gray-800`}>Bartolome Mitre 2411, Balvanera Buenos Aires</p>
                <Button text='CLICK UBICACION' url='https://maps.app.goo.gl/VsDdiuk9moUKYiie9' />
            </section>
            {/* <section>
                <h2 className={`${animation.title} title2xl`}>Fiesta</h2>
                <h4 className={`${animation.title} title2xl`}>Día</h4>
                <p className={`${animation.title} titleXl`}>20 Diciembre 2025 - 20hs</p>
                {/* Boton para agendar */}
            {/* <h4 className={`${animation.title} title2xl`}>Lugar</h4> */}
            {/* <p className={`${animation.title} titleXl`}>Salón de fiestas</p> */}
            {/* Boton hacia formulario de confirmación */}
            {/* <h4 className={`${animation.title} title2xl`}>Dirección</h4> */}
            {/* <p className={`${animation.title} titleXl`}>Calle falsa 123</p> */}
            {/* Boton como llegar */}
            {/* </section> */}
        </section>
    )
} 