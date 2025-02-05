# Playground

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173/react-playground/`.

## Building for Production

Create a production build:

```bash
npm run build
```

>The building process might fail, because the client build folder is being renamed

>Just re-run the build until it's successful or just rename the `/build/client/` fodler to `/build/react-playground` by hand.

## Deployment

### Serve Locally

To serve the production build on localhost:

```bash
npm run start
```

or

```bash
npx serve -S build
```

### Docker Deployment

To build and run using Docker:

```bash
docker build -t react-playground .

docker run -p 3000:3000 react-playground
```

## License

This project is licensed under the **Apache Software License 2.0**.

See [LICENSE](LICENSE) for more information.

## Acknowledgements

- [nodejs - node](https://github.com/nodejs/node) Node.js JavaScript runtime ✨🐢🚀✨ . (Apache-2.0 license)
- [microsoft - TypeScript](https://github.com/microsoft/TypeScript) TypeScript is a superset of JavaScript that compiles to clean JavaScript output. (Apache-2.0 license)
- [facebook - react](https://github.com/facebook/react) The library for web and native user interfaces. (MIT license)
- [remix-run - react-router](https://github.com/remix-run/react-router) Declarative routing for React. (MIT license)
- [vitejs - vite](https://github.com/vitejs/vite) Next generation frontend tooling. It's fast!. (MIT license)
- [tailwindlabs - tailwindcss](https://github.com/tailwindlabs/tailwindcss) A utility-first CSS framework for rapid UI development. (MIT license)
- [shadcn-ui - ui](https://github.com/shadcn-ui/ui) Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source. (MIT license)
- [lucide-icons - lucide](https://github.com/lucide-icons/lucide) Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons. (ISC license)
- [motiondivision - motion](https://github.com/motiondivision/motion) A modern animation library for React and JavaScript. (MIT license)
- [tschaub - gh-pages](https://github.com/tschaub/gh-pages) General purpose task for publishing files to a gh-pages branch on GitHub. (MIT license)
