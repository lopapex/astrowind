import { useState, useRef, useEffect } from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import cn from 'classnames';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  description?: string;
};

type Team = {
  team: TeamMember[];
};

const TeamContainer = ({ team }: Team) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    if (containerRef.current) {
      const isOverflowing = containerRef.current.scrollWidth > containerRef.current.clientWidth;
      setIsScrollable(isOverflowing);
    }
  }, [team]);

  const scrollLeft = () => {
    if (containerRef.current) {
      const newPosition = Math.max(0, scrollPosition - 330);
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      const newPosition = Math.min(maxScroll, scrollPosition + 330);
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
      setScrollPosition(newPosition);
    }
  };

  const handleCardClick = (id: string) => {
    setSelected((prev) => {
      if (prev === id) {
        return '';
      }
      return id;
    });

    setTimeout(() => {
      if (containerRef.current) {
        const selectedElement = containerRef.current.querySelector(`#${id}`);

        if (selectedElement) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const elementRect = selectedElement.getBoundingClientRect();

          const scrollPosition = elementRect.left - containerRect.left + containerRef.current.scrollLeft;
          const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
          const newScrollPosition = Math.min(scrollPosition, maxScroll);

          containerRef.current.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth',
          });
        }
      }
    }, 100);
  };

  return (
    <div className="relative w-full">
      {isScrollable && (
        <button
          onClick={scrollLeft}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-85 text-white p-2 rounded-full shadow-lg z-10"
          style={{ visibility: scrollPosition > 0 ? 'visible' : 'hidden' }}
        >
          <IconArrowLeft className="w-5 h-5" />
        </button>
      )}

      <div
        className="flex overflow-x-auto space-x-4 scroll-smooth"
        ref={containerRef}
        onScroll={() => {
          if (containerRef.current) {
            setScrollPosition(containerRef.current.scrollLeft);
          }
        }}
      >
        {team.map((member) => (
          <div
            id={member.id}
            className={cn(
              'flex-shrink-0 shadow-md bg-primary rounded-lg p-4 text-center hover:cursor-pointer max-h-[600px] overflow-y-auto',
              {
                'w-60': selected !== member.id,
                'w-full [&>*]:text-left transition-all duration-100': selected === member.id,
              }
            )}
            key={member.id}
            onClick={() => handleCardClick(member.id)}
          >
            <img
              src={member.image}
              alt={member.name}
              className={cn('object-cover rounded-md mb-4', {
                'w-full h-40': selected !== member.id,
                'md:w-40 md:h-40 md:float-left md:mr-4 w-full h-40': selected === member.id,
              })}
            />

            <h3 className="text-lg font-bold text-white">{member.name}</h3>
            <p className="text-sm text-gray-200">{member.role}</p>

            {member.description && (
              <div
                className={cn('prose prose-sm text-gray-300 mt-2 !max-w-full', {
                  'line-clamp-5': selected !== member.id,
                })}
                dangerouslySetInnerHTML={{ __html: member.description }}
              />
            )}
          </div>
        ))}
      </div>

      {isScrollable && (
        <button
          onClick={scrollRight}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-85 text-white p-2 rounded-full shadow-lg z-10"
          style={{
            visibility:
              containerRef.current &&
              containerRef.current.scrollWidth - containerRef.current.clientWidth > scrollPosition
                ? 'visible'
                : 'hidden',
          }}
        >
          <IconArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default TeamContainer;
