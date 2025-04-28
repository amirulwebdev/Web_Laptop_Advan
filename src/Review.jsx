import React from 'react'
import { motion } from 'framer-motion'

const reviews = [
    {
        name: 'Dina Ramadhani',
        text: 'Layanan mereka luar biasa! Sangat responsif dan membantu.',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        name: 'Ahmad Fauzi',
        text: 'Saya sangat puas dengan kualitas produk yang diberikan.',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Siti Nurhaliza',
        text: 'Pengalaman saya sangat positif, pasti akan kembali lagi!',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        name: 'Budi Santoso',
        text: 'Tim yang profesional dan ramah.',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
]

const Review = () => {
    return (
        <section id='review' className="py-24 px-4 md:px-12 font-montserrat bg-gray-100">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-4xl font-bold mb-8 text-black"
            >
                Apa kata mereka?
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map((review, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="rounded-2xl p-6 shadow-xl bg-slate-800 text-white flex flex-col items-center text-center"
                    >
                        <img
                            src={review.image}
                            alt={review.name}
                            className="w-16 h-16 rounded-full mb-4 border-2 border-white"
                        />
                        <p className="text-base italic mb-4">"{review.text}"</p>
                        <p className="text-sm font-semibold">- {review.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Review
