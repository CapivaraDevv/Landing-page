

function Header() {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 w-full bg-[#856a59] backdrop-blur border-b border-zinc-200 z-50">
                <div className="max-w-6xl py-3 flex items-center gap-8">
                    <a href="#" className="font-pacifico mx-7 text-white underline-animated">Brewly</a>
                    <a href="#sobre" className="playfair-display-texto text-white underline-animated">Sobre nós</a>
                    <div className="relative group">
                        <a href="#" className="playfair-display-texto text-white transition-colors duration-300 cursor-pointer">
                            Produtos
                        </a>

                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-30 bg-[#856a59] rounded-b-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="playfair-display-texto text-white py-2">
                                <a href="#cafe-especial" className="block px-4 py-2 text-sm  hover:bg-amber-50 hover:text-[#5A3E36] transition-colors duration-200">
                                    Expresso
                                </a>
                                <a href="#assinatura" className="block px-4 py-2 text-sm  hover:bg-amber-50 hover:text-[#5A3E36] transition-colors duration-200">
                                    Capuccinos
                                </a>
                                <a href="#acessorios" className="block px-4 py-2 text-sm  hover:bg-amber-50 hover:text-[#5A3E36] transition-colors duration-200">
                                    Latte   
                                </a>
                                <a href="#presentes" className="block px-4 py-2 text-sm  hover:bg-amber-50 hover:text-[#5A3E36] transition-colors duration-200">
                                    Americano
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header