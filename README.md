# 🍔 Felipino - Landing Page

> **Creado 100% con Claude Code** - Este proyecto fue generado desde cero utilizando únicamente prompts en Claude Code, sin escribir una sola línea de código manualmente.

## 🚀 Tecnologías

- **React 18** - Interfaz de usuario
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones avanzadas
- **GitHub CLI** - Para despliegue

## ✨ Características

### Animaciones con Framer Motion
- **Hero Section**: Titulo con staggered fade-in por letras
- **Hamburguesa flotante**: Levitación suave + 3D tilt effect reactivo al mouse
- **Menú interactivo**: Tarjetas con hover (scale + lift + border glow)
- **Expansión con layoutId**: Transición FLIP animada al hacer clic
- **Scroll animations**: whileInView en todas las secciones
- **Navbar sticky**: Animación spring + cambio de estilo al scroll
- **WhileTap**: Botones con scale 0.95 al presionar

### Diseño
- Dark mode elegante (#0a0a0a)
- Acentos naranja (#FF6B35)
- Tipografía moderna (Inter + Oswald)
- Fully responsive

## 📦 Instalación

```bash
npm install
```

## 🏃 Desarrollo

```bash
npm run dev
```

Visita http://localhost:5173

## 🔨 Build

```bash
npm run build
```

## 🤖 Cómo se creó

Este proyecto fue desarrollado íntegramente por **lpibardo**, mi inteligencia artificial.

**Prompts utilizados:**

1. **Prompt 1**: "Crea una landing page de una hamburguesería llamada 'Felipino' utilizando React, Tailwind CSS y Framer Motion. La estética debe ser moderna, minimalista y 'dark mode' elegante."
2. **Prompt 2**: "Hay un problema cuando selecciono las hamburguesas, se blurrea todo y no se ve nada y al dar click se ve por un segundito y se va. También cambia el texto."
3. **Prompt 3**: "No es responsive en celular, arréglalo."

✅ **Resultado**: Landing page completa, funcional y 100% responsive en **3 prompts** sin escribir una sola línea de código manualmente.

### Detalles técnicos
- Modelo: stepfun/step-3.5-flash:free (totalmente gratuito)
- **IA**: lpibardo
- Herramienta: Claude Code CLI
- Tiempo total: ~15 minutos
- Líneas de código generadas automáticamente: ~800 LOC

## 📁 Estructura

```
felipino-burgers/
├── src/
│   ├── App.jsx          # Componente principal con todas las secciones
│   ├── main.jsx         # Entry point React
│   └── index.css        # Tailwind + estilos base
├── index.html           # HTML entry point
├── package.json         # Dependencias
├── vite.config.js       # Config Vite
├── tailwind.config.js   # Tailwind theme
└── postcss.config.js    # PostCSS config
```

## 🎯 Secciones

1. **Navbar** - Sticky con animación spring
2. **Hero** - Staggered letters + burger con tilt 3D
3. **Menú** - Grid interactivo con expansión FLIP
4. **Nosotros** - Historia con scroll animations
5. **Contacto** - Info con cards animadas
6. **Footer** - Minimalista

## 📝 Licencia

Este proyecto fue creado como demo. Siéntete libre de usarlo y modificarlo.

---

**Hecho con 🤖 por Claude Code** - IA gratuita que escribe código real.
