import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import ryzen from '../src/assets/ryzen-5-6600h.png'
import workplus from '../src/assets/workplus-2.png'
import Advan from './assets/advan.png'
import workplus1 from '../src/assets/workplus-1.png'
import workplus3 from '../src/assets/workplus-3.png'

const Motto = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div id='motto' className="bg-white py-12 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div>
        <motion.img
          src={Advan}
          alt="Logo Advan"
          className="h-16 sm:h-20 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="font-pt-reguler italic text-center text-2xl sm:text-3xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          - "Made to Inspire" -
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Mobile & Tablet: Swiper */}
          <div className="block lg:hidden">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              style={{ padding: '0 1rem' }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2,
                }
              }}
            >
              {[workplus3, workplus1, workplus].map((img, i) => (
                <SwiperSlide key={i} className="flex justify-center">
                  <motion.img
                    src={img}
                    alt=""
                    className="w-64 sm:w-72 md:w-80 mx-auto transition-transform duration-500 ease-in-out hover:scale-105"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Flex layout */}
          <div className="hidden lg:flex justify-center gap-6">
            {[workplus3, workplus1, workplus].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt=""
                className="w-72 lg:w-80 transition-transform duration-500 ease-in-out hover:scale-105"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Motto
