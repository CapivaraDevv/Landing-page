import cafeImage from '../assets/xicara-de-cafe-em-um-prato.png'
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
            <section className="w-full h-230 bg-[#F5EFE6] content-center">
                <div className="mx-auto max-w-6xl px-4 py-30 flex items-center">
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
                    <div className="imagem">
                        <img src={cafeImage} alt="Xícara de café" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero