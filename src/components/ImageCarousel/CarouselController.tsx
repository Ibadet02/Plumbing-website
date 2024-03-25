import React from "react";
import { CarouselControllerProps } from "./props";
import StyledCarouselController from "../../styles/components/ImageCarousel/CarouselController.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CarouselController: React.FC<CarouselControllerProps> = ({
  isNext,
  onClick,
}) => {
  const generateArrowIcon = () => {
    return isNext ? faArrowRight : faArrowLeft;
  };
  return (
    <StyledCarouselController $isnext={isNext} onClick={onClick}>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={generateArrowIcon()} />
      </div>
    </StyledCarouselController>
  );
};

export default CarouselController;
