import React, { useState } from 'react';
import '../styles/About.css'

const feedback = [
    {
        id: 1,
        cliente: "Pedro",
        texto: "Nota 10 como sempre, graças a Brewly minhas manhãs são mais felizes."
    },
    {
        id: 2,
        cliente: "Gabriel",
        texto: "Uma loja espetacular, sempre com os melhores produtos."
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
                    <div className={`text-[#856a59] mb-4 fade-feedback ${fade ? 'fade-in' : 'fade-out'}`}>
                        <h3 className="playfair-display-texto text-2xl mb-3">{feedback[index].cliente}</h3>
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