# ☕ Brewly - Café Artesanal de São Paulo

Uma landing page moderna e responsiva para a marca **Brewly**, especializada em café artesanal de qualidade premium. O site apresenta uma experiência visual elegante com animações suaves e design focado em conversão.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Active-success)

---

## 🎯 Features Principais

- ✨ **Animações Suaves** — Framer Motion para transições envolventes
- 📱 **Fully Responsive** — Otimizado para desktop, tablet e mobile
- 🎨 **Design Moderno** — Paleta de cores sofisticada (ouro + tons quentes)
- 🔗 **Integração de Contato** — WhatsApp, Email e links de redes sociais diretos
- 🎭 **Componentes Animados** — Hero, Cards de produtos, Carousel de feedbacks
- 🎯 **Seções Estratégicas** — Hero, About, Products, Testimonials, Footer
- 📊 **Performance Otimizada** — Build rápido com Vite

---

## 🛠️ Tech Stack

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **React** | 19.1.1 | Framework UI |
| **Vite** | 7.1.14 (rolldown) | Build tool & dev server |
| **Tailwind CSS** | 4.1.14 | Styling utility-first |
| **Framer Motion** | 12.24.10 | Animações avançadas |
| **Lucide React** | 0.562.0 | Ícones SVG |
| **PostCSS** | 8.5.6 | CSS processing |

---

## 📦 Estrutura do Projeto

```
Brewly/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Seção principal com CTA
│   │   ├── About.jsx          # História + Carousel de feedbacks
│   │   ├── Products.jsx       # Catálogo de produtos com filtro
│   │   ├── ProductsCard.jsx   # Cards destacados
│   │   └── Footer.jsx         # Rodapé com links e redes sociais
│   ├── styles/
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Products.css
│   │   └── Header.css
│   ├── assets/                # Imagens de produtos e fundos
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/                    # Assets estáticos
├── index.html                 # Entry HTML
├── vite.config.js            # Configuração Vite
├── tailwind.config.js        # Configuração Tailwind
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Pré-requisitos
- Node.js 16+ ou superior
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone <seu-repo>
cd Brewly

# Instale as dependências
pnpm install
# ou
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm run dev
# ou
npm run dev

# Abra http://localhost:5173 no navegador
```

### Build para Produção

```bash
# Gera build otimizado
pnpm run build
# ou
npm run build

# Preview da build
pnpm run preview
```

### Lint

```bash
# Valida o código
pnpm run lint
```

---

## 📋 Seções do Site

### 1. **Hero**
- Introdução elegante da marca
- Imagem de destaque
- CTA (Call-to-Action)
- Animações ao scroll

### 2. **About (Sobre Nós)**
- História da Brewly
- Carousel de feedbacks de clientes
- Sistema de avaliação por estrelas

### 3. **Products (Produtos)**
- Catálogo de 6 tipos de café
- Cards com imagem, nome, preço e descrição
- Sistema de "Ver Mais" com lazy loading
- Animações de entrada em cascata

### 4. **Footer**
- Links de contato funcionais (WhatsApp, Email)
- Endereço e horário de funcionamento
- Seção de parcerias
- Políticas de privacidade
- Ícones de redes sociais

---

## 🎨 Paleta de Cores

| Cor | Uso |
|-----|-----|
| `#2B1F1A` | Fundo escuro (Footer, Headers) |
| `#F5EFE6` | Fundo claro (Hero, Seções) |
| `#C19A6B` | Destaque dourado (Titles, Hover) |
| `#5A3E36` | Texto secundário |
| `#2B2B2B` | Texto principal |

---

## 📞 Contatos & Links

- **Email:** contato@brewly.com
- **WhatsApp:** [+55 11 93452-4444](https://wa.me/5511934524444)
- **Localização:** Rua dos Grãos, 123 — São Paulo, SP
- **Horário:** Seg–Dom: 8h às 20h

---

## 🔐 Licença

Este projeto está licenciado sob a licença MIT — veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

Desenvolvido com ❤️ para **Brewly** | 2026

---

## 📈 Roadmap

- [ ] Sistema de carrinho e checkout
- [ ] Página de blog sobre cafés
- [ ] Integração com WhatsApp Business API
- [ ] Dashboard de admin
- [ ] PWA para mobile app

---

**Pronto para postar! 🚀**
