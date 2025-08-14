import { useCallback, useState, useEffect, useMemo } from "react";
import type { SliderConfig } from "./type";
import { testimonialsSlides } from "@/data/data";
import Pagination from "./Pagination";
import SliderCard from "./SliderCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0); // Индекс текущего слайда

  const [config, setConfig] = useState<SliderConfig>({
    slideWidth: 0, // Ширина слайда
    containerWidth: 0, // Ширина контейнера
    gap: 0, // Отступ между слайдами
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Аналог ResizeObserver
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobSlide = Math.floor(width - 40);
      let newOptions: SliderConfig;

      switch (true) {
        case width < 640:
          newOptions = {
            slideWidth: mobSlide,
            containerWidth: mobSlide,
            gap: 20,
          };
          break;

        case width < 768:
          newOptions = {
            slideWidth: 400,
            containerWidth: 727,
            gap: 35,
          };
          break;

        case width < 1024:
          newOptions = {
            slideWidth: 500,
            containerWidth: 900,
            gap: 40,
          };
          break;

        default:
          newOptions = {
            slideWidth: 616,
            containerWidth: 1240,
            gap: 80,
          };
      }

      setConfig(newOptions);
      setTimeout(() => setIsLoading(false), 1500);
      // setIsLoading(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Обработчик для кнопки на переключение к предыдущему слайду
  const prevSlide = useCallback((): void => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonialsSlides.length - 1 : prev - 1,
    );
  }, []);

  // Обработчик для кнопки на переключение к следующему слайду
  const nextSlide = useCallback((): void => {
    setCurrentSlide((prev) =>
      prev === testimonialsSlides.length - 1 ? 0 : prev + 1,
    );
  }, []);

  const onDotClick = useCallback((ind: number) => {
    setCurrentSlide(ind);
  }, []);

  // Центрирование активного слайда
  const translateX = useMemo(
    () =>
      -(
        currentSlide * (config.slideWidth + config.gap) -
        (config.containerWidth / 2 - config.slideWidth / 2)
      ),
    [config, currentSlide],
  );

  return (
    <div className="bg-dark mb:pb-17 relative rounded-[45px] py-10 sm:py-14 md:pt-21">
      <div
        className="mx-auto overflow-hidden"
        style={{ width: `${config.containerWidth || "100%"}px` }}
      >
        {isLoading ? (
          <div className="flex justify-center gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Skeleton
                key={idx}
                width={200}
                height={200}
                borderRadius={24}
                baseColor="#2d2d2d"
                highlightColor="#3a3a3a"
              />
            ))}
          </div>
        ) : (
          <div
            className="flex transition-transform duration-500"
            style={{
              gap: `${config.gap}px`,
              transform: `translateX(${translateX}px)`,
            }}
          >
            {testimonialsSlides.map((slide) => (
              <SliderCard
                key={slide.id}
                slideItem={slide}
                width={config.slideWidth}
              />
            ))}
          </div>
        )}
      </div>

      {!isLoading && (
        <Pagination
          slidesData={testimonialsSlides}
          currentSlide={currentSlide}
          onDotClick={onDotClick}
          onNext={nextSlide}
          onPrev={prevSlide}
        />
      )}
    </div>
  );
}
