import { useState } from "react"
import "../styles/Header.css"



function Header({ search, setSearch }) {
    

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="fixed top-0 left-0 right-0 w-full bg-[#856a59] backdrop-blur border-b border-zinc-200 z-50">
                <div className="max-w-6xl py-3 flex items-center gap-8">
                    <a href="#" className="logo font-pacifico mx-7 text-3xl text-white underline-animated">Brewly</a>
                    <a href="#sobre" className="playfair-display-texto text-lg text-white underline-animated">Sobre nós</a>
                    <div className="relative group">
                        <a href="#" className="playfair-display-texto text-lg text-white cursor-pointer">
                            Produtos
                        </a>

                        <div className="
                            absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 ease-out
                            scale-95 mt-3 w-30 bg-[#856a59] rounded-b-lg shadow-xl opacity-0 delay-75        
                            invisible group-hover:opacity-100 group-hover:translate-y-0 
                            group-hover:visible backdrop-blur-md transition-all duration-300 hover:ease-in
                            ">
                            <div className="products-backdrop playfair-display-texto text-white text-center py-2">
                                <a href="#expresso" className="block px-4 py-2 text-sm hover:bg-amber-50 hover:text-[#5A3E36] hover:text-base transition-all duration-200">
                                    Expresso
                                </a>
                                <a href="#capuccino" className="block px-4 py-2 text-sm hover:bg-amber-50 hover:text-[#5A3E36] hover:text-base transition-all duration-200">
                                    Capuccinos
                                </a>
                                <a href="#latte" className="block px-4 py-2 text-sm hover:bg-amber-50 hover:text-[#5A3E36] hover:text-base transition-all duration-200">
                                    Latte   
                                </a>
                                <a href="#americano" className="block px-4 py-2 text-sm hover:bg-amber-50 hover:text-[#5A3E36] hover:text-base transition-all duration-200">
                                    Americano
                                </a>
                            </div>
                        </div>
                    </div>
                    <form className="w-full max-w-lg mx-auto flex items-center bg-white rounded-full px-3 py-1" onSubmit={handleSubmit}>
                        <label htmlFor="default-search" className="sr-only">Buscar</label>
                        <input 
                            type="search"
                            id="default-search"
                            className="w-full px-4 py-2 rounded-full outline-none text-[#5e4b3e] playfair-display-texto" 
                            placeholder="Buscar cafés..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="
                                cursor-pointer
                                font-pacifico text-white bg-[#856a59] px-3 py-1 rounded-full hover:bg-[#856a59]
                                transition-all delay-150 duration-300 hover:px-5 ease-in-out 
                            "
                        >
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Header