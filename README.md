# Apresentação Pessoal

Projeto baseado no [Vite LTS](https://vitejs.dev/) e [React LTS](https://reactjs.org/). Utiliza o [Tailwind CSS LTS](https://tailwindcss.com/) e [PostCSS LTS](https://github.com/postcss/postcss) para gerar o estilo. Foram trabalhados conceitos de reutilização de componentes, clean code, performance e design responsivo. Isso reflete nas esolhas das imagens, abordagem de componentes e definição de templates.

## Como rodar na minha máquina?

- Faça um clone do repositório: `git clone https://github.com/MatheusAmon12/matheus-presentation.git`
- Rode `npm install`
- Rode `npm run dev`
- Finalizado!
- O seu `package.json` deve ter as informações abaixo:

```json
{
  "name": "matheus-presentation",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.378.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^2.3.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20.12.10",
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}
```

## Estrutura do projeto

- `public`: arquivos de imagens e ícones do projeto
- `src`: concentra os arquivos da aplicação
  - `components`: todas as peças necessárias para compor a interface
    - `ui`: componentes provenientes do shadcn
      - `button.tsx`
    - `carousel-projects.tsx`
    - `carousel-technologies.tsx`
    - `footer.tsx`
    - `header.tsx`
  - `lib`: arquivo utilitário do shadcn
    - `utils.ts`
  - `template`: template de layout padrão do projeto
    - `default.tsx`
  - `App.tsx`
  - `globals.css`: arquivos de CSS globais baseado no tailwind
  - `main.tsx`
  - `vite-env.d.ts`: referência para o Vite


## Como me localizar no projeto?

- O diretório `src/App.tsx` é o onde você vai encontrar as importações de todos os componentes, sendo assim, a partir desse ponto, você pode acessar todos os componentes.