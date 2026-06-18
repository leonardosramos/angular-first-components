# Angular Basics — Conceitos Básicos

This repository contains a small Angular 19 project created to demonstrate basic Angular concepts and component patterns. It is intended for learning and experimentation.

## Features

- Simple standalone components (HelloWorld, Calculadora, Lista Compras, MinhaPagina)
- Component-scoped SCSS styles
- Basic form handling and table display
- Lightweight structure for hands-on practice

## Prerequisites

- Node.js 18+ and npm
- (Optional) Angular CLI for global tooling

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The CLI may pick an alternative port if `4200` is already in use — check the terminal output for the actual URL.

Build for production:

```bash
npm run build
```

## Project structure (key files)

- `src/app/app.component.ts` — root component (standalone)
- `src/app/helloworld` — `HelloworldComponent`
- `src/app/calculadora` — `CalculadoraComponent`
- `src/app/lista-compras` — `ListaComprasComponent` (shopping list example)
- `src/app/minhapagina` — `MinhapaginaComponent`
- `src/styles.scss` — global styles

## Notes

- The project uses Angular 19 and standalone components (`standalone: true`).
- Component styles are written in SCSS and declared via `styleUrls`.

## Contributing

This repository is educational. Small improvements, fixes, and clarifications are welcome.

## License

This project is provided as an educational sample. Add an appropriate license if you publish or distribute it.

---

If you want, I can also add a short usage guide or screenshots — tell me which sections to expand.
