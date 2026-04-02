import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'

// Datos del menú
const menuItems = [
  {
    id: 1,
    name: "Felipino Supreme",
    description: "Nuestra creación estrella con carne premium",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    ingredients: ["Carne angus 200g", "queso cheddar", "bacon crujiente", "salsa especial", "lechuga fresca", "tomate", "cebolla caramelizada", "pan brioche"]
  },
  {
    id: 2,
    name: "BBQ Smokehouse",
    description: "Explosión de humo y sabor",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
    ingredients: ["Carne angus 200g", "queso ahumado", "cebolla crujiente", "salsa BBQ casera", "pickles", "lechuga", "tomate", "pan de smoke"]
  },
  {
    id: 3,
    name: "Cheese Melt",
    description: "Para los amantes del queso",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
    ingredients: ["Doble carne 200g", "triple queso", "bacon", "salsa de queso", "jalapeños", "guacamole", "pan de ajo"]
  },
  {
    id: 4,
    name: "Spicy Inferno",
    description: "Para valientes only",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop",
    ingredients: ["Carne spicy", "queso pepper jack", "jalapeños frescos", "salsa habanero", "cebolla morada", "guacamole", "pan jalapeño"]
  },
  {
    id: 5,
    name: "Classic Original",
    description: "El sabor de siempre, mejorado",
    price: "$10.99",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
    ingredients: ["Carne 150g", "queso americano", "lechuga", "tomate", "cebolla", "pepinillos", "salsa clásica", "pan tradicional"]
  },
  {
    id: 6,
    name: "Mushroom Swiss",
    description: "Sofisticación terrenal",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
    ingredients: ["Carne angus", "queso suizo", "champiñones salteados", "cebolla caramelizada", "mayo de ajo", "rúcula", "pan de centeno"]
  }
]

// Componente Navbar
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-felipino-dark/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-felipino-orange to-felipino-yellow rounded-xl flex items-center justify-center">
            <span className="text-black font-bold text-lg sm:text-xl">F</span>
          </div>
          <span className={`font-bold text-xl sm:text-2xl tracking-tight ${scrolled ? 'text-white' : 'text-white'}`}>
            Felipino
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Inicio', 'Menú', 'Nosotros', 'Contacto'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: '#FF6B35' }}
              whileTap={{ scale: 0.95 }}
              className="text-white font-medium hover:text-felipino-orange transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-felipino-orange to-felipino-orange-light text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:shadow-felipino-orange/50 transition-shadow hidden sm:block"
        >
          Ordenar Ahora
        </motion.button>
      </div>
    </motion.nav>
  )
}

