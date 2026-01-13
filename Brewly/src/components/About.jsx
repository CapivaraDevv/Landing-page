import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import '../styles/About.css'

const feedback = [
    {
        id: 1,
        cliente: "Pedro",
        texto: "Nota 10 como sempre, graças a Brewly minhas manhãs são mais felizes.",
        estrelas: 5
    },
    {
        id: 2,
        cliente: "Gabriel",
        texto: "Uma loja espetacular, sempre com os melhores produtos.",
        estrelas: 4
    },
    {
        id: 3,
        cliente: "Wesley",
        texto: "Produtos excelentes, nunca provei um café tão bom quanto.",
        estrelas: 5
    }
];

function About() {
    const [index, setIndex] = useState(0);

    const prevFeedback = () => {
        setIndex(prev => (prev === 0 ? feedback.length - 1 : prev - 1));
    };

    const nextFeedback = () => {
        setIndex(prev => (prev === feedback.length - 1 ? 0 : prev + 1));
    };

    const underlineVariants = {
        offScreen: { scaleX: 0 },
        onScreen: {
            scaleX: 1,
            transition: { duration: 1.5, ease: "easeOut" }
        },
    }


    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev === feedback.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, []);



    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                id="sobre" className="bg-linear-to-b from-[#F5EFE6] to-[#EFE6DA]
                text-[#2B2B2B] py-20 grid md:grid-cols-2 gap-3"
            >
                <div className="max-w-4xl mx-auto px-4  text-center ">
                    <h2 className="playfair-display-texto text-4xl md:text-5xl tracking-wider mb-5">Um pouco sobre nossa história</h2>
                    <motion.div
                        variants={underlineVariants}
                        initial="offScreen"
                        whileInView="onScreen"
                        className="w-32 h-0.5 origin-left bg-[#C19A6B] mx-auto mb-4"
                    />
                    <p className="playfair-display-texto text-lg">
                        A <span className="font-pacifico">Brewly</span> nasceu da paixão pelo café e pelo desejo de proporcionar experiências únicas.
                        Selecionamos os melhores grãos e criamos receitas especiais para encantar nossos clientes.
                        Nosso compromisso é com a qualidade, o sabor e o conforto em cada xícara.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 5, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-white rounded-xl p-6 shadow-lg shadow-black/5 max-w-md flex flex-col items-center gap-4"
                        >
                            <h3 className="playfair-display-texto text-[#4e392c] text-2xl font-semibold">
                                {feedback[index].cliente}
                            </h3>

                            <div className="flex justify-center mb-2 gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        className={i < feedback[index].estrelas ? "text-yellow-400 drop-shadow-sm" : "text-gray-300"}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        ★
                                    </motion.span>
                                ))}
                            </div>

                            <p className="italic text-gray-600 leading-relaxed max-w-sm">{feedback[index].texto}</p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Botões de navegação */}
                    <div className="flex gap-3 mt-4">
                        <motion.button
                            onClick={prevFeedback}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ backgroundColor: "#C19A6B" }}
                            className="bg-[#856a59] text-white flex items-center justify-center
                                        w-9 h-9 rounded-full cursor-pointer shadow-sm transition-all
                            "
                        >
                            &lt;
                        </motion.button>

                        <motion.button
                            onClick={nextFeedback}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ backgroundColor: "#C19A6B" }}
                            className="bg-[#856a59] text-white flex items-center justify-center
                                         w-9 h-9 rounded-full cursor-pointer shadow-sm transition-all
                            "
                        >
                            &gt;
                        </motion.button>
                    </div>
                </div>
            </motion.section>
        </>
    );
}

export default About;
