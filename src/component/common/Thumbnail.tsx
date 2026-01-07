'use client';

import IconClose from '@/component/icon/IconClose';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useState } from 'react';

interface Props {
  id: number;
  image: string;
  category: string;
  title: string;
  aosType?: string;
  aosDuration?: number;
}

export default function Thumbnail() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const cards: Props[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      category: 'Travel',
      title: '5 Inspiring Apps for Your Next Trip',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      category: 'How to',
      title: 'Contemplate the Meaning of Life Twice a DayContemplate the Meaning',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      category: 'Steps',
      title: 'Urban Exploration Apps for the Vertically-Inclined',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
      category: 'Hats',
      title: 'Take Control of Your Hat Life With This Stunning New App',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      category: 'Travel',
      title: '5 Inspiring Apps for Your Next Trip',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      category: 'How to',
      title: 'Contemplate the Meaning of Life Twice a Day',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      category: 'Steps',
      title: 'Urban Exploration Apps for the Vertically-Inclined',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
      category: 'Hats',
      title: 'Take Control of Your Hat Life With This Stunning New App',
    },
  ];

  const selectedCard = cards.find((card) => card.id === selectedId);

  const modalOpenUse = useCallback((e: number) => {
    setSelectedId(e);

    document.body.classList.add('overflow-hidden');
  }, []);

  const modalCloseUse = useCallback(() => {
    setSelectedId(null);

    document.body.classList.remove('overflow-hidden');
  }, []);

  return (
    <>
      {/* thumbnail */}
      <div className="thumb flex flex-wrap gap-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            data-aos={card.aosType ? card.aosType : 'fade-down'}
            data-aos-duration={card.aosDuration ? card.aosDuration : 1200}
            data-aos-delay={index * 10}
            className="relative max-h-[350px] basis-full cursor-pointer overflow-hidden rounded-2xl md:basis-[40%] md:[&:nth-child(4n+1),&:nth-child(4n+4)]:basis-[calc(60%-10px)]"
          >
            <motion.div
              layoutId={`card-${card.id}`}
              onClick={() => modalOpenUse(card.id)}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <motion.div
                layoutId={`image-${card.id}`}
                className="aspect-[4/3] h-full w-full"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                  width={500}
                  height={500}
                />
              </motion.div>
              <motion.div
                layoutId={`content-${card.id}`}
                className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white"
              >
                <motion.p
                  layoutId={`category-${card.id}`}
                  className="mb-2 text-sm font-medium tracking-wider uppercase"
                >
                  {card.category}
                </motion.p>
                <motion.h2
                  layoutId={`title-${card.id}`}
                  className="text-2xl font-bold"
                >
                  {card.title}
                </motion.h2>
              </motion.div>
            </motion.div>
          </div>
        ))}

        {/* thumbnail modal */}
        <AnimatePresence>
          {selectedId && selectedCard && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={modalCloseUse}
                className="fixed inset-0 z-40 bg-black/60"
              />
              <motion.div
                layoutId={`card-${selectedId}`}
                className="thumb-modal fixed inset-4 z-50 overflow-hidden rounded-2xl bg-white shadow-2xl md:inset-auto md:top-1/2 md:left-1/2 md:max-h-[90vh] md:w-[800px] md:-translate-x-1/2 md:-translate-y-1/2"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  layoutId={`image-${selectedId}`}
                  className="relative h-[calc(100dvh-370px)] w-full md:h-[400px]"
                >
                  <Image
                    src={selectedCard.image}
                    alt={selectedCard.title}
                    className="h-full w-full object-cover"
                    width={500}
                    height={500}
                  />
                  <button
                    onClick={modalCloseUse}
                    className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur transition-colors hover:bg-white"
                  >
                    <IconClose size="12" />
                  </button>
                </motion.div>
                <motion.div
                  layoutId={`content-${selectedId}`}
                  className="thumb-content p-8"
                >
                  <motion.p
                    layoutId={`category-${selectedId}`}
                    className="mb-3 text-sm font-semibold tracking-wider text-blue-600 uppercase"
                  >
                    {selectedCard.category}
                  </motion.p>
                  <motion.h2
                    layoutId={`title-${selectedId}`}
                    className="mb-6 text-4xl font-bold"
                  >
                    {selectedCard.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="mb-4 leading-relaxed text-gray-600">
                      Discover amazing applications that will transform the way you approachDiscover amazing
                      applications that will transform the way you approachDiscover amazing applications that will
                      transform the way you approachDiscover amazing applications that will transform the way you
                      approachDiscover amazing applications that will transform the way you approachDiscover amazing
                      applications that will transform the way you approachDiscover amazing applications that will
                      transform the way you approachDiscover amazing applications that will transform the way you
                      approachDiscover amazing applications that will transform the way you approachDiscover amazing
                      applications that will transform the way you approachDiscover amazing applications that will
                      transform the way you approachDiscover amazing applications that will transform the way you
                      approachDiscover amazing applications that will transform the way you approachDiscover amazing
                      applications that will transform the way you approachDiscover amazing applications that will
                      transform the way you approachDiscover amazing applications that will transform the way you
                      approachDiscover amazing applications that will transform the way you approachDiscover amazing
                      applications that will transform the way you approachamazing applications that will transform the
                      way you approachDiscover amazing applications that will transform the way you approachDiscover
                      amazing applications that will transform the way you approachDiscover amazing applications that
                      will transform the way you approachDiscover amazing applications that will transform the way you
                      approachDiscover amazing applications that will transform the way you approachDiscover amazing
                      applications that will transform the way you approachDiscover amazing applications that will
                      transform the way you approachDiscover amazing applications that will transform the way you
                      approachDiscover amazing applications that will transform the way you approachDiscover amazing
                      applications that will transform the way you approachamazing applications that will transform the
                      way you approachDiscover amazing applications that will transform the way you approachDiscover
                      amazing applications that will transform the way you approachDiscover amazing applications that
                      will transform the way you approachDiscover amazing applications that will transform the way you
                      approachDiscover amazing applications that will transform the way you approachDiscover amazing
                      applications that will transform the way you approachDiscover amazing applications that will
                      transform the way you approachDiscover amazing applications that will transform the way you
                      approachDiscover amazing applications that will transform the way you approachDiscover amazing
                      applications that will transform the way you approach
                      {selectedCard.category.toLowerCase()}. Our curated selection brings you the best tools and
                      experiences.
                    </p>
                    <p className="mb-6 leading-relaxed text-gray-600">
                      Each app has been carefully reviewed by our team to ensure quality, usability, and innovation.
                      Download today and start your journey.
                    </p>
                    <button className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition-colors hover:bg-blue-700">
                      View Collection
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
