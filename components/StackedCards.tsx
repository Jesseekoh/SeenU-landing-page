import Image from 'next/image';

type Card = {
  src: string;
  alt: string;
};

const cards: Card[] = [
  {
    src: '/IMG-20251223-WA0056.jpg',
    alt: 'Some Girls holding a SeenU placard',
  },
  {
    src: '/IMG-20251223-WA0053.jpg',
    alt: 'Two Girls Holding a SeenU placard',
  },
  {
    src: '/IMG-20251223-WA0055.jpg',
    alt: 'Guy holding a SeenU placard',
  },
];

export default function StackedCards() {
  return (
    <div className="relative flex items-center h-[276px] md:h-[320px] lg:h-[461px] w-full max-w-[400px] lg:max-w-[540px] mx-auto">
      <div className="relative w-full h-full flex items-center">
        {cards.map((card, index) => {
          // Calculate position for each card:
          // Card 0: left edge (0)
          // Card 1: center of remaining space
          // Card 2: right edge
          const getPosition = () => {
            if (index === 0) return '0px';
            if (index === 1) return 'calc((100% - 221px) / 2)'; // Small screens
            return 'calc(100% - 221px)'; // Card 2 touches right
          };

          const getPositionMd = () => {
            if (index === 0) return '0px';
            if (index === 1) return 'calc((100% - 256px) / 2)'; // Medium screens
            return 'calc(100% - 256px)';
          };

          const getPositionLg = () => {
            if (index === 0) return '0px';
            if (index === 1) return 'calc((100% - 368px) / 2)'; // Large screens
            return 'calc(100% - 368px)';
          };

          return (
            <div
              key={index}
              className={`absolute flex items-center card-wrapper-${index}`}
              style={{
                left: getPosition(),
                zIndex: 10 - index,
              }}
            >
              {/* Responsive positioning overrides */}
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    @media (min-width: 768px) {
                      .card-wrapper-${index} {
                        left: ${getPositionMd()} !important;
                      }
                    }
                    @media (min-width: 1024px) {
                      .card-wrapper-${index} {
                        left: ${getPositionLg()} !important;
                      }
                    }
                  `,
                }}
              />

              {/* Small screens: 221x276 base */}
              <div
                className={`relative rounded-2xl overflow-hidden 
                  ${
                    index === 0
                      ? 'w-[221px] h-[276px] md:w-[256px] md:h-[320px] lg:w-[368px] lg:h-[461px]'
                      : ''
                  }
                  ${
                    index === 1
                      ? 'w-[221px] h-[235px] md:w-[256px] md:h-[272px] lg:w-[368px] lg:h-[392px]'
                      : ''
                  }
                  ${
                    index === 2
                      ? 'w-[221px] h-[193px] md:w-[256px] md:h-[224px] lg:w-[368px] lg:h-[323px]'
                      : ''
                  }
                `}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  unoptimized
                  className="object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
