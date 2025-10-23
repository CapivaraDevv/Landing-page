import '../styles/Products.css'
import { motion } from 'motion/react'
import { useState } from 'react'
import fundo from '../assets/Fundo.jpg'

const produtos = [
    {
        id: 1,
        nome: "Café Expresso",
        preco: "R$22,90",
        imagem: "/src/assets/xicara-de-cafe-em-um-prato.png",
        nota: "Clássico Italiano, intenso e cremoso."
    },
    {
        id: 2,
        nome: "Cappucino",
        preco: "R$36,40",
        imagem: "/src/assets/xicara-de-cafe-em-um-prato.png",
        nota: "Café, leite vaporizado e espuma cremosa."
    },
    {
        id: 3,
        nome: "Latte",
        preco: "R$32,56",
        imagem: "/src/assets/xicara-de-cafe-em-um-prato.png",
        nota: "Mais leite, textura suave"
    },
    {
        id: 4,
        nome: "Mocha",
        preco: "R$38,90",
        imagem: "/src/assets/xicara-de-cafe-em-um-prato.png",
        nota: "Chocolate e café numa combinação perfeita"
    },
    {
        id: 5,
        nome: "Americano",
        preco: "R$24,00",
        imagem: "/src/assets/xicara-de-cafe-em-um-prato.png",
        nota: "Café mais leve, água quente e intenso"
    },
    {
        id: 6,
        nome: "Macchiato",
        preco: "R$28,50",
        imagem: "/src/assets/xicara-de-cafe-em-um-prato.png",
        nota: "Espresso com um toque de espuma"
    },
]


const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

function Products({ search }) {
    const [produtosState, setProdutosState] = useState(
        produtos.map((produto, index) => ({ ...produto, visible: index < 3 }))
    )

    const [visibleCount, setVisibleCount] = useState(3)

    const produtosFiltrados = produtosState
        .filter(produto => produto.nome.toLowerCase().includes(search.toLowerCase()) && produto.visible)

    const handleSeeMore = () => {
        setProdutosState(prev =>
            prev.map((produto, index) =>
                index < visibleCount + 3 ? { ...produto, visible: true } : produto
            )
        )
        setVisibleCount(prev => prev + 3)
    }

    const totalFiltrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(search.toLowerCase())
    ).length

    return (
        <section className="py-16 text-[#5A3E36]"
            style={{
                backgroundImage: `url(${fundo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className="mx-auto bg-amber-50 p-10 max-w-7xl rounded-xl">
                <div className="text-center mb-12">
                    <h2 className="font-pacifico text-2xl md:text-3xl font-semibold mb-4">
                        Nossos Produtos
                    </h2>
                    <p className="playfair-display-texto max-w-2xl mx-auto">
                        Descubra nossa seleção de cafés especiais, cuidadosamente selecionados para você
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {produtosFiltrados.map(produto => (
                        <motion.div
                            key={produto.id}
                            variants={cardVariants}
                            initial="hidden"
                            animate="show"
                            className="relative bg-white border border-zinc-200 rounded-xl flex flex-col"
                        >
                            <img src={produto.imagem} alt={produto.nome} className="w-full h-52 object-cover hover:brightness-90" />
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="font-pacifico text-lg font-medium text-zinc-900">{produto.nome}</h3>
                                <p className="playfair-display-texto mt-2 text-sm text-zinc-600 flex-1">{produto.nota}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-[#5A3E36] font-semibold text-xl">{produto.preco}</span>
                                    <button className="playfair-display-texto cursor-pointer bg-[#5A3E36] text-white py-2 px-4 rounded-md hover:bg-[#4b332c] hover:scale-105 transition-all">
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {visibleCount < totalFiltrados && (
                    <div className='mt-8 text-center'>
                        <button
                            onClick={handleSeeMore}
                            className='playfair-display-texto cursor-pointer bg-[#5A3E36] text-white py-2 px-4 rounded-md hover:bg-[#4b332c] hover:scale-105 transition-all'
                        >
                            Veja mais
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Products