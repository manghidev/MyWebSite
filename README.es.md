
# ManghiDev WebSite

> 🌐 [Read in English](README.md)

Sitio web profesional desarrollado con **Next.js**, **React 19**, **Tailwind CSS**, y soporte completo para internacionalización (i18n). Este proyecto está optimizado para despliegue en Docker y preparado para entornos de desarrollo y producción modernos.

---

## 🚀 Tecnologías principales

| Tecnología | Versión | Propósito |
|---|---|---|
| **Next.js** | 16 | Framework React — SSR, SSG, enrutamiento |
| **React** | 19 | Librería de interfaz de usuario |
| **Tailwind CSS** | 4 | Framework CSS utilitario |
| **TypeScript** | 5 | Tipado estático |
| **Node.js** | 25 | Entorno de ejecución JavaScript |
| **Docker** | Latest | Contenerización |
| **canvas-confetti** | 1.9.4 | Librería de efectos visuales |

---

## 📁 Estructura del proyecto

```
src/
  app/
    [lang]/         # Rutas dinámicas por idioma (es-MX, en-US)
      layout.tsx    # Layout principal con metadatos y fuente global
      page.tsx      # Página principal — renderiza los componentes del dashboard
    globals.css     # Estilos globales y utilidades Tailwind
  components/
    cart/           # 8 componentes de tarjeta aislados y reutilizables (1–8)
    languagePicker/ # Selector de idioma con visibilidad según scroll
    snow/           # Efecto visual decorativo de nieve
    version/        # Componente de versión
  utils/
    i18n/           # Diccionarios y utilidades de i18n
      en-US.json    # Traducciones en inglés
      es-MX.json    # Traducciones en español
      dictionary.ts # Cargador de diccionarios
      index.ts      # Registro de idiomas soportados
    interface/      # Tipos TypeScript para i18n
public/             # Recursos estáticos
dockerfile          # Imagen Docker multietapa optimizada
docker-compose.yml        # Orquestación de servicios para producción
docker-compose-dev.yml    # Orquestación de servicios para desarrollo
next.config.ts      # Configuración de Next.js
tsconfig.json       # Configuración de TypeScript
eslint.config.mjs   # Configuración de ESLint
```

---

## 🧩 Arquitectura y características

- **SSR / SSG**: Renderizado en servidor y generación estática mediante el App Router de Next.js.
- **Enrutamiento i18n dinámico**: El idioma se resuelve desde el segmento de URL (`/en-US/`, `/es-MX/`), con parámetros estáticos generados en tiempo de build.
- **Componentes aislados**: Cada tarjeta es un componente independiente que recibe cadenas traducidas como props.
- **Sistema de diseño personalizado**: Paleta de colores "Mango" definida como variables CSS, clases reutilizables via `@layer components`.
- **UI consciente del scroll**: El componente `LanguagePicker` se oculta al bajar y se muestra al subir.
- **Build Docker seguro**: Dockerfile multietapa — etapas separadas de `deps`, `builder` y `runner`; ejecuta con usuario de sistema no-root `nextjs`.
- **SEO listo**: Metadatos personalizados, Google Fonts (JetBrains Mono), etiquetas de palabras clave e integración con Google AdSense.

---

## ⚙️ Desarrollo local

### Requisitos previos

- Node.js 25+
- npm
- Docker (opcional)

### Configuración

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/manghidev/MyWebSite.git
   cd MyWebSite
   ```

2. **Instala dependencias:**
   ```sh
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```sh
   npm run dev
   ```

   El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

---

## 🐳 Despliegue con Docker

### Desarrollo

```sh
docker compose -f docker-compose-dev.yml up
```

### Producción

```sh
docker compose up --build -d
```

La imagen de producción usa un build multietapa para minimizar el tamaño final. La app corre en el puerto `3000` bajo un usuario no-root dedicado.

---

## 🌐 Internacionalización (i18n)

- Idiomas soportados: **Inglés (en-US)** y **Español (es-MX)**.
- El idioma se deriva de la URL: `/{lang}/`.
- Los parámetros estáticos se auto-generan en tiempo de build via `generateStaticParams`.
- Cambia el idioma usando el componente `LanguagePicker` en la UI.
- Los diccionarios de traducción están en `src/utils/i18n/`.

---

## 📝 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compilación para producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint |

---

## 🤝 Contribución

Lee la [guía de contribución](CONTRIBUTING.md) y el [código de conducta](CODE_OF_CONDUCT.md) antes de enviar un PR.

---

## 🔒 Seguridad

Si encuentras una vulnerabilidad, revisa [SECURITY.md](SECURITY.md) para instrucciones de divulgación responsable.

---

## 📄 Licencia

GPL — ManghiDev
