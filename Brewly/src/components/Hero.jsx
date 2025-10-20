import cafeImage from '../assets/xicara-de-cafe-em-um-prato.png'
import imagemFundo from '../assets/Fundo.jpg'
import '../styles/Hero.css'

function Hero() {
    return (
        <>
            <section className="w-full pt-10 bg-[#5e4b3e] ">
                <div className="mx-auto max-w-6xl px-4 py-30 flex items-center">
                    <div className="text-white text-center md:text-left max-w-xl mx-auto">
                        <h2 className="playfair-display-texto text-4xl md:text-5xl font-semibold mb-4">
                            Conheça a <span className="font-pacifico">Brewly</span>
                        </h2>
                        <p className="text-lg md:text-xl">
                            A <span className="font-pacifico">Brewly</span> é uma empresa que traz conforto e uma explosão de sabores
                            em seus produtos, tornando cada um de nossos produtos uma experiência fantástica.
                        </p>
                    </div>
                    <div className='relative'>
                        <img src={cafeImage} alt="Xicára de café brewly" className='w-52' id='cafeAnimation' />

                        {/* Fumaças de baixo */}
                        <div className='absolute top-[1.5rem] left-1/2 transform -translate-x-1/2 w-2 h-8 bg-white/40 rounded-full animate-smoke-down'></div>

                        <div className='absolute top-[1rem] left-1/3 transform -translate-x-1/2 w-1.5 h-6 bg-white/30 rounded-full animate-smoke-down delay-50'></div>

                        <div className='absolute top-[1rem] right-1/3 transform -translate-x-1/3 w-1.5 h-6 bg-white/30 rounded-full animate-smoke-down delay-50'></div>

                        {/* Fumaças de cima */}
                        <div className='absolute top-[-1rem] left-1/3 transform -translate-x-1/2 w-1 h-4 bg-white/10 rounded-full animate-smoke-up delay-100'></div>

                        <div className='absolute top-[-0.5rem] left-1/2 transform -translate-x-1/2 w-1 h-4 bg-white/20 rounded-full animate-smoke-up delay-75'></div>

                        <div className='absolute top-[-1rem] right-1/3 transform -translate-x-1/2 w-1 h-4 bg-white/10 rounded-full animate-smoke-up delay-100'></div>
                
                    </div>
                
                </div>

            </section>
        </>
    )
}

export default Hero