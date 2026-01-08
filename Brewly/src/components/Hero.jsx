import cafeImage from '../assets/Cafe.jpg'
import { motion } from 'framer-motion'
import '../styles/Hero.css'

const cardVariants = {
    offScreen: { opacity: 0, y: 20 },
    onScreen: {
        opacity: 1,
        y: 0,
        transition: { bounce: 0.4, duration: 0.8 },
    },
}

function Hero() {


    return (
        <>
            <section className="w-full h-250 bg-[#F5EFE6] content-center">
                <div className="mx-auto max-w-6xl px-4 flex items-center mb-15">
                    <motion.div
                        variants={cardVariants}
                        initial="offScreen"
                        whileInView="onScreen"
                        className="text-[#2B2B2B] text-center md:text-left max-w-xl mx-auto"
                    >
                        <h2 className="playfair-display-texto text-4xl md:text-5xl font-semibold mb-4">
                            Conheça a <span className="font-pacifico">Brewly</span>
                        </h2>
                        <p className="text-lg md:text-xl">
                            A <span className="font-pacifico">Brewly</span> é uma empresa que traz conforto e uma explosão de sabores
                            em seus produtos, tornando cada um de nossos produtos uma experiência fantástica.
                        </p>
                    </motion.div>
                </div>
                <div className="grid grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4">
                    {/* Coluna 1: Imagem com Texto sobreposto */}
                    <div className="relative w-full h-[300px]">
                        <div className="imagem overflow-hidden rounded-lg w-full h-full relative">
                            <img
                                src={cafeImage}
                                alt="Xícara de café"
                                className="block w-full h-full object-cover"
                            />
                            <div className='absolute inset-0 rounded-lg w-full z-10 bg-black/55'></div>
                            
                            {/* Texto sobreposto à imagem */}
                            <h1 className='
                                absolute inset-0 z-20 flex items-center justify-center
                                text-[80px] font-black uppercase bg-clip-text 
                                text-transparent text-image hover:text-white 
                                transition-all duration-400 ease-in-out
                                '
                                style={{ backgroundImage: `url(${cafeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                Coffee
                            </h1>
                        </div>
                    </div>

                    {/* Coluna 2: Conteúdo adicional (opcional) */}
                    <div className="flex flex-col gap-4">
                        {/* Adicione mais conteúdo aqui se necessário */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero