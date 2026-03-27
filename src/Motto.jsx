import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Motto = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // --- PERUBAHAN DI SINI ---
  // Gunakan template literal agar path otomatis menyesuaikan base URL
  const images = [
    { src: `${import.meta.env.BASE_URL}workplus-3.png`, alt: 'ADVAN Workplus 3' },
    { src: `${import.meta.env.BASE_URL}workplus-1.png`, alt: 'ADVAN Workplus 1' },
    { src: `${import.meta.env.BASE_URL}workplus-2.png`, alt: 'ADVAN Workplus 2' }
  ]

  return (
    <section id='motto' className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Logo and Tagline */}
        <div className="text-center mb-12">
          <motion.img
            // Ini sudah benar pakai BASE_URL
            src={`${import.meta.env.BASE_URL}advan.png`}
            alt="ADVAN Logo"
            className="h-16 sm:h-20 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6 }}
          />

          <motion.h2
            className="font-pt-reguler italic text-2xl sm:text-3xl mt-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            - "Made to Inspire" -
          </motion.h2>
        </div>

        {/* Image Gallery */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Mobile & Tablet: Swiper */}
          <div className="lg:hidden">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1.5, spaceBetween: 30 },
                768: { slidesPerView: 2, centeredSlides: false }
              }}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="flex justify-center p-2">
                    <motion.img
                      // --- GUNAKAN img.src YANG SUDAH ADA BASE_URL NYA ---
                      src={img.src}
                      alt={img.alt}
                      className="w-full max-w-xs sm:max-w-sm rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : undefined}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden lg:grid grid-cols-3 gap-8 px-8">
            {images.map((img, i) => (
              <motion.div
                key={i}
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : undefined}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              >
                <img
                  // --- GUNAKAN img.src ---
                  src={img.src}
                  alt={img.alt}
                  className="w-full max-w-md rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="max-w-4xl mx-auto text-center px-4"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : undefined}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Dengan adanya kerjasama dengan sistem kemitraan... Ingat smartphone, ingat <strong className="text-pink-600">#AdvanAja!</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Motto