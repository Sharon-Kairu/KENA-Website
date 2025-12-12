'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const data = [
  { month: 'January', img: '/glitter.png', link: 'https://wa.me/p/25073444312306948/254713449911' },
  { month: 'February', img: '/decor.png', link: 'https://wa.me/p/25053115484379522/254713449911' },
  { month: 'March', img: '/live-streaming.png', link: 'https://wa.me/p/32113998158248548/254713449911' },
  { month: 'April', img: '/education.png', link: 'https://wa.me/p/24778244841847884/254713449911' },
  { month: 'May', img: '/car.png', link: 'https://wa.me/p/32157170200595462/254713449911' },
  { month: 'June', img: '/medal.png', link: 'https://wa.me/p/25186690814284428/254713449911' },
  { month: 'July', img: '/fireworks.png', link: 'https://wa.me/p/25111408315136799/254713449911' },
  { month: 'August', img: '/bot.png', link: 'https://wa.me/p/24985375181120231/254713449911' },
  { month: 'September', img: '/book.png', link: 'https://wa.me/p/32004989809144656/254713449911' },
  { month: 'October', img: '/partner.png', link: 'https://wa.me/p/23994366813572979/254713449911' },
  { month: 'November', img: '/roadmap.png', link: 'https://wa.me/p/25913306444937650/254713449911' },
  { month: 'December', img: '/christmas-tree.png', link: 'https://wa.me/p/25416445817951612/254713449911' },
];

const Page = () => {
  return (
    <div className="m-8 md:m-20 pt-18">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
        View Our Monthly Offers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-row items-center gap-16 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: 'easeOut',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 8px 20px rgba(255, 165, 0, 0.3)',
            }}
            viewport={{ once: true }}
          >
            {/* Icon Section */}
            <div className="bg-orange-100 w-24 h-24 md:w-20 md:h-20 relative mb-4 sm:mb-0 sm:mr-4 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={item.img}
                alt={item.month}
                fill
                className="object-contain p-3"
              />
            </div>

            {/* Text & Link */}
            <div className="flex flex-col items-start text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {item.month}
              </h2>
              <a
                href={item.link}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm md:text-base"
              >
                View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
