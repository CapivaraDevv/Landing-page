import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="bg-[#2B1F1A] text-[#F5EFE6] py-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* Seções principais */}
                <div className="grid md:grid-cols-3 gap-10 text-center md:text-left mb-12">
                    {/* Contato */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#C19A6B]">
                            Contato
                        </h3>
                        <ul className="space-y-3 text-sm text-[#E6DCD2]">
                            <li className="flex items-center gap-3 md:flex-row flex-col">
                                <Phone size={18} className="text-[#C19A6B] shrink-0" />
                                <a href="https://wa.me/5511934524444" target="_blank" rel="noopener noreferrer" className="hover:text-[#C19A6B] transition-colors">
                                    (11) 93452-4444
                                </a>
                            </li>
                            <li className="flex items-center gap-3 md:flex-row flex-col">
                                <Mail size={18} className="text-[#C19A6B] shrink-0" />
                                <a href="mailto:contato@brewly.com" className="hover:text-[#C19A6B] transition-colors">
                                    contato@brewly.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 md:flex-row flex-col">
                                <MapPin size={18} className="text-[#C19A6B] shrink-0" />
                                <span>Rua dos Grãos, 123 — SP</span>
                            </li>
                            <li className="flex items-center gap-3 md:flex-row flex-col">
                                <Clock size={18} className="text-[#C19A6B] shrink-0" />
                                <span>Seg–Dom: 8h às 20h</span>
                            </li>
                        </ul>
                    </div>

                    {/* Parcerias */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#C19A6B]">
                            Seja um patrocinador
                        </h3>
                        <ul className="space-y-2 text-sm text-[#E6DCD2]">
                            <li><a href="#" className="hover:text-[#C19A6B] transition-colors">Parcerias com marcas</a></li>
                            <li><a href="#" className="hover:text-[#C19A6B] transition-colors">Eventos e ativações</a></li>
                            <li><a href="#" className="hover:text-[#C19A6B] transition-colors">Forneça seus grãos</a></li>
                            <li><a href="#" className="hover:text-[#C19A6B] transition-colors">Investidores Brewly</a></li>
                        </ul>
                    </div>

                    {/* Políticas */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#C19A6B]">Políticas</h3>
                        <ul className="space-y-2 text-sm text-[#E6DCD2]">
                            <li><a href="#" className="hover:text-[#C19A6B] transition-colors">Termos de uso</a></li>
                            <li><a href="#" className="hover:text-[#C19A6B] transition-colors">Política de privacidade</a></li>
                            <li><a href="#" className="hover:text-[#C19A6B] transition-colors">Política de entrega</a></li>
                            <li><a href="#" className="hover:text-[#C19A6B] transition-colors">Trocas e reembolsos</a></li>
                        </ul>
                    </div>
                </div>

                {/* Redes Sociais */}
                <div className="flex justify-center gap-6 mb-8 border-t border-[#C19A6B] pt-8">
                    <a href="#" aria-label="Instagram" className="hover:text-[#C19A6B] transition-colors">
                        <Instagram size={24} />
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-[#C19A6B] transition-colors">
                        <Facebook size={24} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-[#C19A6B] transition-colors">
                        <Linkedin size={24} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center border-t border-[#C19A6B] pt-8">
                    <p className="text-sm">© {currentYear} Brewly — Café artesanal feito em São Paulo ☕</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer