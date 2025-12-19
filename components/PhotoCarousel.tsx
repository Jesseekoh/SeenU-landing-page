'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const cards = [
  {
    id: 1,
    name: 'Donna, 28',
    color: '#FFC300',
    img: 'https://bumble.com/_next/image/?url=%2Fbumble-brand-assets%2Fassets%2Fanimation-card-1.jpg&w=1600&q=75',
  },
  {
    id: 2,
    name: 'Josh, 34',
    color: '#FFC300',
    img: 'https://bumble.com/_next/image/?url=%2Fbumble-brand-assets%2Fassets%2Fanimation-card-1.jpg&w=1600&q=75',
  },
  {
    id: 3,
    name: 'Tiana, 30',
    color: '#FFC300',
    img: 'https://bumble.com/_next/image/?url=%2Fbumble-brand-assets%2Fassets%2Fanimation-card-1.jpg&w=1600&q=75',
  },
];

const BumbleCarousel = () => {
  const [items, setItems] = useState(cards);

  const rotateItems = () => {
    setItems((prev) => {
      const newArray = [...prev];
      const firstItem = newArray.shift();
      if (firstItem) {
        newArray.push(firstItem);
      }
      return newArray;
    });
  };

  return (
    <div className="carousel-container">
      <div className="stage" onClick={rotateItems}>
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            // Logic for the 3 visual positions
            const isFront = index === 0;
            const isMiddle = index === 1;
            const isBack = index === 2;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  zIndex: items.length - index,
                  x: index * 60, // Moves cards to the right
                  scale: 1 - index * 0.1, // Shrinks background cards
                  rotateY: -25, // The 3D tilt effect
                  opacity: index > 2 ? 0 : 1, // Hide cards beyond the 3rd
                }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-[300px] h-[400px]"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="card-label">{item.name}</div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BumbleCarousel;
