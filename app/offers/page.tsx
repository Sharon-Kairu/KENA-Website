'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const data = [
  { month: 'January', img: '/glitter.png', link: '' },
  { month: 'February', img: '/decor.png', link: '' },
  { month: 'March', img: '/live-streaming.png', link: '' },
  { month: 'April', img: '/education.png', link: '' },
  { month: 'May', img: '/car.png', link: '' },
  { month: 'June', img: '/medal.png', link: '' },
  { month: 'July', img: '/fireworks.png', link: '' },
  { month: 'August', img: '/bot.png', link: '' },
  { month: 'September', img: '/book.png', link: '' },
  { month: 'October', img: '/partner.png', link: '' },
  { month: 'November', img: '/roadmap.png', link: '' },
  { month: 'December', img: '/christmas-tree.png', link: '' },
];

const Page = () => {
  return (
    <div className="m-8 md:m-20">
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
