import React, { useState, useEffect } from 'react';
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
    const [fade, setFade] = useState(true);

    const changeFeedback = (newIndex) => {
        setFade(false);
        setTimeout(() => {
            setIndex(newIndex);
            setFade(true);
        }, 300);
    };

    const prevFeedback = () => {
        changeFeedback(index === 0 ? feedback.length - 1 : index - 1);
    };

    const nextFeedback = () => {
        changeFeedback(index === feedback.length - 1 ? 0 : index + 1);
    };

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

                <div className="max-w-4xl mx-auto px-4 py-5 text-center flex-col items-center justify-center bg-[#ffffff] rounded-lg">
                    <div className={`text-[#856a59] mb-4 fade-feedback feedback-card ${fade ? 'fade-in' : 'fade-out'}`}>
                        <h3 className="playfair-display-texto text-[#4e392c] text-2xl">{feedback[index].cliente}</h3>
                        <div className='flex justify-center mb-2'>
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < feedback[index].estrelas ? "text-yellow-400" : "text-gray-300"}>★</span>
                            ))}
                        </div>
                        <p className="italic t">{feedback[index].texto}</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={prevFeedback} className="bg-[#856a59] text-white px-3 py-1 rounded hover:bg-[#a68a6d] transition-colors">&lt;</button>
                        <button onClick={nextFeedback} className="bg-[#856a59] text-white px-3 py-1 rounded hover:bg-[#a68a6d] transition-colors">&gt;</button>
                    </div>
                </div>

            </section>

        </>
    );
}

export default About