// Componente Hero
const Hero = () => {
  const title = "FELIPINO"
  const subtitle = "Hamburguesas Premium"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 0.6 }
    }
  }

  // Tilt effect para la hamburguesa
  const BurgerCard = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useTransform(x, [-1, 1], [-15, 15])
    const mouseY = useTransform(y, [-1, 1], [-15, 15])

    const handleMouseMove = (event) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((event.clientX - centerX) / (rect.width / 2))
      y.set((event.clientY - centerY) / (rect.height / 2))
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    const rotateX = useTransform(mouseY, [-15, 15], [15, -15])
    const rotateY = useTransform(mouseX, [-15, 15], [-15, 15])

    return (
      <motion.div
        style={{
          rotateX: useSpring(rotateX, { stiffness: 200, damping: 15 }),
          rotateY: useSpring(rotateY, { stiffness: 200, damping: 15 }),
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-md mx-auto sm:max-w-lg"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop"
            alt="Hamburguesa Premium"
            className="w-full h-64 sm:h-80 md:h-[400px] object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-felipino-dark via-felipino-darker to-black" />

      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-felipino-orange/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.p
            variants={subtitleVariants}
            className="text-felipino-orange font-bold text-base sm:text-lg mb-3 sm:mb-4 tracking-widest uppercase"
          >
            {subtitle}
          </motion.p>

          <div className="flex flex-wrap justify-center md:justify-start gap-1 sm:gap-2 mb-4 sm:mb-6">
            {title.split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-white tracking-tight"
                style={{
                  textShadow: "0 0 40px rgba(255, 107, 53, 0.5)"
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            variants={subtitleVariants}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Descubre la fusión perfecta entre tradición y vanguardia.
            Cada bocado es una experiencia única preparada con los ingredientes más frescos.
          </motion.p>

          <motion.div
            variants={subtitleVariants}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start mt-6 sm:mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-felipino-orange to-felipino-orange-light text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-felipino-orange/50 transition-all"
            >
              Ver Menú Completo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#FF6B35' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/5 transition-all"
            >
              Reservar Mesa
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <BurgerCard />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-felipino-orange rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Componente MenuCard
const MenuCard = ({ item, onClick, isSelected, isExpanded }) => {
  return (
    <motion.div
      layoutId={`card-${item.id}`}
      onClick={onClick}
      className={`relative cursor-pointer overflow-hidden rounded-2xl bg-felipino-gray transition-all duration-300 group ${
        isSelected && isExpanded ? 'ring-4 ring-felipino-orange z-50' : ''
      }`}
      whileHover={{ scale: 1.02, y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <motion.img
          layoutId={`image-${item.id}`}
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <motion.h3
            layoutId={`name-${item.id}`}
            className="text-white text-lg sm:text-2xl font-bold mb-1 sm:mb-2"
          >
            {item.name}
          </motion.h3>
          <motion.p
            layoutId={`description-${item.id}`}
            className="text-gray-300 text-xs sm:text-sm line-clamp-2"
          >
            {item.description}
          </motion.p>
          <div className="flex items-center justify-between mt-2 sm:mt-3">
            <span className="text-felipino-orange text-lg sm:text-xl font-bold">
              {item.price}
            </span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-2xl"
          animate={{
            borderColor: isSelected ? '#FF6B35' : 'transparent',
            boxShadow: isSelected
              ? '0 0 30px rgba(255, 107, 53, 0.6), inset 0 0 30px rgba(255, 107, 53, 0.1)'
              : '0 0 0px transparent'
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

// Componente MenuDetail (expanded view)
const MenuDetail = ({ item, onClose }) => {
  return (
    <>
      {/* Overlay con backdrop blur separado */}
      <motion.div
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      {/* Contenedor centrado sin blur */}
      <motion.div
        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-felipino-gray rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          layoutId={`card-${item.id}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 sm:h-80 min-h-[300px]">
              <motion.img
                layoutId={`image-${item.id}`}
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
              <motion.h2
                layoutId={`name-${item.id}`}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4"
              >
                {item.name}
              </motion.h2>

              <motion.p
                layoutId={`description-${item.id}`}
                className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 md:mb-6"
              >
                {item.description}
              </motion.p>

              <div className="mb-4 md:mb-6">
                <h3 className="text-felipino-orange font-bold text-base sm:text-lg mb-3 md:mb-4">Ingredientes</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {item.ingredients.map((ingredient, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-felipino-gray-light px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-gray-300"
                    >
                      {ingredient}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 md:gap-0 mb-4 md:mb-6">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-felipino-orange">{item.price}</span>
                <div className="flex gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-gray-600 transition"
                  >
                    Personalizar
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-felipino-orange to-felipino-orange-light text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold shadow-lg text-sm sm:text-base"
                  >
                    Agregar
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

// Sección Menú
const MenuSection = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCardClick = (id) => {
    if (isExpanded) {
      setIsExpanded(false)
      setTimeout(() => setSelectedId(null), 300)
    } else {
      setSelectedId(id)
      setIsExpanded(true)
    }
  }

  const handleClose = () => {
    setIsExpanded(false)
    setTimeout(() => setSelectedId(null), 300)
  }

  const selectedItem = menuItems.find(item => item.id === selectedId)

  return (
    <section id="menú" className="py-24 bg-felipino-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-felipino-gray/5 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-felipino-orange font-bold uppercase tracking-widest text-sm"
          >
            Nuestras Creaciones
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
          >
            Menú Premium
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Cada hamburguesa es una obra de arte culinaria. Seleccionamos solo los mejores ingredientes para crear experiencias inolvidables.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MenuCard
                item={item}
                onClick={() => handleCardClick(item.id)}
                isSelected={selectedId === item.id}
                isExpanded={isExpanded}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <MenuDetail item={selectedItem} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  )
}

// Sección Nosotros
const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-felipino-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-felipino-orange font-bold uppercase tracking-widest text-xs sm:text-sm">Nuestra Historia</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 sm:mt-4 mb-4 sm:mb-6">
              Pasión por la<br/>excelencia
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              En Felipino, creemos que una buena hamburguesa es más que comida: es una experiencia.
              Desde 2018, hemos estado reinventando el concepto de hamburguesería con ingredientes locales,
              técnicas innovadoras y un amor inquebrantable por la calidad.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Cada día, nuestros chefs preparan todo desde cero: las salsas, los panes e incluso
              nuestras propias mezclas de especias. Porque en Felipino, no aceptamos menos que la perfección.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-felipino-orange/20 to-felipino-yellow/20 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=500&fit=crop"
              alt="Cocina Felipino"
              className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 md:mt-24">
          {[
            { number: '10K+', label: 'Clientes Satisfechos' },
            { number: '500+', label: 'Reseñas 5 Estrellas' },
            { number: '6', label: 'Años de Experiencia' },
            { number: '50+', label: 'Variedades Únicas' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-felipino-orange mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-gray-400 uppercase text-xs sm:text-sm tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Sección Contacto
const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-felipino-darker">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 text-center"
      >
        <span className="text-felipino-orange font-bold uppercase tracking-widest text-xs sm:text-sm">¿Tienes Hambre?</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-2 sm:mt-4 mb-6 md:mb-8">
          ¡Ven a Visitarnos!
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 md:mb-12 px-4">
          Te esperamos en nuestro local o pide a domicilio. Cada hamburguesa está hecha
          con el corazón y los ingredientes más frescos de la ciudad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
          {[
            { icon: '📍', label: 'Dirección', value: 'Calle del Sabor 123, Ciudad' },
            { icon: '📞', label: 'Teléfono', value: '+34 900 123 456' },
            { icon: '⏰', label: 'Horario', value: 'Lun-Dom: 12:00 - 23:00' },
          ].map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-felipino-gray/50 backdrop-blur-sm border border-felipino-gray-light rounded-2xl p-4 sm:p-6 md:p-8"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{info.icon}</div>
              <div className="text-felipino-orange font-bold uppercase text-xs sm:text-sm mb-1 sm:mb-2">{info.label}</div>
              <div className="text-white font-medium text-sm sm:text-base">{info.value}</div>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 md:mt-12 bg-gradient-to-r from-felipino-orange to-felipino-orange-light text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-xl shadow-lg hover:shadow-felipino-orange/50 transition-all"
        >
          Pedir Ahora 📱
        </motion.button>
      </motion.div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="bg-felipino-darker border-t border-felipino-gray-light py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-felipino-orange to-felipino-yellow rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-xs sm:text-lg">F</span>
          </div>
          <span className="text-white font-bold text-base sm:text-lg">Felipino</span>
        </div>

        <div className="text-gray-500 text-xs sm:text-sm text-center md:text-right">
          © 2024 Felipino. Todos los derechos reservados.
        </div>

        <div className="flex gap-3 sm:gap-4">
          {['Instagram', 'Twitter', 'Facebook'].map((social) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-400 hover:text-felipino-orange transition-colors"
            >
              {social}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// Componente Principal App
function App() {
  return (
    <div className="min-h-screen bg-felipino-dark">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
