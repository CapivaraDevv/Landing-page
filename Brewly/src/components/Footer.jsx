function Footer() {
    return (
        <>
            <footer className="bg-[#2B1F1A] text-[#F5EFE6] py-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center 
                md:text-left">
                    <div className="">
                        <h2 className="text-xl font-semibold mb-4 text-[#C19A6B]">
                            Contato
                        </h2>
                        <ul className="space-y-2 text-sm text-[#E6DCD2]">
                            <li className="hover:text-[#C19A6B] transition-colors">WhatsApp: (11) 93452-4444</li>
                            <li className="hover:text-[#C19A6B] transition-colors">contato@brewly.com</li>
                            <li className="hover:text-[#C19A6B] transition-colors">Rua dos Grãos, 123 — SP</li>
                            <li className="hover:text-[#C19A6B] transition-colors">Seg–Dom: 8h às 20h</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="text-xl font-semibold mb-4 text-[#C19A6B]">
                            Seja um patrocinador
                        </h2>
                        <ul className="space-y-2 text-sm text-[#E6DCD2]">
                            <li className="hover:text-[#C19A6B] transition-colors">Parcerias com marcas</li>
                            <li className="hover:text-[#C19A6B] transition-colors">Eventos e ativações</li>
                            <li className="hover:text-[#C19A6B] transition-colors">Forneça seus grãos</li>
                            <li className="hover:text-[#C19A6B] transition-colors">Investidores Brewly</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="text-xl font-semibold mb-4 text-[#C19A6B]">Políticas</h2>
                        <ul className="space-y-2 text-sm text-[#E6DCD2]">
                            <li className="hover:text-[#C19A6B] transition-colors">Termos de uso</li>
                            <li className="hover:text-[#C19A6B] transition-colors">Política de privacidade</li>
                            <li className="hover:text-[#C19A6B] transition-colors">Política de entrega</li>
                            <li className="hover:text-[#C19A6B] transition-colors">Trocas e reembolsos</li>
                        </ul>
                    </div>
                </div>
                <h1 className="text-center p-5 m-auto">© 2026 Brewly — Café artesanal feito em São Paulo ☕</h1>
            </footer>

        </>
    )
}

export default Footer