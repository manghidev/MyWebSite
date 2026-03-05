
# ManghiDev WebSite

> 🌐 [Leer en Español](README.es.md)

A professional website built with **Next.js**, **React 19**, **Tailwind CSS**, and full internationalization (i18n) support. This project is optimized for Docker deployment and ready for modern development and production environments.

---

## 🚀 Main Technologies

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16 | React framework — SSR, SSG, routing |
| **React** | 19 | UI library |
| **Tailwind CSS** | 4 | Utility-first CSS framework |
| **TypeScript** | 5 | Static typing |
| **Node.js** | 25 | JavaScript runtime |
| **Docker** | Latest | Containerization |
| **canvas-confetti** | 1.9.4 | Visual effects library |

---

## 📁 Project Structure

```
src/
  app/
    [lang]/         # Dynamic language routes (es-MX, en-US)
      layout.tsx    # Root layout with metadata and global font
      page.tsx      # Main page — renders dashboard card components
    globals.css     # Global styles and Tailwind utilities
  components/
    cart/           # 8 isolated, reusable card components (1–8)
    languagePicker/ # Language switcher with scroll-aware visibility
    snow/           # Decorative snow visual effect
    version/        # Version display component
  utils/
    i18n/           # i18n dictionaries and utilities
      en-US.json    # English translations
      es-MX.json    # Spanish translations
      dictionary.ts # Dictionary loader
      index.ts      # Supported languages registry
    interface/      # TypeScript types for i18n
public/             # Static assets
dockerfile          # Optimized multi-stage Docker image
docker-compose.yml        # Production service orchestration
docker-compose-dev.yml    # Development service orchestration
next.config.ts      # Next.js configuration
tsconfig.json       # TypeScript configuration
eslint.config.mjs   # ESLint configuration
```

---

## 🧩 Architecture & Features

- **SSR / SSG**: Server-side rendering and static generation via Next.js App Router.
- **Dynamic i18n routing**: Language is resolved from the URL segment (`/en-US/`, `/es-MX/`), with static params generated at build time.
- **Component isolation**: Each card is a self-contained component receiving translated strings as props.
- **Custom design system**: Mango color palette defined as CSS variables, reusable utility classes via `@layer components`.
- **Scroll-aware UI**: The `LanguagePicker` component hides on scroll-down and reveals on scroll-up.
- **Secure Docker build**: Multi-stage Dockerfile — separate `deps`, `builder`, and `runner` stages; runs as a non-root `nextjs` system user.
- **SEO ready**: Custom metadata, Google Fonts (JetBrains Mono), keyword tags, and Google AdSense integration.

---

## ⚙️ Local Development

### Prerequisites

- Node.js 25+
- npm
- Docker (optional)

### Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/manghidev/MyWebSite.git
   cd MyWebSite
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

   The site will be available at [http://localhost:3000](http://localhost:3000)

---

## 🐳 Docker Deployment

### Development

```sh
docker compose -f docker-compose-dev.yml up
```

### Production

```sh
docker compose up --build -d
```

The production image uses a multi-stage build to minimize final image size. The app runs on port `3000` under a dedicated non-root user.

---

## 🌐 Internationalization (i18n)

- Supported locales: **English (en-US)** and **Spanish (es-MX)**.
- Language is derived from the URL: `/{lang}/`.
- Static params are auto-generated at build time via `generateStaticParams`.
- Switch language using the `LanguagePicker` component in the UI.
- Translation dictionaries live in `src/utils/i18n/`.

---

## 📝 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Read the [contribution guide](CONTRIBUTING.md) and the [code of conduct](CODE_OF_CONDUCT.md) before submitting a PR.

---

## 🔒 Security

If you find a vulnerability, see [SECURITY.md](SECURITY.md) for responsible disclosure instructions.

---

## 📄 License

GPL — ManghiDev