# Book Bites

Book Bites is a modern web application for sharing and reading book reviews. Users can discover books, read detailed descriptions and author information, and view ratings and reviews submitted by other readers. Book Bites aims to be a simple, user-friendly platform for book lovers and review enthusiasts.

> **Note:** This project is in early development. It may leverage an external API for fetching book data in the future.

## Features

- Browse and search for books
- View book details: title, author, description
- Read and submit reviews and ratings
- Clean and responsive user interface built with [Astro](https://astro.build)

## Project Structure

```
/
├── public/           # Static assets (images, favicon, etc.)
├── src/
│   ├── components/   # UI components (Astro, React, etc.)
│   └── pages/        # Site pages (.astro files become routes)
│       └── index.astro
└── package.json
```

- Page files in `src/pages/` define routes.
- Components live in `src/components/`.
- Public assets are served from `public/`.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:4321`.

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Future Plans

- Integration with a third-party books API for live data
- User authentication for personalized reviews
- Advanced review and rating system

## Contributing

Contributions, issues, and feature requests are welcome! Please open an issue or submit a pull request.

## License

[MIT](LICENSE)
