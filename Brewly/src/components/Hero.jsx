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

                        {/* Fumaças */}
                        <div className='absolute top-10 left-1/2 -translate-x-1/2'>
                            {/* Meio */}
                            <div>
                                <span className='fumaça delay-0'></span>
                                <span className='fumaça delay-300'></span>
                                <span className='fumaça right-8 delay-600'></span>
                            </div>
                            {/* Esquerda */}
                            <div className='fumaça-esquerda absolute top-8'>
                                <span className='fumaça delay-0'></span>
                                <span className='fumaça delay-300'></span>
                                <span className='fumaça right-8 delay-600'></span>
                            </div>
                            {/* Direita */}
                            <div className='fumaça-direita absolute top-8'>
                                <span className='fumaça delay-0'></span>
                                <span className='fumaça delay-300'></span>
                                <span className='fumaça right-8 delay-600'></span>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Hero