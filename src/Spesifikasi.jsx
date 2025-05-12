import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Laptop, Microchip, HardDrive, TvMinimalPlay, Keyboard } from 'lucide-react';

const Layanan = () => {
    return (
        <section id="layanan" className="py-16 px-6 md:px-20 bg-white text-black">
            <div className="text-center font-montserrat font-bold text-4xl mb-6">
                Spesifikasi
            </div>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
                Performa tinggi, tampilan jernih, dan konektivitas lengkap. Cocok untuk kerja, kreator, dan gaming ringan.
            </p>

            <div className="grid gap-10 md:grid-cols-3">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title} // Lebih baik gunakan title sebagai key daripada index
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }} // Tambahkan margin untuk trigger lebih awal
                        className="flex flex-col items-center text-center px-4"
                    >
                        <div className="bg-pink-600 p-4 rounded-full mb-4">
                            <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-800 text-sm leading-relaxed max-w-xs">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const services = [
    {
        title: 'Processor',
        description: 'AMD Hexa Core Ryzen 5 6600H Up To 4.5GHz (6C/12T)',
        icon: Cpu,
    },
    {
        title: 'Display',
        description: '14″ 16:10 FHD 1920×1080 IPS',
        icon: Laptop,
    },
    {
        title: 'Memory',
        description: '16GB DDR5 (Onboard)',
        icon: Microchip,
    },
    {
        title: 'Storage',
        description: '512GB SSD NVMe PCIe 3.0 (Free 1 Slot SSD)',
        icon: HardDrive,
    },
    {
        title: 'Graphic Card',
        description: 'AMD Radeon Graphics',
        icon: TvMinimalPlay,
    },
    {
        title: 'Keyboard',
        description: 'Backlit, 1.4mm Travel, Fingerprint',
        icon: Keyboard,
    },
];

export default Layanan;