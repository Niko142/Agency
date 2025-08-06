import { useEffect, useState, type ReactElement } from "react";
import { testimonials } from "@/data/data";
import rightArrow from "@assets/images/Arrow_right.svg";
import leftArrow from "@/assets/images/Arrow_left.svg";
import "@assets/styles/slider.css";

import type { BtnSliderProps, FeedbackProps, ITestimonials } from "@/types";

function BtnSlider({ src, moveSlide }: BtnSliderProps) {
  return (
    <button className="btn_slide" onClick={moveSlide}>
      <img src={src} alt="Arrow" />
    </button>
  );
}

const Feedback = ({ imgIndex }: FeedbackProps): ReactElement => {
  return (
    <div className="feedback">
      {testimonials.map((item: ITestimonials, ind: number) => {
        let position = "slide_next";
        if (ind === imgIndex) {
          position = "slide_active";
        }
        if (
          ind === imgIndex - 1 ||
          (ind === 0 && imgIndex === testimonials.length - 1)
        ) {
          position = "slide_prev";
        }
        return (
          <div className={position} key={item.id}>
            <div className="feedback_wrap">
              <p>{item.description}</p>
            </div>
            <div className="desc">
              <h4 className="name">{item.name}</h4>
              <p>{item.employee}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Slider(): ReactElement {
  const [test] = useState<ITestimonials[]>(testimonials);
  const [imgIndex, setIndex] = useState<number>(0);

  useEffect(() => {
    const lastIndx = test.length - 1;
    if (imgIndex < 0) {
      setIndex(lastIndx);
    }
    if (imgIndex > lastIndx) {
      setIndex(0);
    }
  }, [imgIndex, test]);

  const prevSlide = (): void => {
    setIndex((prev) => prev - 1);
  };

  const nextSlide = (): void => {
    setIndex((prev) => prev + 1);
  };

  return (
    <div className="test_wrap">
      <Feedback imgIndex={imgIndex} />
      <div className="navigation">
        <BtnSlider src={leftArrow} moveSlide={prevSlide} />
        <BtnSlider src={rightArrow} moveSlide={nextSlide} />
      </div>
    </div>
  );
}
