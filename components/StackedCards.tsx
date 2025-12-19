import Image from 'next/image';

type Card = {
  src: string;
  label: string;
};

const cards: Card[] = [
  {
    src: 'https://bumble.com/_next/image/?url=%2Fbumble-brand-assets%2Fassets%2Fanimation-card-1.jpg&w=1600&q=75', // replace with your image
    label: 'Outdoors',
  },
  {
    src: 'https://bumble.com/_next/image/?url=%2Fbumble-brand-assets%2Fassets%2Fanimation-card-1.jpg&w=1600&q=75',
    label: 'Running',
  },
  {
    src: 'https://bumble.com/_next/image/?url=%2Fbumble-brand-assets%2Fassets%2Fanimation-card-1.jpg&w=1600&q=75',
    label: 'Dog parent',
  },
];

export default function StackedCards() {
  return (
    <div className="relative flex items-end gap-4">
      {cards.map((card, index) => (
        <div
          key={card.label}
          className="relative rounded-3xl overflow-hidden"
          style={{
            width: index === 0 ? 280 : 200,
            height: index === 0 ? 360 : 260,
            zIndex: 10 - index,
          }}
        >
          {/* Image */}
          <Image
            src={card.src}
            alt={card.label}
            fill
            className="object-cover"
          />

          {/* Vertical tag */}
          <div className="absolute top-6 right-3">
            <span className="bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full rotate-90 inline-block">
              {card.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
