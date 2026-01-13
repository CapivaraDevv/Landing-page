import cafeImage from '../assets/Cafe.jpg'
import cafeImage2 from '../assets/Cafe-hero.jpg'
import cafeImage3 from '../assets/Cappucino.jpg'
import { motion } from 'framer-motion'
import '../styles/Hero.css'

const variants = {
    offScreen: { opacity: 0, x: -50},
    onScreen: {
        opacity: 1,
        x: 0,
        transition: {
            bounce: 0.4,
            duration: 0.8,
        }

    },
}

function ProductsCard() {

    return (
        <>
            <motion.div
                variants={variants}
                initial="offScreen"
                whileInView="onScreen"
                className="grid grid-cols-3 gap-4 items-center 
                max-w-8xl mx-auto px-7 p-8 mt-22 mb-26"
            >
                {/* Coluna 1: Imagem com Texto sobreposto */}
                <div className="relative w-full h-[300px] hover:scale-102 transition-all duration-400 ease-in-out">
                    <div className="imagem overflow-hidden rounded-lg w-full h-full relative">
                        <img
                            src={cafeImage}
                            alt="Latte"
                            className="block w-full h-full object-cover"
                        />
                        <div className='absolute inset-0 rounded-lg w-full z-10 bg-black/55'></div>

                        {/* Texto sobreposto à imagem */}
                        <h1 className='
                                absolute inset-0 z-20 flex items-center justify-center
                                text-[80px] font-black uppercase bg-clip-text 
                                text-transparent text-image hover:text-white 
                                transition-all duration-400 ease-in-out
                                cursor-pointer
                                '
                            style={{ backgroundImage: `url(${cafeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            Latte
                        </h1>
                    </div>
                </div>

                {/* Coluna 2: Conteúdo adicional (opcional) */}
                <div className="relative w-full h-[300px] hover:scale-102 transition-all duration-400 ease-in-out">
                    <div className='imagem overflow-hidden rounded-lg w-full h-full relative'>
                        <img
                            src={cafeImage2}
                            alt="Xícara de café"
                            className='block w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 rounded-lg w-full z-10 bg-black/55'></div>

                        <h1 className='
                                absolute inset-0 z-20 flex items-center justify-center
                                text-[80px] font-black uppercase bg-clip-text 
                                text-transparent text-image hover:text-white 
                                transition-all duration-400 ease-in-out
                                cursor-pointer
                                '
                            style={{ backgroundImage: `url(${cafeImage2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            Coffee
                        </h1>
                    </div>
                </div>

                {/* Coluna 3 */}
                <div className="relative w-full h-[300px] hover:scale-102 transition-all duration-400 ease-in-out">
                    <div className='imagem overflow-hidden rounded-lg w-full h-full relative'>
                        <img
                            src={cafeImage3}
                            alt="Xícara de café"
                            className='block w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 rounded-lg w-full z-10 bg-black/55'></div>

                        <h1 className='
                                absolute inset-0 z-20 flex items-center justify-center
                                text-[80px] font-black uppercase bg-clip-text 
                                text-transparent text-image hover:text-white 
                                transition-all duration-400 ease-in-out
                                cursor-pointer
                                '
                            style={{ backgroundImage: `url(${cafeImage3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            Cappucino
                        </h1>
                    </div>
                </div>
            </motion.div>
        </>
    )

}




export default ProductsCard