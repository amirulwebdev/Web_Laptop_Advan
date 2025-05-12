import React from 'react';
import { motion } from 'framer-motion';

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
        text: 'Keren advan!',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        name: 'Budi Santoso',
        text: 'Desainnya keren minimalis.',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
];

const Review = () => {
    return (
        <section id='review' className="py-16 md:py-24 px-6 md:px-12 bg-gray-100 text-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
            >
                Apa kata mereka?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {reviews.map((review) => (
                    <motion.article
                        key={review.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="rounded-xl p-6 shadow-lg bg-white text-gray-800 flex flex-col items-center hover:shadow-xl transition-shadow"
                    >
                        <div className="mb-4">
                            <img
                                src={review.image}
                                alt={`Foto ${review.name}`}
                                width={64}
                                height={64}
                                loading="lazy"
                                className="w-16 h-16 rounded-full object-cover border-2 border-pink-500"
                                decoding="async"
                            />
                        </div>
                        <blockquote className="italic mb-4 text-gray-700">
                            "{review.text}"
                        </blockquote>
                        <footer className="text-sm font-semibold text-pink-600">
                            — {review.name}
                        </footer>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default Review;