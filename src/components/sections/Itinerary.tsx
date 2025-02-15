import animation from '@/src/styles/Animation.module.css'

export default function Itinerary() {
    return (
        <section className="bg-gradient-to-b from-transparent to-blue-300 p-8">
            <section>
                <h3 className={`${animation.title} title2xl`}>Ceremonia</h3>
                <h4 className={`${animation.title} title2xl`}>Día</h4>
                <p className={`${animation.title} titleXl`}>20 Diciembre 2025</p>
                {/* Boton para añadir a calendario */}
                <h4 className={`${animation.title} title2xl`}>Lugar</h4>
                <p className={`${animation.title} titleXl`}>Santuario de San Expedito</p>
                {/* Boton hacia formulario de confirmación */}
                <h4 className={`${animation.title} title2xl`}>Dirección</h4>
                <p className={`${animation.title} titleXl`}>Bartolome Mitre 2411</p>
                {/* Boton como llegar */}
            </section>
            <section>
                <h2 className={`${animation.title} title2xl`}>Fiesta</h2>
                <h4 className={`${animation.title} title2xl`}>Día</h4>
                <p className={`${animation.title} titleXl`}>20 Diciembre 2025 - 20hs</p>
                {/* Boton para agendar */}
                <h4 className={`${animation.title} title2xl`}>Lugar</h4>
                <p className={`${animation.title} titleXl`}>Salón de fiestas</p>
                {/* Boton hacia formulario de confirmación */}
                <h4 className={`${animation.title} title2xl`}>Dirección</h4>
                <p className={`${animation.title} titleXl`}>Calle falsa 123</p>
                {/* Boton como llegar */}
            </section>
        </section>
    )
} 