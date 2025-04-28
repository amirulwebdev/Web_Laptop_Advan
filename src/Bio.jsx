import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import workplus from '../public/workplus-2.png'

const Bio = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // cek di awal
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="pt-20 px-6 md:px-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">

        {/* TEKS */}
        <motion.div
          className="flex-1 mt-10 md:mt-0 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight text-gray-900 mb-6">
            ADVAN Workplus<br />
            <span className="text-pink-600">AMD RYZEN 5</span><br />
            6600H 14” FHD<br />IPS 16GB 1TB Win 11
          </h1>
          <p className="text-gray-500 mb-6">
            Ditujukan untuk professional, sangat nyaman digunakan untuk bekerja, programing, content creator, IT, main game, serta mendukung semua kegiatan Anda.
          </p>
        </motion.div>

        {/* GAMBAR + SHAPE */}
        {isMobile ? (
          <div className="flex-1 flex items-center justify-center h-[400px] relative z-10">
            {/* SHAPE MOBILE */}
            <div className="absolute right-2 w-60 h-60 bg-pink-600 rounded-full z-0 bg-gradient-to-r from-pink-600 to-pink-900"></div>

            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              src={workplus}
              alt="Laptop"
              className="h-[280px] object-contain relative z-10 drop-shadow-2xl"
            />
          </div>
        ) : (
          <div className="flex-1 relative h-[700px] overflow-visible">
            {/* SHAPE DESKTOP */}
            <div className="absolute top-10 right-[-48px] w-[500px] h-[500px] bg-pink-600 rounded-full z-0 bg-gradient-to-r from-pink-600 to-pink-900"></div>

            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              src={workplus}
              alt="Laptop"
              className="absolute top-0 right-[-32px] h-[700px] object-contain z-10 drop-shadow-2xl"
            />
          </div>
        )}

      </div>
    </div>
  )
}

export default Bio
