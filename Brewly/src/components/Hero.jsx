import cafeImage from '../assets/xicara-de-cafe-em-um-prato.png'
import imagemFundo from '../assets/Fundo.jpg'
import '../styles/Hero.css'

function Hero() {
    return (
        <>
            <section className="w-full h-150 pt-10 bg-[#5e4b3e] content-center">
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
                    <div className="relative w-52 h-52 flex justify-center items-end">
                        <img src={cafeImage} alt="Xícara de café Brewly" className="w-52" />

                        {/* Container de fumaça */}
                        <div className="absolute bottom-42 left-1/2 -translate-x-1/2 w-full h-full">
                            <span className="fumaça offset-left delay-0"></span>
                            <span className="fumaça offset-center delay-200"></span>
                            <span className="fumaça offset-right delay-400"></span>
                            <span className="fumaça offset-left delay-600"></span>
                            <span className="fumaça offset-center delay-800"></span>
                            <span className="fumaça offset-right delay-1000"></span>
                        </div>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center'>
                    <div className='mx-auto'>
                        <h1 className='bg-amber-100 rounded-full mx-7'>+ 50</h1>
                        <h3 className=''>Produtos vendidos</h3>
                    </div>
                    <div className=''>
                        <img src="" alt="" className='bg-amber-100 rounded-full p-4'/>
                    </div>
                    <div className=''>
                        <img src="" alt="" className='bg-amber-100 rounded-full p-4'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero