# react-playground

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
