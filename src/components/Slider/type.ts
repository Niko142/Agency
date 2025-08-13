import type { ITestimonials } from "@/types";

export interface PaginationProps {
  slidesData: object[];
  currentSlide: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (ind: number) => void;
}

export interface PaginationDotProps {
  active: boolean;
}

export type SliderConfig = {
  slideWidth: number;
  containerWidth: number;
  gap: number;
};

export interface SliderCardProps {
  slideItem: ITestimonials;
  width: number;
}
