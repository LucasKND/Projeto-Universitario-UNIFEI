# 🎓 UNIFEI BCTec - Experimentos de Física

> Website apresentando experimentos de física realizados no Bacharelado em Ciência e Tecnologia da UNIFEI.

https://lucasknd.github.io/Projeto-Universitario-UNIFEI/

## 🎯 Sobre o Projeto

Este projeto é um website desenvolvido para apresentar de forma visual e interativa os experimentos de física realizados no curso de **Bacharelado em Ciência e Tecnologia (BCTec)** da **Universidade Federal de Itajubá (UNIFEI)**. 

O site combina documentação técnica rigorosa com uma interface moderna e acessível, inspirada em plataformas de streaming como HBO Max, criando uma experiência única de divulgação científica.

### Objetivos:
- Documentar experimentos de física com clareza e rigor científico
- Promover o curso BCTec da UNIFEI
- Demonstrar a integração entre teoria e prática no ensino universitário
- Criar uma experiência visual moderna e engajante

---

## ✨ Funcionalidades

### 🏠 Homepage
- Hero section com background da UNIFEI
- Seção dedicada ao curso BCTec com imagem e copywriting persuasivo
- Navegação smooth scroll entre seções

### 🔬 Experimentos Interativos
- **Experimento 1**: Caracterização de LEDs
  - Análise elétrica e óptica de LEDs amarelo e verde
  - Cálculo da Constante de Planck
  - Gráficos e tabelas de dados experimentais
  - Fórmulas matemáticas apresentadas de forma clara

- **Experimento 2**: Pêndulo Simples e MHS
  - Estudo do movimento harmônico simples
  - Análise com software Tracker®
  - Comparação de métodos de medição
  - Vídeo demonstrativo integrado

### 📱 Interface Moderna
- Sistema de accordion para organização de conteúdo
- Grid de fotos e vídeos com layout criativo
- Modal de vídeo em tela cheia
- Preview de vídeos ao passar o mouse
- Menu hamburguer responsivo
- Animações suaves com cubic-bezier

### 🎨 Galeria Multimídia
- 13 imagens dos experimentos
- 4 vídeos com controles interativos
- Layout em grid
- Imagem hero com label overlay

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada
  - CSS Grid & Flexbox
  - Custom Properties (variáveis CSS)
  - Transitions e Animations
  - Media Queries para responsividade
- **JavaScript (Vanilla)** - Interatividade
  - Accordion functionality
  - Video modal system
  - Intersection Observer para navegação
  - Event listeners otimizados

### Tipografia
- **Google Fonts**
  - Inter (400/500/600) - Corpo do texto
  - Poppins (600/700) - Títulos e destaques

### Design System
- Paleta de cores institucional
- Sistema de espaçamento consistente
- Tipografia hierárquica
- Componentes reutilizáveis

---

## 📁 Estrutura do Projeto

```
ExperimentosFísicos/
│
├── index.html              # Página principal
├── styles.css              # Estilos globais (~1218 linhas)
├── scripts.js              # Funcionalidades JavaScript
├── README.md               # Documentação do projeto
│
└── assets/                 # Recursos multimídia
    ├── logo-unifei-oficial.png
    ├── 1-UNIFEI_resized.jpg
    ├── bctec[.jpg
    ├── alunos.jpeg
    ├── img01.jpeg - img13.jpeg    # Fotos dos experimentos
    ├── img1.jpeg - img3.jpeg      # Figuras técnicas
    ├── grafico01.jpeg - grafico02.jpeg
    ├── video01.mp4 - video04.mp4
    └── videoPendulo.mp4
```

### Arquivos Principais

#### `index.html`
Estrutura HTML5 semântica com:
- Header fixo com navegação
- Hero section
- Seção BCTec
- Dois experimentos em accordions
- Seção "Encontro dos Alunos"
- Grid de fotos/vídeos
- Footer institucional
- Modal de vídeo

#### `styles.css`
Sistema de estilos organizado por seções:
- Variáveis CSS (`:root`)
- Reset e base styles
- Topbar e navegação
- Hero section
- BCTec section
- Accordions
- Encontro section
- Photo grid
- Video modal
- Footer
- Media queries

#### `scripts.js`
Funcionalidades JavaScript:
- Menu hamburguer
- Sistema de accordion
- Navegação ativa com Intersection Observer
- Modal de vídeo
- Preview de vídeos no hover

---



### Estrutura de Navegação

- **Início** - Hero e introdução UNIFEI
- **BCTec** - Informações sobre o curso
- **Experimento LED** - Caracterização de LEDs
- **Experimento Pêndulo** - Movimento Harmônico Simples
- **Encontro dos Alunos** - Galeria multimídia

---

### Paleta de Cores

```css
--azul: #1a5a8a           /* Primária */
--azul-claro: #3d8ecf     /* Hover/destaque */
--azul-escuro: #0d3a5c    /* Contraste */
--cinza-metal: #8a9baa    /* Texto secundário */
--cinza-claro: #c4cdd4    /* Elementos sutis */
--cinza-escuro: #2a2a2a   /* Headers/footers */
--preto: #0a0a0a          /* Fundos escuros */
--branco: #ffffff         /* Background principal */
--vermelho: #c41e1e       /* CTAs */
```

### Componentes UI

- **Accordion**: Expansão suave com ícone rotativo
- **Cards**: Hover com elevação e transformação
- **Buttons**: Estados hover com mudança de cor
- **Modal**: Background overlay com fade-in
- **Grid**: Masonry layout com itens de tamanhos variados

---

## 📱 Responsividade

### Breakpoints

```css
@media (max-width: 900px)  /* Tablets */
@media (max-width: 768px)  /* Mobile landscape */
@media (max-width: 600px)  /* Mobile portrait */
@media (max-width: 480px)  /* Small mobile */
```

### Adaptações Mobile

- Menu hamburguer animado
- Grid de fotos: 4 → 2 → 1 colunas
- Tipografia responsiva
- Padding/margin ajustados
- Imagens otimizadas
- Touch-friendly targets (mínimo 44px)

---

## 👩‍🔬 Autor

**Lucas Veroneze**

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🏛️ Instituição

**UNIFEI - Universidade Federal de Itajubá**
- Curso: Bacharelado em Ciência e Tecnologia
- Ano: 2025
