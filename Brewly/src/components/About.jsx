import React, { useState, useEffect } from 'react';
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

    // Auto-advance a cada 4s
    useEffect(() => {
        const timer = setTimeout(() => {
            nextFeedback();
        }, 4000);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <>
            <section id="sobre" className="bg-[#5e4b3e] text-[#f6eee3] py-20 grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
                <div className="max-w-4xl mx-auto px-4 text-center ">
                    <h2 className="playfair-display-texto text-3xl mb-5">Um pouco sobre nossa história</h2>
                    <p className="playfair-display-texto text-lg">
                        A <span className="font-pacifico">Brewly</span> nasceu da paixão pelo café e pelo desejo de proporcionar experiências únicas.
                        Selecionamos os melhores grãos e criamos receitas especiais para encantar nossos clientes.
                        Nosso compromisso é com a qualidade, o sabor e o conforto em cada xícara.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-5 text-center flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index} // faz o Motion perceber a troca de feedback
                            initial={{ opacity: 0, y: 5, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center gap-4"
                        >
                            <h3 className="playfair-display-texto text-[#4e392c] text-2xl font-semibold">
                                {feedback[index].cliente}
                            </h3>

                            <div className="flex justify-center mb-2 gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        className={i < feedback[index].estrelas ? "text-yellow-400" : "text-gray-300"}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        ★
                                    </motion.span>
                                ))}
                            </div>

                            <p className="italic text-gray-700">{feedback[index].texto}</p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Botões de navegação */}
                    <div className="flex gap-3 mt-4">
                        <motion.button
                            onClick={prevFeedback}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ backgroundColor: "#a68a6d" }}
                            className="bg-[#856a59] text-white px-3 py-1 rounded-md shadow-sm transition-colors"
                        >
                            &lt;
                        </motion.button>

                        <motion.button
                            onClick={nextFeedback}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ backgroundColor: "#a68a6d" }}
                            className="bg-[#856a59] text-white px-3 py-1 rounded-md shadow-sm transition-colors"
                        >
                            &gt;
                        </motion.button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
