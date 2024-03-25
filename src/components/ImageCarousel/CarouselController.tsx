import React from "react";
import { CarouselControllerProps } from "./props";
import StyledCarouselController from "../../styles/components/ImageCarousel/CarouselController.styled";

const CarouselController: React.FC<CarouselControllerProps> = ({
  isNext,
  onClick,
}) => {
  return (
    <StyledCarouselController $isnext={isNext} onClick={onClick}>
      {isNext ? ">" : "<"}
    </StyledCarouselController>
  );
};

export default CarouselController;
