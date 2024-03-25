import React, { useState } from "react";
import StyledImageCarousel from "../../styles/components/ImageCarousel/index.styled";
import StyledAbsoluteSection from "../../styles/pages/AbsoluteSection.styled";
import InfoBanner from "../Banners/InfoBanner";
import thirdInfoBanner from "../../data/pages/Home/infoBanner/thirdInfoBanner";
import { ImageCarouselProps } from "./props";
import StyledCarouselImage from "../../styles/components/ImageCarousel/CarouselImage.styled";
import CarouselController from "./CarouselController";

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const srcs = images.map((image) => image.src);
  const alts = images.map((image) => image.alt);
  function showNextImage() {
    setImageIndex((imageIndex + 1) % srcs.length);
  }
  function showPrevImage() {
    setImageIndex((imageIndex - 1 + srcs.length) % srcs.length);
  }
  return (
    <StyledImageCarousel>
      <StyledAbsoluteSection $height="5rem">
        <InfoBanner {...thirdInfoBanner} />
      </StyledAbsoluteSection>
      <CarouselController onClick={showPrevImage} isNext={false} />
      <CarouselController onClick={showNextImage} isNext={true} />
      <div className="image-group">
        {srcs.map((src, index) => (
          <StyledCarouselImage
            style={{ translate: `${imageIndex * -100}%` }}
            key={src}
            src={src}
            alt={alts[index]}
            onClick={() => setImageIndex(index)}
          />
        ))}
      </div>
      <div className="img-slider--dot-btn-group">
        {images.map(({ src }, index) => (
          <button
            key={src}
            className={
              index === imageIndex
                ? "img-slider--dot-btn active"
                : "img-slider--dot-btn"
            }
            onClick={() => setImageIndex(index)}
          >
            <div className="active-dot"></div>
          </button>
        ))}
      </div>
    </StyledImageCarousel>
  );
};

export default ImageCarousel;
