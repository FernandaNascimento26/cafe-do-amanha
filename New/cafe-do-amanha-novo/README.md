# ☕ Café do Amanhã

Bem-vindo ao repositório do projeto **"Café do Amanhã"**, um site interativo desenvolvido com **React + Vite** que simula o ambiente acolhedor de um café fictício localizado na Avenida Beira Mar, em Fortaleza.

---

## 📝 Descrição

Este projeto oferece uma experiência digital encantadora para os visitantes do "Café do Amanhã", com navegação fluida, visual agradável, menu interativo e sistema de pedidos online.

---

## 🚀 Funcionalidades

- **Página Inicial (Hero):** Apresentação do café com imagem, chamada de ação e carrossel de histórias.
- **Navegação Roteada:** Implementação com `react-router-dom` para navegação entre páginas.
- **Menu Interativo:** Visualização do cardápio dividido por categorias com uso de abas.
- **Sistema de Pedidos:** Formulário para nome, mesa, seleção de itens e cálculo automático do total.
- **Design Responsivo:** Uso do Bootstrap e React-Bootstrap para garantir boa experiência em todos os dispositivos.
- **404 Customizado:** Página estilizada para rotas não encontradas.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [FontAwesome](https://fontawesome.com/)

---

## 📦 Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/FernandaNascimento26/cafe-do-amanha.git
````

### 2. Acessar o Diretório

```bash
cd cafe-do-amanha
```

### 3. Instalar as Dependências

```bash
npm install
```

### 4. Rodar o Projeto em Desenvolvimento

```bash
npm run dev
```

### 5. Acessar no Navegador

Acesse `http://localhost:5173`

---

## 🗂️ Estrutura do Projeto

```
cafe-do-amanha/
├── public/                 # Arquivos públicos (index.html, imagens globais)
├── src/
│   ├── assets/             # Imagens locais (para importações em components)
│   ├── components/         # Componentes reutilizáveis (Header, Footer, etc.)
│   ├── data/               # Dados simulados (menuItems.js)
│   ├── pages/              # Páginas roteadas (Home, Menu, Order, etc.)
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Menu/
│   │   ├── Order/
│   ├── App.jsx             # Componente principal da aplicação
│   ├── main.jsx            # Ponto de entrada com BrowserRouter
│   ├── index.css           # Estilo base
│   └── App.css             # Estilo global do App
├── package.json
├── README.md
└── .gitignore
```

---

## 🧑‍💻 Contribuindo

Contribuições são bem-vindas! Para sugerir melhorias ou reportar problemas:

1. Abra uma **issue** ou envie um **pull request**
2. Descreva claramente suas alterações

---

## 🛡️ Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido com ☕ por Fernanda Nascimento.


