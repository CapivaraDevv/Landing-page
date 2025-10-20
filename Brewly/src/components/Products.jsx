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
    }
]

function Products({ search }) {
    const produtosFiltrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <>
            <section className="py-16 bg-amber-50 text-[#5A3E36]">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-pacifico text-2xl md:text-3xl font-semibold mb-4">
                            Nossos Produtos
                        </h2>
                        <p className="playfair-display-texto max-w-2xl mx-auto">
                            Descubra nossa seleção de cafés especiais, cuidadosamente selecionados para você
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {produtosFiltrados.map(produto => (
                            <div key={produto.id} className="relative bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <img src={produto.imagem} alt={produto.nome} className="w-full h-52 object-cover hover:scale-105 hover:brightness-90" />
                                <div className="p-4 flex flex-col flex-1">
                                    <h3 className="font-pacifico text-lg font-medium text-zinc-900">{produto.nome}</h3>
                                    <p className="playfair-display-texto mt-2 text-sm text-zinc-600 flex-1">{produto.nota}</p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-[#5A3E36] font-semibold text-xl">{produto.preco}</span>
                                        <button className="playfair-display-texto cursor-pointer bg-[#5A3E36] text-white py-2 px-4 rounded-md hover:bg-[#4b332c] transition-colors">
                                            Adicionar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )

}

export default Products