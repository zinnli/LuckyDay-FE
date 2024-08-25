import * as S from "./Carousel.styled";
import { useState } from "react";
import { ArrowIcon } from "assets";
import { useSwipeable } from "react-swipeable";

interface CarouselProps {
  images: string[];
  texts: string[];
}

export default function Carousel({ images, texts }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = (): void => {
    if (activeIndex < images.length - 1) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
    }
  };

  const handlePrevSlide = (): void => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
    }
  };

  const handleDotClick = (index: number): void => {
    setActiveIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
  });

  return (
    <S.CarouselContainer {...handlers}>
      <S.TextBox>{texts[activeIndex]}</S.TextBox>
      <S.SlideContainer activeIndex={activeIndex}>
        {images.map((image, index) => (
          <S.Slide key={index} active={index === activeIndex}>
            <S.Image src={image} alt={`Slide ${index}`} />
          </S.Slide>
        ))}
      </S.SlideContainer>
      <S.ButtonContainer>
        <S.PrevButton onClick={handlePrevSlide} disabled={activeIndex === 0}>
          <ArrowIcon css={S.PrevArrowIcon} />
        </S.PrevButton>
        <S.DotContainer>
          {images.map((_, index) => (
            <S.Dot
              key={index}
              active={index === activeIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </S.DotContainer>
        <S.NextButton
          onClick={handleNextSlide}
          disabled={activeIndex === images.length - 1}
        >
          <ArrowIcon css={S.NextArrowIcon} />
        </S.NextButton>
      </S.ButtonContainer>
    </S.CarouselContainer>
  );
}
