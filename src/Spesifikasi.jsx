import React from 'react'
import { motion } from 'framer-motion'
import laptop from './assets/workplus-1.png' // Ganti default import (tanpa kurung kurawal)

const Spesifikasi = () => {
    return (
        <div id='spesifikasi' className="py-16 px-6 md:px-20 bg-white">
            <div className="text-center font-montserrat font-bold text-4xl mb-12 text-gray-800">
                SPESIFIKASI
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* KIRI */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="px-6 md:px-0"
                >
                    <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-red-700 mb-4 text-center md:text-left">
                        ADVAN Workplus
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg text-center md:text-left">
                        Performa tinggi, tampilan jernih, dan konektivitas lengkap. Cocok untuk kerja, kreator, dan gaming ringan.
                    </p>
                    <img
                        src={laptop}
                        alt="Advan Workplus"
                        className="mx-auto md:mx-0 w-full max-w-sm"
                    />
                </motion.div>

                {/* KANAN */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="bg-red-700 p-6 rounded-2xl shadow-lg text-sm text-slate-50 leading-relaxed font-medium"
                >
                    <ul className="list-disc pl-5 space-y-2 font-montserrat">
                        <li><strong>Processor:</strong> AMD Hexa Core Ryzen 5 6600H Up To 4.5GHz (6C/12T)</li>
                        <li><strong>Display:</strong> 14″ 16:10 FHD 1920×1080 IPS</li>
                        <li><strong>Memory:</strong> 16GB DDR5 (Onboard)</li>
                        <li><strong>Storage:</strong> 512GB SSD NVMe PCIe 3.0 (Free 1 Slot SSD)</li>
                        <li><strong>Graphic Card:</strong> AMD Radeon Graphics</li>
                        <li><strong>Keyboard:</strong> Backlit, 1.4mm Travel, Fingerprint</li>
                        <li><strong>WiFi:</strong> 802.11 b/g/n/ac/ax, Bluetooth</li>
                        <li><strong>Port:</strong> 2x USB-C, 2x USB 3.2, MicroSD, HDMI, Jack 3.5mm</li>
                        <li><strong>Camera:</strong> Yes</li>
                        <li><strong>Speaker:</strong> 2x box speakers 4Ω 2W</li>
                        <li><strong>Battery:</strong> 5050mAh 58Wh</li>
                        <li><strong>OS:</strong> Windows 11 Original</li>
                        <li><strong>Garansi:</strong> Resmi Advan 1 Tahun</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default Spesifikasi
