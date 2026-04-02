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

Este proyecto es un experimento de **felipemartz** - github:

1. **Prompt 1**: "Crea una landing page de una hamburguesería llamada 'Felipino' utilizando React, Tailwind CSS y Framer Motion con dark mode elegante y animaciones avanzadas"
2. **Prompt 2**: "Corrige los problemas de blur en el modal y el typo en el texto"

✅ Resultado: Landing page completa y funcional en **2 prompts** sin escribir código manualmente.

### Detalles técnicos
- Modelo: stepfun/step-3.5-flash:free (totalmente gratuito)
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
